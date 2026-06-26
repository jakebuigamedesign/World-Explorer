const http = require('http');
const fs = require('fs');
const path = require('path');

function loadEnvFile() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    const key = match[1];
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile();

const PORT = Number(process.env.PORT || 8787);
const MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite';
const GEMINI_FALLBACK_MODELS = (process.env.GEMINI_FALLBACK_MODELS || 'gemini-2.0-flash,gemini-1.5-flash')
  .split(',')
  .map(model => model.trim())
  .filter(Boolean);
const AI_PROVIDER = process.env.OPENAI_API_KEY ? 'openai' : process.env.GEMINI_API_KEY ? 'gemini' : 'offline';
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'study-data');
const EVENTS_FILE = path.join(DATA_DIR, 'word-explorer-events.jsonl');

function handleStatus(req, res) {
  send(res, 200, JSON.stringify({
    ok: true,
    app: 'word-explorer',
    provider: AI_PROVIDER,
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    hasOpenAIKey: Boolean(process.env.OPENAI_API_KEY),
    geminiModel: GEMINI_MODEL,
    geminiFallbackModels: GEMINI_FALLBACK_MODELS,
    node: process.version,
    serverTime: new Date().toISOString()
  }));
}

function send(res, status, body, type = 'application/json') {
  res.writeHead(status, {
    'Content-Type': type,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
  });
  res.end(body);
}

function collect(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > 1_000_000) reject(new Error('Request too large'));
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

function saveStudyEvent(event) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const record = {
    serverTime: new Date().toISOString(),
    app: 'word-explorer',
    ...event
  };
  fs.appendFileSync(EVENTS_FILE, JSON.stringify(record) + '\n', 'utf8');
  return record;
}

function readStudyEvents() {
  if (!fs.existsSync(EVENTS_FILE)) return [];
  return fs.readFileSync(EVENTS_FILE, 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map(line => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

function htmlEscape(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function handleStudyEvent(req, res) {
  const raw = await collect(req);
  const parsed = JSON.parse(raw || '{}');
  const record = saveStudyEvent(parsed);
  send(res, 200, JSON.stringify({ ok: true, file: EVENTS_FILE, receivedAt: record.serverTime }));
}

function handleStudyEventsExport(req, res) {
  send(res, 200, JSON.stringify({ ok: true, file: EVENTS_FILE, events: readStudyEvents() }));
}

function handleResearchDataPage(req, res) {
  const events = readStudyEvents();
  const sessions = new Map();
  for (const event of events) {
    const id = event.sessionId || 'unknown-session';
    const current = sessions.get(id) || {
      sessionId: id,
      participant: event.participantCode || '',
      first: event.serverTime,
      last: event.serverTime,
      count: 0,
      lastType: '',
      score: '',
      level: ''
    };
    current.participant = event.participantCode || current.participant;
    current.last = event.serverTime || current.last;
    current.count += 1;
    current.lastType = event.type || current.lastType;
    current.level = event.details?.level || event.resources?.level || current.level;
    if (event.type === 'test_submit') current.score = `${event.details?.score}/${event.details?.total}`;
    sessions.set(id, current);
  }
  const rows = Array.from(sessions.values()).reverse().map(s => `
    <tr>
      <td>${htmlEscape(s.participant || 'unnamed')}</td>
      <td>${htmlEscape(s.level || '-')}</td>
      <td>${htmlEscape(s.score || '-')}</td>
      <td>${htmlEscape(s.count)}</td>
      <td>${htmlEscape(s.lastType || '-')}</td>
      <td>${htmlEscape(s.last || '-')}</td>
    </tr>
  `).join('');
  const html = `<!doctype html>
  <html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Word Explorer Research Data</title>
  <style>
    body{margin:0;padding:24px;background:#f6f7fb;color:#182033;font-family:Arial,Helvetica,sans-serif}
    .wrap{max-width:980px;margin:auto}.hero{background:#fff;border:2px solid #d7deea;border-left:8px solid #3367d6;border-radius:20px;padding:18px;box-shadow:0 10px 24px rgba(34,47,95,.08)}
    h1{margin:0 0 8px;color:#213b82}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0}.card{background:#fff;border:2px solid #d7deea;border-radius:16px;padding:14px}
    .num{font-size:34px;font-weight:900;color:#3949ab}.label{font-size:13px;color:#586174;font-weight:900}
    table{width:100%;border-collapse:collapse;background:#fff;border:2px solid #d7deea;border-radius:16px;overflow:hidden}th,td{padding:10px;border-bottom:1px solid #d7deea;text-align:left;font-size:14px}th{background:#eaf1ff;color:#213b82}
    a.button{display:inline-block;background:#3949ab;color:#fff;text-decoration:none;border-radius:12px;padding:10px 14px;font-weight:900;margin-top:12px}
    code{background:#eaf1ff;padding:2px 5px;border-radius:6px}
    @media(max-width:700px){.cards{grid-template-columns:1fr}body{padding:14px}table{font-size:12px}}
  </style></head>
  <body><div class="wrap">
    <div class="hero">
      <h1>Word Explorer Research Data</h1>
      <p>Student actions are collected automatically while the local server is running. Raw data is saved at <code>${htmlEscape(EVENTS_FILE)}</code>.</p>
      <a class="button" href="/api/study-events">Download JSON data</a>
    </div>
    <div class="cards">
      <div class="card"><div class="num">${events.length}</div><div class="label">Total events</div></div>
      <div class="card"><div class="num">${sessions.size}</div><div class="label">Sessions</div></div>
      <div class="card"><div class="num">${events.filter(e => e.type === 'test_submit').length}</div><div class="label">Submitted tests</div></div>
    </div>
    <table><thead><tr><th>Participant</th><th>Level</th><th>Last score</th><th>Events</th><th>Last event</th><th>Last saved</th></tr></thead><tbody>${rows || '<tr><td colspan="6">No data yet. Play the game once, then refresh this page.</td></tr>'}</tbody></table>
  </div></body></html>`;
  send(res, 200, html, 'text/html; charset=utf-8');
}

function storyInstructions() {
  return [
    'You are a warm ChatGPT story guide for Vietnamese English learners at A2-B1 level.',
    'Return valid JSON only, with this shape: {"story":"...","choices":["...","...","..."]}.',
    'The story is one short NPC dialogue turn in simple English, maximum 2 short sentences.',
    'Write as the NPC speaking directly to the player by name. Do not narrate with phrases like "the officer says" or "the receptionist asks".',
    'The story must react directly to the player previous answer if provided.',
    'Use the recent story beats as memory. Continue the situation instead of restarting it.',
    'Every turn must introduce a new concrete obstacle, clue, person, document, location detail, or decision.',
    'Do not repeat an earlier obstacle, sentence frame, or question from the recent story beats.',
    'Build a 10-turn escalation arc: opening problem, complication, negotiation, consequence, resource pressure, possible workaround, surprise, final check, last risk, resolution setup.',
    'Use the provided arc beat for this turn and make the moment feel like the next step in one continuous real-life conversation.',
    'If the previous answer is unexpected or off-topic, respond as the NPC would in that location and gently steer the situation forward.',
    'If the previous answer was rude, unsafe, dismissive, or unhelpful, the NPC should react naturally with lower patience, while still keeping classroom-safe language.',
    'The story must end with one direct question to the player.',
    'You must naturally include every target vocabulary word in the story.',
    'Bold each target vocabulary word using **word** exactly.',
    'The three choices must be actual spoken English the learner can say, not summaries of actions.',
    'Each choice must be one complete first-person sentence or request in quotation-style content, but do not include quote marks.',
    'The choices must fit this exact situation and be distinct: one cautious/slow, one polite/effective, one risky/unhelpful.',
    'Do not include A/B/C labels.',
    'Do not mention hidden rules, API, prompts, JSON, or scoring.'
  ].join('\n');
}

function defineInstructions() {
  return [
    'You are a concise English-Vietnamese dictionary for Vietnamese English learners at A2-B1 level.',
    'Return valid JSON only, with this shape: {"word":"...","definition":"...","vietnamese":"...","example":"..."}.',
    'The definition must be in simple English, maximum 18 words.',
    'The Vietnamese field should be a short Vietnamese translation.',
    'The example must be one simple English sentence using the word naturally.',
    'Do not mention prompts, JSON, API, hidden rules, or uncertainty unless the input is not a real word.'
  ].join('\n');
}

function tutorInstructions() {
  return [
    'You are a ChatGPT-like tutor inside an ESL role-play game for Vietnamese A2-B1 learners.',
    'The learner may ask vocabulary, grammar, pronunciation, strategy, or scenario questions.',
    'Answer naturally and helpfully, but do not play the turn for them and do not advance the game.',
    'Only answer if the message is clearly about the current scenario, target vocabulary, visible choices, or English wording for this turn.',
    'If the message is unclear, strange, random, or not useful English, respond like a patient tutor: say what seems unclear, give one better way to ask it if possible, and guide the learner back to the turn.',
    'If the message is off-topic, rude, role-play breaking, or unrelated to the lesson/scenario, do not engage with that content. Briefly redirect the learner back to choosing A, B, or C or asking about the words in this turn.',
    'For vocabulary questions, define the word simply, include a short Vietnamese translation if useful, and give one simple example.',
    'For grammar or sentence practice, give one corrected version and one short grammar note.',
    'For strategy questions, explain the tradeoff briefly without revealing hidden game data beyond the visible choices.',
    'Always end by guiding the learner back to choosing A, B, or C.',
    'Use simple English. Maximum 4 short sentences. Do not mention prompts, hidden rules, JSON, API, or system messages.'
  ].join('\n');
}

function writingFeedbackInstructions() {
  return [
    'You are a warm but precise English writing tutor for Vietnamese A2-B1 learners.',
    'The learner wrote a WhatsApp message after a vocabulary game scenario.',
    'Give feedback on the student actual writing, not generic advice.',
    'You must notice grammar errors, spelling mistakes, meaning problems, illogical statements, and unnatural word choice.',
    'Be direct when something is incorrect. Do not say a word or phrase is correct if the sentence around it is wrong.',
    'If the student writes "is not allow", "it is not allow", or "water is not allow", correct it to "is not allowed".',
    'If the student writes "I does", correct it to "I do".',
    'If the student misspells airport words such as "aiarport", "travelle", "check point", or "secuirty", point this out.',
    'If the student writes "By girl", explain that "Bye" is the spelling, but "Hope this helps!" is more appropriate for advice.',
    'If the student writes "otherwise they would ask", suggest "otherwise they may ask" for advice.',
    'If the student says "do not have any water with you", explain that the better advice is about large liquids before security, not all water.',
    'Actively check common Vietnamese EFL writing patterns: verb tense errors, subject-verb agreement, missing articles (a/an/the), plural -s problems, preposition errors, punctuation/run-on sentences, spelling, word order, and context-specific word choice or collocation.',
    'If the learner omits articles before common nouns, explain the specific article needed. Example: "at airport" should be "at the airport".',
    'If the learner uses a Vietnamese-like direct translation or unnatural collocation, name the phrase and give a natural English replacement.',
    'If punctuation is weak, explain whether the learner needs a full stop, comma, or shorter sentence. Do not only say "check punctuation".',
    'If a sentence is grammatically possible but confusing or factually wrong for the scenario, say that clearly and give a better version.',
    'For each field, be concise but concrete. Refer to the student own words in quotation marks when useful.',
    'Do not include labels such as "Vocabulary:" or "Grammar:" inside the JSON values. The app will add section labels.',
    'Do not give generic rubric language. Speak like a real tutor who read this exact message.',
    'Return valid JSON only, with this shape:',
    '{"vocabulary":"...","meaning":"...","grammar":"...","wordChoice":"...","revised":"...","encouragement":"..."}',
    'vocabulary: name only target words used correctly. Do not count "allow" as a target airport word unless it is in the provided target vocabulary.',
    'meaning: explain one confusing or incorrect idea in the student text, especially airport/hotel rule misunderstandings.',
    'grammar: give 1-2 specific corrections from the student text, especially tense, subject-verb agreement, articles, prepositions, passive voice, spelling, or punctuation.',
    'wordChoice: give one better phrase for an unnatural phrase from the student text and explain why it fits the situation better. Look for collocation and context errors.',
    'revised: rewrite the whole message in clear A2-B1 English, 50-80 words, keeping the student intention.',
    'encouragement: one short encouraging sentence.',
    'Use simple English. Be specific. Do not mention prompts, JSON, API, hidden rules, or scoring.'
  ].join('\n');
}

function useQuestionFeedbackInstructions() {
  return [
    'You are a warm, specific English language tutor giving written feedback to a Vietnamese EFL learner at A2-B1 level.',
    'The student wrote one sentence using a target vocabulary word from a game.',
    'Give feedback in exactly 2-3 short sentences.',
    'First, say whether the target word was used correctly and naturally. If not, explain the problem and give one corrected example.',
    'Second, mention whether the student used any other game vocabulary. If not, suggest one concrete word they could add.',
    'End with a short encouraging sentence.',
    'Be specific about the student actual sentence. Do not give generic praise.',
    'Use simple English. Do not mention prompts, JSON, API, hidden rules, or scoring.'
  ].join('\n');
}

const TUTOR_REDIRECT = 'This is not really relevant to this scenario. Please choose option A, B, or C, or ask about the words in this turn.';
const TUTOR_STOP_WORDS = new Set('the and you your for with that this now can will are need have from into what which please could would should does mean means meaning define translate vietnamese example sentence grammar say tell about'.split(' '));

function tutorImportantWords(value) {
  return String(value || '')
    .toLowerCase()
    .match(/[a-z][a-z'-]{2,}/g) || [];
}

function tutorContextWords(body) {
  return tutorImportantWords([
    body.location,
    body.npc,
    body.questSetup,
    body.targetVocab,
    body.choices,
    body.storyHistory
  ].join(' '))
    .filter(w => w.length > 2 && !TUTOR_STOP_WORDS.has(w));
}

function tutorHasContextOverlap(message, body) {
  const lower = String(message || '').toLowerCase();
  return [...new Set(tutorContextWords(body))].some(w => {
    const safe = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`\\b${safe}\\b`, 'i').test(lower);
  });
}

function tutorExtractDirectVocabQuestion(message) {
  const lower = String(message || '').toLowerCase();
  const direct = lower.match(/what\s+(?:does|is)\s+["']?([a-z][a-z -]{1,30}?)["']?\s+(?:mean\b|in vietnamese)/i)
    || lower.match(/what\s+is\s+["']?([a-z][a-z -]{1,30})["']?\??$/i)
    || lower.match(/meaning\s+of\s+["']?([a-z][a-z -]{1,30})["']?/i)
    || lower.match(/define\s+["']?([a-z][a-z -]{1,30})["']?/i)
    || lower.match(/how\s+do\s+you\s+say\s+["']?([a-z][a-z -]{1,30})["']?/i)
    || lower.match(/translate\s+["']?([a-z][a-z -]{1,30})["']?/i);
  if (!direct) return '';
  const extracted = direct[1].trim().replace(/[?!.'"\s]+$/, '');
  if (/^(it|this|that|they|them|word|thing|the|a|an)$/i.test(extracted)) return '';
  return extracted;
}

function tutorGuardMessage(body) {
  const message = String(body.message || '').trim();
  const lower = message.toLowerCase();
  if (!message) return 'Missing message.';
  if (message.length > 260) return 'Please keep chatbot questions short and connected to this turn. Choose A, B, or C, or ask about the words in this turn.';
  if (/https?:\/\/|www\.|@[a-z0-9_]+|#[a-z0-9_]+/i.test(message)) return TUTOR_REDIRECT;
  if (/\b(bitch|bitches|fuck|shit|stupid|idiot|shut up|go away|hate you|kill|porn|sex|drug|weed|beer|gambling)\b/i.test(message)) return TUTOR_REDIRECT;
  const hasOverlap = tutorHasContextOverlap(message, body);
  if (/\b(weather|sports?|football|music|song|movie|politics|news|restaurant|pizza|homework|math|dating|girlfriend|boyfriend|joke|recipe|programming|code|website|youtube|instagram|tiktok|facebook|favorite color|your name|who are you)\b/.test(lower) && !hasOverlap) return TUTOR_REDIRECT;
  const directVocab = tutorExtractDirectVocabQuestion(message);
  if (directVocab && !tutorHasContextOverlap(directVocab, body)) return TUTOR_REDIRECT;
  if (hasOverlap) return '';
  if (/\b(option|choice|choices|a|b|c|safe|safer|best|better|cheap|cheaper|fast|faster|risk|risky|cost|save)\b/.test(lower)) return '';
  return '';
}

function turnInstructions() {
  return [
    'You are the live conversation engine for Word Explorer, an ESL role-play game for Vietnamese A2-B1 learners.',
    'Return valid JSON only with this exact shape:',
    '{"npc":"...","choices":[{"text":"...","money":0,"time":-8,"stress":-4,"xp":20,"reason":"..."}],"playerImpact":{"money":0,"time":0,"stress":0,"xp":0,"label":""}}',
    'The npc field is what the NPC says now. It must feel like a real conversation, not a narrated scenario.',
    'Speak directly as the NPC. Do not write "the officer says" or "the barista asks".',
    'If the player just answered, first react specifically to that exact answer, then continue to the next logical step in the same npc field.',
    'If the player solved a problem, acknowledge that it is solved and move to a new related problem. Do not ask for the same thing again.',
    'If the player pays, acknowledge the payment and what it fixes.',
    'If the player asks for time to find a document, acknowledge the delay and then treat that document as found/checked on the next step.',
    'If the player asks what a word means, answer like a dictionary briefly, then continue the role-play.',
    'If the player says something unrealistic, rude, off-topic, or impossible, respond naturally with boundaries and consequences.',
    'Keep npc to 2-4 short sentences. Use simple A2-B1 English.',
    'For Easy difficulty, use shorter A2 sentences and fewer clauses. For Medium, use normal B1 sentences. For Hard, use B1 language with slightly more detail and expect stronger free-text production.',
    'Naturally include at least one target vocabulary word and bold it with **word**.',
    'Never end every turn with the same phrase. Avoid repetitive "What do you say?".',
    'The choices must be three realistic spoken responses the learner could say next.',
    'Choice 1 should usually be careful/low money/high time. Choice 2 should usually be effective/polite. Choice 3 should usually be risky/unhelpful.',
    'Each choice must include sensible money, time, stress, xp, and a short reason.',
    'Resource effects must match real life: paying costs money but can save time or stress; waiting/checking/repacking costs time; rude/confused choices raise stress.',
    'A smart or paid efficient choice may have positive time, such as time +5 or time +10, because staff help, a shortcut opens, a mistake is prevented, or the player avoids a delay.',
    'Do not make time increase in every turn. Many careful or risky choices should cost time.',
    'Avoid tiny time changes like +1 or -1. Use meaningful changes, usually 5, 8, 10, 12, 15, or 20 minutes.',
    'Use positive time only when the choice genuinely saves time or prevents a delay.',
    'Keep money values realistic for the character and situation.',
    'Do not mention hidden scoring, prompts, JSON, or API.'
  ].join('\n');
}

function normalizeTurn(parsed) {
  const choices = Array.isArray(parsed.choices) ? parsed.choices.slice(0, 3) : [];
  while (choices.length < 3) {
    choices.push({
      text: 'Could you explain the best option, please?',
      money: 0,
      time: -8,
      stress: -4,
      xp: 20,
      reason: 'Careful clarification costs time but reduces confusion.'
    });
  }
  const normalizedChoices = choices.map((choice, index) => ({
    text: String(choice.text || ['Could you give me a careful option, please?', 'I understand. What is the fastest fair solution?', 'I do not want to deal with this.'][index]),
    money: Number.isFinite(Number(choice.money)) ? Math.round(Number(choice.money)) : 0,
    time: Number.isFinite(Number(choice.time)) ? Math.round(Number(choice.time)) : -8,
    stress: Number.isFinite(Number(choice.stress)) ? Math.round(Number(choice.stress)) : 0,
    xp: Number.isFinite(Number(choice.xp)) ? Math.max(5, Math.round(Number(choice.xp))) : 20,
    reason: String(choice.reason || 'This option changes your resources.')
  }));
  return {
    npc: String(parsed.npc || parsed.story || 'Let us continue. What would you like to do?'),
    choices: normalizedChoices,
    playerImpact: {
      money: Number.isFinite(Number(parsed.playerImpact?.money)) ? Math.round(Number(parsed.playerImpact.money)) : 0,
      time: Number.isFinite(Number(parsed.playerImpact?.time)) ? Math.round(Number(parsed.playerImpact.time)) : 0,
      stress: Number.isFinite(Number(parsed.playerImpact?.stress)) ? Math.round(Number(parsed.playerImpact.stress)) : 0,
      xp: Number.isFinite(Number(parsed.playerImpact?.xp)) ? Math.max(0, Math.round(Number(parsed.playerImpact.xp))) : 0,
      label: String(parsed.playerImpact?.label || '')
    }
  };
}

function geminiOutputText(data) {
  return (data.candidates || [])
    .flatMap(candidate => candidate.content?.parts || [])
    .map(part => part.text || '')
    .join('')
    .trim();
}

function openAIOutputText(data) {
  if (data.output_text) return data.output_text;
  if (Array.isArray(data.output)) {
    return data.output
      .flatMap(item => item.content || [])
      .map(part => part.text || part.output_text || '')
      .join('')
      .trim();
  }
  if (Array.isArray(data.choices)) {
    return data.choices
      .map(choice => choice.message?.content || choice.text || '')
      .join('')
      .trim();
  }
  return '';
}

async function generateText({ instructions, input, maxOutputTokens = 400 }) {
  if (process.env.OPENAI_API_KEY) {
    const responseBody = {
      model: MODEL,
      instructions,
      input,
      store: false,
      max_output_tokens: maxOutputTokens
    };
    const apiRes = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify(responseBody)
    });

    const data = await apiRes.json().catch(() => ({}));
    if (apiRes.ok) {
      const text = openAIOutputText(data);
      if (text) return text;
    } else if (apiRes.status !== 400) {
      throw new Error(data.error?.message || 'OpenAI API request failed.');
    }

    const chatRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: instructions },
          { role: 'user', content: input }
        ],
        temperature: 0.35,
        max_tokens: maxOutputTokens
      })
    });

    const chatData = await chatRes.json().catch(() => ({}));
    if (!chatRes.ok) {
      throw new Error(chatData.error?.message || data.error?.message || 'OpenAI API request failed.');
    }
    const text = openAIOutputText(chatData);
    if (!text) throw new Error('OpenAI returned an empty response.');
    return text;
  }

  if (process.env.GEMINI_API_KEY) {
    const models = [GEMINI_MODEL, ...GEMINI_FALLBACK_MODELS].filter((model, index, arr) => arr.indexOf(model) === index);
    let lastError = null;
    for (const model of models) {
      for (let attempt = 1; attempt <= 2; attempt++) {
        const apiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': process.env.GEMINI_API_KEY
          },
          body: JSON.stringify({
            contents: [{
              role: 'user',
              parts: [{ text: `${instructions}\n\n${input}` }]
            }],
            generationConfig: {
              temperature: 0.35,
              maxOutputTokens
            }
          })
        });

        const data = await apiRes.json().catch(() => ({}));
        if (apiRes.ok) return geminiOutputText(data);

        lastError = new Error(data.error?.message || `Gemini API request failed for ${model}.`);
        const retryable = apiRes.status === 429 || apiRes.status === 503 || /high demand|overloaded|try again/i.test(lastError.message);
        if (!retryable) break;
        await new Promise(resolve => setTimeout(resolve, attempt * 900));
      }
    }
    throw lastError || new Error('Gemini API request failed.');
  }

  throw new Error('Set GEMINI_API_KEY or OPENAI_API_KEY before starting server.js.');
}

async function handleTutor(req, res) {
  const raw = await collect(req);
  const body = JSON.parse(raw || '{}');
  const guardReply = tutorGuardMessage(body);
  if (guardReply) {
    send(res, 200, JSON.stringify({ reply: guardReply, guarded: true }));
    return;
  }
  const input = [
    `Student message: ${body.message || ''}`,
    `Location: ${body.location || ''}`,
    `NPC: ${body.npc || ''}`,
    `Turn: ${body.turn}/${body.totalTurns || 10}`,
    `Quest setup: ${body.questSetup || ''}`,
    `Target vocabulary this turn: ${body.targetVocab || ''}`,
    `Visible choices: ${body.choices || ''}`,
    `Recent story: ${body.storyHistory || ''}`,
    `Recent tutor chat: ${JSON.stringify(body.chatHistory || [])}`
  ].join('\n');

  try {
    const reply = await generateText({
      instructions: tutorInstructions(),
      input,
      maxOutputTokens: 260
    });
    send(res, 200, JSON.stringify({ reply, provider: AI_PROVIDER }));
  } catch (err) {
    send(res, 503, JSON.stringify({ error: err.message || 'Tutor API unavailable.' }));
  }
}

async function handleWritingFeedback(req, res) {
  const raw = await collect(req);
  const body = JSON.parse(raw || '{}');
  const response = String(body.response || '').trim().slice(0, 3000);
  if (!response) {
    send(res, 400, JSON.stringify({ error: 'Missing writing response.' }));
    return;
  }

  const input = [
    `Scenario: ${body.levelId === 'hotel' ? 'hotel check-in/check-out' : 'airport travel'}`,
    `Task prompt: ${body.prompt || ''}`,
    `Student writing: ${response}`,
    `Target vocabulary: ${(body.levelVocab || []).join(', ')}`,
    `Words already detected by the game: ${(body.usedWords || []).join(', ')}`,
    `Rubric summary: ${JSON.stringify(body.rubric || {})}`,
    'Important: If the student says something like "do not pay attention to the boarding pass" or "throw away the bottle" when they mean "keep the boarding pass safe" or "empty liquids before security", explain that meaning problem directly.'
  ].join('\n');

  let text = '';
  try {
    text = await generateText({
      instructions: writingFeedbackInstructions(),
      input,
      maxOutputTokens: 650
    });
  } catch (err) {
    console.error('Writing feedback API error:', err.message || err);
    send(res, 503, JSON.stringify({ error: err.message || 'Writing feedback API unavailable.' }));
    return;
  }

  let parsed = null;
  try {
    parsed = JSON.parse(text.replace(/```json|```/g, '').trim());
  } catch {
    parsed = {
      vocabulary: '',
      meaning: text,
      grammar: '',
      wordChoice: '',
      revised: '',
      encouragement: ''
    };
  }

  send(res, 200, JSON.stringify({
    vocabulary: String(parsed.vocabulary || ''),
    meaning: String(parsed.meaning || ''),
    grammar: String(parsed.grammar || ''),
    wordChoice: String(parsed.wordChoice || ''),
    revised: String(parsed.revised || ''),
    encouragement: String(parsed.encouragement || ''),
    provider: AI_PROVIDER
  }));
}

async function handleUseQuestionFeedback(req, res) {
  const raw = await collect(req);
  const body = JSON.parse(raw || '{}');
  const word = String(body.word || '').trim().slice(0, 80);
  const response = String(body.response || '').trim().slice(0, 800);
  if (!word || !response) {
    send(res, 400, JSON.stringify({ error: 'Missing word or response.' }));
    return;
  }

  const input = [
    `Target word: ${word}`,
    `Target word information: ${body.targetDefinition || ''}`,
    `Student sentence: ${response}`,
    `Other vocabulary words this student has learned: ${(body.learnedVocab || []).join(', ') || 'none recorded'}`
  ].join('\n');

  try {
    const feedback = await generateText({
      instructions: useQuestionFeedbackInstructions(),
      input,
      maxOutputTokens: 220
    });
    send(res, 200, JSON.stringify({ feedback, provider: AI_PROVIDER }));
  } catch (err) {
    send(res, 503, JSON.stringify({ error: err.message || 'Use-question feedback API unavailable.' }));
  }
}

async function handleTurn(req, res) {
  const raw = await collect(req);
  const body = JSON.parse(raw || '{}');
  const input = [
    `Player name: ${body.playerName}`,
    `Difficulty tier: ${body.difficulty || 'Easy'} (${body.difficulty === 'Easy' ? 'A2, shorter and simpler' : 'B1, slightly richer language'})`,
    `Character: ${body.character} (${body.characterRole})`,
    `Character resource personality: ${body.characterChallenge || ''}`,
    `Location: ${body.location}`,
    `NPC: ${body.npc}`,
    `Quest title: ${body.questTitle}`,
    `Quest setup: ${body.questSetup || ''}`,
    `Goal: ${body.questGoal}`,
    `Urgency: ${body.urgency}`,
    `Turn: ${body.turn}/${body.totalTurns}`,
    `Arc beat: ${body.arcBeat || '(continue naturally)'}`,
    `Mode: ${body.mode || 'turn'}`,
    `Player just said: ${body.playerAnswer || '(no answer yet; begin the scene)'}`,
    `Selected choice impact already applied: ${JSON.stringify(body.selectedChoice || null)}`,
    `Current resources after any selected choice: money $${body.resources?.money}, time ${body.resources?.time} min, stress ${body.resources?.stress}/100`,
    `Danger lines: money below $${body.danger?.money}, time below ${body.danger?.time} min, stress above ${body.danger?.stress}`,
    `Target vocabulary this turn: ${(body.vocab || []).join(', ')}`,
    `Full level vocabulary: ${(body.levelVocab || []).join(', ')}`,
    `Recent story memory:\n${(body.storyHistory || []).join('\n') || '(none yet)'}`,
    `Important continuity notes:\n${(body.continuity || []).join('\n') || '(none)'}`
  ].join('\n');

  let text = '';
  try {
    text = await generateText({
      instructions: turnInstructions(),
      input,
      maxOutputTokens: 650
    });
  } catch (err) {
    send(res, 503, JSON.stringify({ error: err.message || 'Turn API unavailable.' }));
    return;
  }

  let parsed = null;
  try {
    parsed = JSON.parse(text.replace(/```json|```/g, '').trim());
  } catch {
    parsed = { npc: text, choices: [] };
  }
  send(res, 200, JSON.stringify(normalizeTurn(parsed)));
}

async function handleStory(req, res) {
  const raw = await collect(req);
  const body = JSON.parse(raw || '{}');
  const input = [
    `Player: ${body.playerName}`,
    `Character: ${body.character} (${body.characterRole})`,
    `Location: ${body.location}`,
    `NPC: ${body.npc}`,
    `Quest: ${body.questTitle}`,
    `Goal: ${body.questGoal}`,
    `Urgency: ${body.urgency}`,
    `Turn: ${body.turn}/${body.totalTurns}`,
    `Arc beat for this turn: ${body.arcBeat || '(continue naturally)'}`,
    `Mode: ${body.mode || 'next_turn'}`,
    `Previous player answer: ${body.previousAnswer || '(none yet)'}`,
    `Current resources: money $${body.resources?.money}, time ${body.resources?.time} min, stress ${body.resources?.stress}/100`,
    `Danger lines: money below $${body.danger?.money}, time below ${body.danger?.time} min, stress above ${body.danger?.stress}`,
    `Target vocabulary: ${(body.vocab || []).join(', ')}`,
    `Recent story beats to avoid repeating:\n${(body.storyHistory || []).join('\n') || '(none yet)'}`
  ].join('\n');

  let text = '';
  try {
    text = await generateText({
      instructions: storyInstructions(),
      input,
      maxOutputTokens: 350
    });
  } catch (err) {
    send(res, 503, JSON.stringify({ error: err.message || 'Story API unavailable.' }));
    return;
  }

  let parsed = null;
  try {
    parsed = JSON.parse(text.replace(/```json|```/g, '').trim());
  } catch {
    parsed = { story: text, choices: [] };
  }

  send(res, 200, JSON.stringify({
    story: typeof parsed.story === 'string' ? parsed.story : text,
    choices: Array.isArray(parsed.choices) ? parsed.choices.slice(0, 3).map(String) : []
  }));
}

async function handleDefine(req, res) {
  const raw = await collect(req);
  const body = JSON.parse(raw || '{}');
  const word = String(body.word || '').trim().slice(0, 60);
  if (!word) {
    send(res, 400, JSON.stringify({ error: 'Missing word.' }));
    return;
  }

  let text = '';
  try {
    text = await generateText({
      instructions: defineInstructions(),
      input: `Define this word or phrase for a Vietnamese English learner: ${word}`,
      maxOutputTokens: 180
    });
  } catch (err) {
    send(res, 503, JSON.stringify({ error: err.message || 'Definition API unavailable.' }));
    return;
  }

  let parsed = null;
  try {
    parsed = JSON.parse(text.replace(/```json|```/g, '').trim());
  } catch {
    parsed = { word, definition: text, vietnamese: '', example: '' };
  }

  send(res, 200, JSON.stringify({
    word: String(parsed.word || word),
    definition: String(parsed.definition || ''),
    vietnamese: String(parsed.vietnamese || ''),
    example: String(parsed.example || ''),
    provider: AI_PROVIDER
  }));
}

function serveFile(req, res) {
  const urlPath = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
  const filePath = path.join(ROOT, path.normalize(urlPath).replace(/^(\.\.[/\\])+/, ''));
  if (!filePath.startsWith(ROOT)) {
    send(res, 403, 'Forbidden', 'text/plain');
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      send(res, 404, 'Not found', 'text/plain');
      return;
    }
    const ext = path.extname(filePath);
    const type = ext === '.html' ? 'text/html; charset=utf-8' : ext === '.js' ? 'text/javascript; charset=utf-8' : 'text/plain; charset=utf-8';
    send(res, 200, data, type);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'OPTIONS') {
      send(res, 204, '');
      return;
    }
	    if (req.url.startsWith('/api/story') && req.method === 'POST') {
	      await handleStory(req, res);
	      return;
	    }
	    if (req.url.startsWith('/api/turn') && req.method === 'POST') {
	      await handleTurn(req, res);
	      return;
	    }
    if (req.url.startsWith('/api/tutor') && req.method === 'POST') {
      await handleTutor(req, res);
      return;
    }
    if (req.url.startsWith('/api/writing-feedback') && req.method === 'POST') {
      await handleWritingFeedback(req, res);
      return;
    }
    if (req.url.startsWith('/api/use-question-feedback') && req.method === 'POST') {
      await handleUseQuestionFeedback(req, res);
      return;
    }
    if (req.url.startsWith('/api/status') && req.method === 'GET') {
      handleStatus(req, res);
      return;
    }
    if (req.url.startsWith('/api/define') && req.method === 'POST') {
      await handleDefine(req, res);
      return;
    }
    if (req.url.startsWith('/api/study-event') && req.method === 'POST') {
      await handleStudyEvent(req, res);
      return;
    }
    if (req.url.startsWith('/api/study-events') && req.method === 'GET') {
      handleStudyEventsExport(req, res);
      return;
    }
    if (req.url.startsWith('/research-data') && req.method === 'GET') {
      handleResearchDataPage(req, res);
      return;
    }
    if (req.method === 'GET') {
      serveFile(req, res);
      return;
    }
    send(res, 405, 'Method not allowed', 'text/plain');
  } catch (err) {
    send(res, 500, JSON.stringify({ error: err.message || 'Server error.' }));
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Word Explorer running on port ${PORT}`);
  if (AI_PROVIDER === 'gemini') {
    console.log(`Tutor and writing feedback use Gemini model ${GEMINI_MODEL}.`);
  } else if (AI_PROVIDER === 'openai') {
    console.log(`Tutor and writing feedback use OpenAI model ${MODEL}.`);
  } else {
    console.log('No AI key found. Browser fallback feedback will be used.');
  }
});
