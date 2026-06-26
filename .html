<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Word Explorer</title>
<style>
:root{
  --bg:#f6f7fb;--card:#fff;--ink:#182033;--muted:#586174;--line:#d7deea;
  --green:#2f8a5f;--green2:#58b37e;--greenLight:#e9f7ef;
  --gold:#c98214;--goldLight:#fff5df;--red:#c84a3b;--redLight:#fff0ec;
  --teal:#188b8e;--tealLight:#e6f7f7;--blue:#3367d6;--blueLight:#eaf1ff;
  --indigo:#3949ab;--indigo2:#6d5bd6;--lavender:#f0edff;--coral:#e86f55;--cream:#fffaf0;
  --vietRed:#b92e38;--vietGold:#e5ad3d;--jade:#087f70;--jadeDark:#075f58;
}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;padding:18px 12px;background:radial-gradient(circle at 8% 12%,rgba(255,255,255,.94) 0 8%,transparent 25%),radial-gradient(circle at 90% 88%,rgba(246,211,149,.55) 0 8%,transparent 28%),linear-gradient(145deg,#dce9ee 0%,#f5f6f4 48%,#f8e8d4 100%);font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;color:var(--ink)}
.app{max-width:980px;margin:auto;background:var(--bg);border:1px solid rgba(255,255,255,.75);border-radius:26px;overflow:hidden;box-shadow:0 28px 80px rgba(34,47,95,.2)}
header{background:linear-gradient(115deg,#173b5b 0%,#176d70 68%,#24457d 125%);color:#fff;padding:18px 22px;display:flex;justify-content:space-between;gap:12px;align-items:center;border-bottom:3px solid var(--vietGold)}
.brandRow{display:flex;align-items:center;gap:10px}.brandMark{width:36px;height:36px;display:grid;place-items:center;border-radius:12px;background:#fff;color:var(--jade);box-shadow:0 6px 16px rgba(15,23,42,.2)}.brandMark svg{width:25px;height:25px}.brand{font-size:22px;font-weight:900;letter-spacing:-.02em}.sub{font-size:12px;opacity:.82;margin-top:2px}.headerTools{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end}.pill{border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.16);color:#fff;border-radius:999px;padding:7px 12px;font-size:13px;font-weight:800}.soundToggle{cursor:pointer}.routeProgress{display:none;align-items:center;gap:6px;border:1px solid rgba(255,255,255,.3);background:rgba(7,43,59,.22);border-radius:999px;padding:6px 9px;font-size:11px;font-weight:900}.routeProgress.show{display:flex}.routeNode{opacity:.52}.routeNode.active,.routeNode.done{opacity:1}.routeNode.done{color:#ffe2a1}.routeArrow{opacity:.55}
main{padding:24px}.screen{display:none}.screen.active{display:block;animation:screenIn .28s ease both}@keyframes screenIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
h1,h2,h3,p{margin-top:0}.title{text-align:center;font-size:28px;margin-bottom:7px}.subtitle{text-align:center;color:var(--muted);line-height:1.5;margin-bottom:18px}
.card{background:var(--card);border:2px solid var(--line);border-radius:18px;padding:18px;box-shadow:0 8px 22px rgba(34,47,95,.08)}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.choice{background:#fff;border:2px solid var(--line);border-radius:18px;padding:17px;cursor:pointer;transition:.18s}
.choice:hover{transform:translateY(-3px);border-color:var(--jade);box-shadow:0 12px 26px rgba(8,127,112,.13)}
.emoji{font-size:38px;margin-bottom:9px}.name{font-weight:900;font-size:17px}.role{color:var(--jadeDark);font-size:13px;font-weight:800;margin:4px 0 8px}.desc{color:var(--muted);font-size:14px;line-height:1.55}
input{width:100%;padding:13px 14px;border:2px solid var(--line);border-radius:13px;font-size:16px;outline:none;background:#fff;font-family:inherit}input:focus{border-color:var(--blue);box-shadow:0 0 0 4px rgba(51,103,214,.13)}
textarea{width:100%;min-height:76px;resize:vertical;padding:12px 14px;border:2px solid var(--line);border-radius:13px;font-size:15px;font-family:inherit;outline:none;line-height:1.45}textarea:focus{border-color:var(--blue);box-shadow:0 0 0 4px rgba(51,103,214,.13)}
.btn{border:0;border-radius:13px;padding:12px 18px;font-size:14px;font-weight:900;cursor:pointer;font-family:inherit;transition:transform .18s,box-shadow .18s,border-color .18s}.btn:hover:not(:disabled){transform:translateY(-1px)}.btn:focus-visible{outline:3px solid rgba(8,127,112,.24);outline-offset:3px}.primary{background:linear-gradient(110deg,var(--jadeDark),var(--jade) 58%,#15998a);color:#fff;box-shadow:0 8px 18px rgba(8,127,112,.2)}.primary:hover:not(:disabled){box-shadow:0 11px 22px rgba(8,127,112,.27)}.ghost{background:#fff;border:2px solid var(--line);color:var(--muted)}.ghost:hover:not(:disabled){border-color:#aacfc8;color:var(--jadeDark)}
.row{display:block;width:100%;text-align:left;background:#fff;border:2px solid var(--line);color:var(--ink);margin:7px 0;font-weight:800}.row:hover{border-color:var(--jade);color:var(--jadeDark)}
.map{display:grid;gap:12px}.level{background:#fff;border:2px solid var(--line);border-radius:18px;padding:15px;display:flex;gap:14px;align-items:center}.level.locked{opacity:.48}.level.open{cursor:pointer}.level.open:hover{border-color:var(--indigo);box-shadow:0 10px 24px rgba(57,73,171,.1)}.badge{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:var(--lavender);font-size:27px;flex-shrink:0}.level.done .badge{background:var(--green);color:#fff}.level-title{font-weight:900}.level-meta{font-size:13px;color:var(--muted);line-height:1.45;margin-top:3px}.scoreLine{font-size:12px;color:var(--green);font-weight:900;margin-top:4px}
.missionTop{display:flex;gap:14px;align-items:center;margin-bottom:13px}.missionIcon{font-size:46px}.tag{display:inline-block;background:var(--tealLight);color:var(--jadeDark);border-radius:999px;padding:5px 10px;font-size:12px;font-weight:900}.stakes{background:var(--goldLight);border-left:5px solid var(--gold);padding:13px;border-radius:13px;line-height:1.55;margin:13px 0}.goal{background:var(--tealLight);border-left:5px solid var(--teal);padding:13px;border-radius:13px;line-height:1.55}
.rules{width:100%;border-collapse:collapse;margin-top:13px;font-size:13px}.rules th{background:var(--lavender);color:var(--indigo);text-align:left}.rules th,.rules td{padding:8px;border-bottom:1px solid var(--line)}.dangerText{color:var(--red);font-weight:900}.strongText{color:var(--green);font-weight:900}
.chips{display:flex;gap:7px;flex-wrap:wrap;margin-top:13px}.chip{background:var(--blueLight);border:1px solid #cbd8ff;border-radius:999px;padding:5px 9px;font-size:12px;color:var(--blue);font-weight:900}
.progress{height:6px;background:#dce2f3;border-radius:99px;overflow:hidden;margin-bottom:9px}.progress span{display:block;height:100%;background:linear-gradient(90deg,var(--indigo),var(--blue));width:0%;transition:.25s}
.meters{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-bottom:10px}.meter{background:#fff;border:2px solid var(--line);border-radius:13px;padding:9px 10px;transition:box-shadow .2s,transform .2s}.meter.pulseGain{animation:pulseGain .55s ease}.meter.pulseLoss{animation:pulseLoss .55s ease}.meter.danger{border-color:var(--red);background:#fff8f8}.meterLabel{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:13px;font-weight:900;color:var(--muted);margin-bottom:6px;white-space:nowrap}.meterLabel span{font-size:13px;line-height:1.2}.track{height:8px;background:#e0ece4;border-radius:99px;position:relative;overflow:visible}.fill{height:100%;border-radius:99px;transition:.25s}.money{background:linear-gradient(90deg,#2e7d52,#66bb6a)}.time{background:linear-gradient(90deg,#1565c0,#42a5f5)}.stress{background:linear-gradient(90deg,#fc8181,#e53e3e)}.fill.dangerFill{background:#e53e3e}.marker{position:absolute;top:-4px;bottom:-4px;width:3px;background:var(--red);border-radius:3px;z-index:2}.warn{display:none;font-size:10px;color:var(--red);font-weight:900;margin-top:4px}.meter.danger .warn{display:block}@keyframes pulseGain{0%{transform:scale(1);box-shadow:none}40%{transform:scale(1.02);box-shadow:0 0 0 5px rgba(47,138,95,.16)}100%{transform:scale(1);box-shadow:none}}@keyframes pulseLoss{0%{transform:scale(1);box-shadow:none}40%{transform:scale(1.02);box-shadow:0 0 0 5px rgba(200,74,59,.16)}100%{transform:scale(1);box-shadow:none}}
.miniHud{display:none;position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:50;background:rgba(255,255,255,.97);border:2px solid var(--line);border-radius:16px;box-shadow:0 10px 28px rgba(34,47,95,.16);padding:8px 10px;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap;max-width:min(680px,calc(100vw - 28px))}
.miniHud.show{display:flex}.miniChip{font-size:12px;font-weight:900;border-radius:14px;padding:7px 10px;background:var(--greenLight);color:var(--green);white-space:nowrap;display:grid;gap:1px;min-width:118px;text-align:center;line-height:1.15}.miniChip.timeMini{background:var(--blueLight);color:var(--blue)}.miniChip.stressMini{background:var(--redLight);color:var(--red)}.miniChip.dangerMini{outline:2px solid var(--red)}.miniValue{font-size:14px}.miniGoal{font-size:10px;color:var(--muted);font-weight:900}
.questbar{background:var(--cream);border:2px solid #f0d29a;border-left:5px solid var(--gold);border-radius:13px;padding:9px 11px;margin-bottom:8px;line-height:1.35;font-size:13px}.xpSupportBar{display:none;background:#fff;border:2px solid #d9d3ff;border-left:5px solid var(--indigo);border-radius:13px;padding:9px 11px;margin-bottom:10px;color:#34405e;font-size:13px;line-height:1.35}.xpSupportBar.show{display:block}.xpSupportTop{display:flex;align-items:center;justify-content:space-between;gap:10px}.xpSupportBtns{display:flex;gap:7px;flex-wrap:wrap;margin-top:8px}.xpSupportBtns .btn{padding:8px 10px;font-size:12px;border-radius:10px}.story{padding-right:0}.pageNav{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px}.pageNav .btn{padding:8px 11px;font-size:12px;border-radius:11px}.pageCounter{font-size:12px;color:var(--muted);font-weight:900;text-align:center;line-height:1.35}.previousChoice{background:var(--greenLight);border:1px solid #c9ebd5;border-left:5px solid var(--green);border-radius:15px;padding:11px 13px;margin-bottom:12px;color:#245a3b;line-height:1.5}.supportPageNote{background:var(--blueLight);border-left:5px solid var(--blue);border-radius:15px;padding:11px 13px;margin-bottom:12px;color:#223c76;line-height:1.5}.reviewOnly{margin-bottom:12px}.turnDivider{display:flex;align-items:center;gap:8px;margin:10px 0;color:var(--muted);font-size:11px;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.turnDivider::before,.turnDivider::after{content:'';flex:1;height:1px;background:var(--line)}.bubble{background:#fff;border:1px solid var(--line);border-radius:18px 18px 18px 5px;padding:13px 15px;margin-bottom:10px;line-height:1.6;font-size:17px}.npcBubble{border-left:5px solid var(--blue)}.player{background:var(--greenLight);border:1px solid #c9ebd5;border-radius:18px 18px 5px 18px;text-align:right;color:#245a3b}.speaker{font-size:11px;color:var(--blue);font-weight:900;letter-spacing:.08em;text-transform:uppercase;margin-bottom:7px;display:flex;align-items:center;gap:7px}.npcIcon{width:28px;height:28px;border-radius:50%;display:inline-grid;place-items:center;background:var(--blueLight);font-size:16px;letter-spacing:0;flex-shrink:0}
.word{background:linear-gradient(180deg,#fff8df,#ffedbd);color:#7b4500;font-weight:900;border-radius:7px;padding:2px 6px;border:1px solid #ecc66f;border-bottom:3px solid #dda944;cursor:pointer;box-shadow:0 2px 0 rgba(167,107,0,.08);transition:.15s}.word:hover{background:#ffe7a6;transform:translateY(-1px)}
.dice{display:flex;gap:12px;align-items:center;background:#fff;border:2px solid var(--line);border-radius:16px;padding:13px;margin:12px 0}.die{width:52px;height:52px;border:2px solid var(--indigo);border-radius:14px;display:grid;place-items:center;font-size:28px;background:var(--lavender)}.die.rolling{animation:diceRoll .7s ease}.diceOverlay{position:fixed;inset:0;z-index:120;background:rgba(31,38,77,.58);backdrop-filter:blur(4px);display:grid;place-items:center;padding:18px}.diceStage{background:linear-gradient(135deg,#fff,var(--goldLight));border:3px solid var(--gold);border-radius:24px;padding:24px 22px;text-align:center;width:min(390px,100%);box-shadow:0 24px 70px rgba(0,0,0,.28)}.diceBig{width:92px;height:92px;margin:12px auto;border:3px solid var(--indigo);border-radius:24px;display:grid;place-items:center;font-size:52px;background:#fff;box-shadow:0 10px 24px rgba(57,73,171,.14)}.diceResult{margin-top:12px;padding:12px;border-radius:14px;background:#fff;border:2px solid var(--line)}.diceLock{background:var(--goldLight);border:2px dashed var(--gold);border-radius:15px;padding:12px 14px;margin:12px 0;text-align:center;color:#6b4a00;font-weight:900}@keyframes diceRoll{0%{transform:rotate(0) scale(1)}25%{transform:rotate(-22deg) scale(1.15)}55%{transform:rotate(28deg) scale(.9)}80%{transform:rotate(-10deg) scale(1.08)}100%{transform:rotate(0) scale(1)}}.small{font-size:14px;color:var(--muted);line-height:1.5}.helperText{font-size:16px;line-height:1.55;color:#34405e}.impact{font-size:13px;color:var(--muted);margin-top:5px}.why{font-size:13px;color:#485779;margin-top:5px;font-weight:700}.good{border-left:5px solid var(--green)!important}.mid{border-left:5px solid var(--gold)!important}.bad{border-left:5px solid var(--coral)!important}.note{background:var(--blueLight);border-left:5px solid var(--blue);border-radius:13px;padding:12px 14px;margin:10px 0;color:#223c76;line-height:1.5}.dangerNote{background:var(--redLight);border-left-color:var(--red);color:#6d2119}
.q{margin-bottom:13px}.q.correct{border-color:#27ae60}.q.wrong{border-color:var(--red)}.ans.correct{background:#eafaf1!important;border-color:#27ae60!important;color:#217a45!important}.ans.wrong{background:var(--redLight)!important;border-color:var(--red)!important;color:var(--red)!important}.feedback{font-size:13px;line-height:1.5;margin-top:8px;padding:9px 11px;border-radius:10px;background:#f7fbf8;color:var(--muted)}
.scoreBig{text-align:center;font-size:58px;color:var(--indigo);font-weight:900;margin:10px 0}.reviewWord{background:#fff;border:2px solid var(--line);border-radius:14px;padding:12px}.reviewWord b{color:var(--indigo)}
.studyBar{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}.studyStatus{font-size:11px;color:var(--muted);font-weight:900}.stopBtn{background:#fff;border:2px solid var(--red);color:var(--red);padding:8px 12px;border-radius:11px}
.sessionClock{font-size:11px;font-weight:900;color:var(--indigo);background:#fff;border:2px solid var(--line);border-radius:999px;padding:5px 9px;white-space:nowrap}
.freeChatBox{margin:12px 0;padding:12px;border:2px solid #cbd8ff;border-radius:16px;background:#f8fbff}.freeChatBox textarea{min-height:58px;margin-top:8px}.freeChatActions{display:flex;gap:8px;align-items:center;margin-top:8px;flex-wrap:wrap}.freeChatReply{display:none;margin-top:10px;background:#fff;border:2px solid var(--line);border-left:5px solid var(--teal);border-radius:14px;padding:11px 12px;line-height:1.5}.freeChatReply.show{display:block}.chatTranscript{max-height:260px;overflow:auto;display:none;gap:8px;flex-direction:column}.chatTranscript.show{display:flex}.chatMsg{border-radius:12px;padding:9px 10px}.chatMsg.user{background:#edf3ff;border:1px solid #cbd8ff;align-self:flex-end;max-width:88%}.chatMsg.tutor{background:#f8fffb;border:1px solid #cfeade;border-left:4px solid var(--teal);align-self:flex-start;max-width:94%}.chatCostNote{font-size:11px;color:#8a4f00;margin-top:7px;border-top:1px solid #edf2f7;padding-top:6px}.chatRewardNote{font-size:11px;color:var(--green);margin-top:7px;border-top:1px solid #dcfce7;padding-top:6px;font-weight:900}.diceMeaning{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:9px}.diceMeaning span{background:#fff;border:1px solid var(--line);border-radius:10px;padding:6px 7px;font-size:11px;font-weight:800;color:var(--muted)}
.introHero{background:linear-gradient(135deg,#eaf1ff,#f5f2ff);border:2px solid #ccd8ff;border-left:8px solid var(--blue);border-radius:22px;padding:20px;margin-bottom:16px;box-shadow:0 10px 24px rgba(57,73,171,.08)}.introHero h3{margin:0 0 8px;color:#213b82;font-size:24px}.introHero p{margin:0;color:#2b3f72;font-size:18px;line-height:1.55}.instructionGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.infoTile{background:#fff;border:2px solid var(--line);border-radius:18px;padding:14px;display:grid;grid-template-columns:48px 1fr;gap:12px;align-items:flex-start}.infoIcon{width:48px;height:48px;border-radius:16px;display:grid;place-items:center;font-size:24px;background:var(--blueLight);color:var(--blue);flex-shrink:0}.infoTile.resources .infoIcon{background:var(--greenLight);color:var(--green)}.infoTile.quiz .infoIcon{background:var(--goldLight);color:var(--gold)}.infoTile.risk .infoIcon{background:var(--redLight);color:var(--red)}.infoTile.production .infoIcon{background:var(--lavender);color:var(--indigo)}.infoTile.data .infoIcon{background:var(--tealLight);color:var(--teal)}.infoTitle{font-size:15px;font-weight:900;color:var(--indigo);margin-bottom:5px}.infoBody{font-size:14px;color:var(--muted);line-height:1.5}.dataCallout{margin-top:12px;background:#f8fbff;border:2px dashed #b8c8f3;border-radius:16px;padding:12px;color:#34405e;line-height:1.45}.dataCallout b{color:var(--indigo)}
.difficultyBanner{background:#fff;border:2px solid var(--line);border-left:5px solid var(--indigo);border-radius:15px;padding:11px 13px;margin-bottom:13px;color:var(--muted);font-size:13px;line-height:1.45}.difficultyBanner b{color:var(--indigo)}.riskOption{background:linear-gradient(135deg,#fff7ed,#fff)!important;border-color:#f4b76a!important;border-left:7px solid var(--gold)!important;box-shadow:0 8px 18px rgba(201,130,20,.10)}.riskOption .tag{background:var(--goldLight);color:#8a4f00}.riskBadge{display:inline-block;margin-left:6px;background:var(--redLight);color:var(--red);border-radius:999px;padding:3px 8px;font-size:11px;font-weight:900;vertical-align:middle}.tfFeedback{display:block;margin-top:9px;padding:9px 11px;border-radius:10px;background:#f8fbff;border-left:4px solid var(--blue);font-size:13px;line-height:1.45;color:#34405e}.tfFeedback.good{background:var(--greenLight);border-left-color:var(--green);color:#245a3b}.tfFeedback.bad{background:var(--redLight);border-left-color:var(--red);color:#6d2119}
.difficultyGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:10px}.difficultyCard{border:2px solid var(--line);background:#fff;border-radius:16px;padding:14px;text-align:left;cursor:pointer;transition:.18s;min-height:122px}.difficultyCard:hover{transform:translateY(-2px);border-color:var(--indigo);box-shadow:0 10px 22px rgba(57,73,171,.12)}.difficultyCard.selected{border-color:var(--indigo);background:var(--lavender);box-shadow:0 0 0 4px rgba(57,73,171,.12)}.difficultyTop{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}.difficultyName{font-size:17px;font-weight:900;color:var(--ink)}.difficultyLevel{font-size:12px;font-weight:900;color:var(--indigo);background:#fff;border:1px solid var(--line);border-radius:999px;padding:4px 8px;white-space:nowrap}.difficultyDesc{font-size:13px;color:var(--muted);line-height:1.4}.difficultyCheck{width:22px;height:22px;border-radius:50%;border:2px solid var(--line);display:grid;place-items:center;color:#fff;font-size:13px;font-weight:900;flex-shrink:0}.difficultyCard.selected .difficultyCheck{background:var(--indigo);border-color:var(--indigo)}@media(max-width:700px){.difficultyGrid{grid-template-columns:1fr}.difficultyCard{min-height:auto}}
.startShell{min-height:590px;border-radius:24px;overflow:hidden;background:#fff;box-shadow:0 18px 48px rgba(34,47,95,.13);border:1px solid rgba(205,214,232,.85)}.startHero{position:relative;overflow:hidden;min-height:590px;padding:48px 54px 38px;color:#fff;background:radial-gradient(circle at 82% 15%,rgba(240,186,72,.42) 0 5%,transparent 23%),linear-gradient(150deg,#123c63 0%,#176e72 48%,#9b303d 115%);display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,.82fr);gap:42px;align-items:center}.startHero::before{content:'';position:absolute;width:430px;height:430px;right:-145px;top:-175px;border-radius:50%;border:1px solid rgba(255,255,255,.13);box-shadow:0 0 0 38px rgba(255,255,255,.025),0 0 0 76px rgba(255,255,255,.018)}.startHero::after{content:'';position:absolute;inset:auto -20px -42px auto;width:310px;height:180px;opacity:.13;background:radial-gradient(ellipse at 50% 100%,transparent 34%,#fff 35% 37%,transparent 38%),radial-gradient(ellipse at 25% 100%,transparent 34%,#fff 35% 37%,transparent 38%),radial-gradient(ellipse at 75% 100%,transparent 34%,#fff 35% 37%,transparent 38%);transform:rotate(-8deg)}.heroContent,.journeyVisual{position:relative;z-index:1}.heroContent{max-width:520px}.heroEyebrow{display:inline-flex;align-items:center;gap:8px;width:max-content;max-width:100%;padding:7px 11px;border-radius:999px;background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.25);font-size:10px;font-weight:900;letter-spacing:.07em;text-transform:uppercase}.heroEyebrow::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--vietGold);box-shadow:0 0 0 4px rgba(229,173,61,.16)}.heroTitle{font-size:52px;line-height:1.01;letter-spacing:-.045em;margin:20px 0 14px;max-width:510px}.heroLead{font-size:18px;line-height:1.6;color:rgba(255,255,255,.87);max-width:500px}.heroChips{display:flex;gap:8px;flex-wrap:wrap;margin-top:22px}.heroChip{padding:7px 10px;border-radius:999px;background:rgba(4,38,50,.28);border:1px solid rgba(255,255,255,.2);font-size:12px;font-weight:800}.welcomeAction{margin-top:27px;display:flex;align-items:center;gap:14px;flex-wrap:wrap}.welcomeBtn{background:linear-gradient(110deg,#f3c15a,var(--vietGold));color:#173b4d;padding:14px 22px;font-size:15px;box-shadow:0 12px 26px rgba(8,30,40,.25);transition:.18s}.welcomeBtn:hover{transform:translateY(-2px);box-shadow:0 16px 30px rgba(8,30,40,.32)}.welcomeNote{font-size:11px;color:rgba(255,255,255,.72);font-weight:800}.journeyVisual{height:300px;margin-top:28px}.routeLine{position:absolute;left:4%;right:4%;top:139px;height:2px;border-top:2px dashed rgba(251,213,137,.74);transform:rotate(-8deg)}.routeStop{position:absolute;width:76px;height:76px;border-radius:22px;display:grid;place-items:center;background:#fff;color:var(--jade);font-size:34px;box-shadow:0 12px 28px rgba(4,27,43,.3);border:3px solid rgba(255,255,255,.7)}.routeStop.airport{left:0;top:139px;transform:rotate(-5deg)}.routeStop.hotel{right:0;top:52px;transform:rotate(5deg)}.routePlane{position:absolute;left:46%;top:91px;font-size:38px;color:var(--vietGold);filter:drop-shadow(0 8px 9px rgba(12,23,72,.3));animation:planeFloat 3.5s ease-in-out infinite}.routeLabel{position:absolute;font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.8)}.routeLabel.depart{left:1%;top:224px}.routeLabel.arrive{right:1%;top:137px}.vietSignature{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;align-items:center;gap:7px;white-space:nowrap;font-size:10px;font-weight:800;letter-spacing:.04em;color:rgba(255,255,255,.72)}.vietSignature span{display:inline-block;width:18px;height:1px;background:var(--vietGold)}.setupShell{max-width:680px;margin:8px auto 0;border-radius:24px;overflow:hidden;background:#fff;box-shadow:0 18px 48px rgba(34,47,95,.13);border:1px solid rgba(205,214,232,.85)}.setupTop{height:7px;background:linear-gradient(90deg,var(--jadeDark),var(--jade),var(--vietGold),var(--vietRed))}.startPanel{padding:34px 38px 32px;background:linear-gradient(180deg,#fff,#fbfcfb);display:flex;flex-direction:column;justify-content:center}.startPanel .title{text-align:left;font-size:31px;margin-bottom:6px;letter-spacing:-.025em}.startPanel .subtitle{text-align:left;margin-bottom:16px;font-size:14px}.setupBack{margin-bottom:18px;align-self:flex-start}.studyNotice{display:grid;grid-template-columns:34px 1fr;gap:10px;align-items:start;background:#edf8f5;border:1px solid #c5e2dc;border-radius:15px;padding:11px 12px;margin-bottom:17px;color:#18534d;line-height:1.45;font-size:13px}.studyNoticeIcon{width:34px;height:34px;border-radius:11px;background:#fff;display:grid;place-items:center;box-shadow:0 4px 12px rgba(8,127,112,.12)}.fieldLabel{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:7px}.fieldHint{font-size:11px;color:var(--muted);font-weight:700}.startPanel input{box-shadow:0 4px 12px rgba(34,47,95,.04)}.startPanel input:focus{border-color:var(--jade);box-shadow:0 0 0 4px rgba(8,127,112,.12)}.difficultyHeader{margin-top:17px}.startPanel .helperText{font-size:13px;margin-top:4px}.startPanel .difficultyCard{min-height:112px;padding:12px}.startPanel .difficultyCard:hover{border-color:var(--jade);box-shadow:0 10px 22px rgba(8,127,112,.12)}.startPanel .difficultyCard.selected{border-color:var(--jade);background:#edf8f5;box-shadow:0 0 0 4px rgba(8,127,112,.11)}.startPanel .difficultyCard.selected .difficultyCheck{background:var(--jade);border-color:var(--jade)}.startPanel .difficultyLevel{display:inline-block;margin-bottom:6px;color:var(--jade)}.startPanel .primary{position:relative;overflow:hidden;padding:15px 18px;font-size:16px;background:linear-gradient(110deg,var(--jadeDark),var(--jade) 58%,#15998a);box-shadow:0 10px 22px rgba(8,127,112,.25);transition:transform .18s,box-shadow .18s}.startPanel .primary:hover{transform:translateY(-2px);box-shadow:0 14px 28px rgba(8,127,112,.3)}.startPanel .primary:focus-visible,.difficultyCard:focus-visible,.welcomeBtn:focus-visible{outline:3px solid rgba(229,173,61,.4);outline-offset:3px}.startFoot{margin-top:10px;text-align:center;font-size:11px;color:var(--muted);font-weight:700}.startFoot b{color:var(--vietRed)}.startPanel,.startHero{animation:openingReveal .55s ease both}@keyframes openingReveal{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes planeFloat{0%,100%{transform:translateY(0) rotate(-8deg)}50%{transform:translateY(-7px) rotate(-4deg)}}@media(prefers-reduced-motion:reduce){.startPanel,.startHero,.routePlane{animation:none}.choice,.difficultyCard,.startPanel .primary,.welcomeBtn{transition:none}}
.onboardSteps{display:flex;align-items:center;justify-content:center;gap:8px;margin:0 auto 18px;color:#7a8394;font-size:11px;font-weight:900;letter-spacing:.04em;text-transform:uppercase}.onboardStep{display:flex;align-items:center;gap:6px}.onboardDot{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:#fff;border:2px solid var(--line);font-size:10px}.onboardStep.active{color:var(--jadeDark)}.onboardStep.active .onboardDot{background:var(--jade);border-color:var(--jade);color:#fff}.onboardStep.done .onboardDot{background:#dff2ed;border-color:#acd7cd;color:var(--jadeDark)}.onboardLine{width:34px;height:2px;background:var(--line);border-radius:99px}
.fieldError{display:none;margin-top:7px;color:var(--red);font-size:12px;font-weight:800}.fieldError.show{display:block}.inputError{border-color:var(--red)!important;box-shadow:0 0 0 4px rgba(200,74,59,.11)!important}
.connectionCheck{display:flex;align-items:center;gap:9px;margin:0 0 16px;padding:10px 12px;border-radius:13px;background:#f7f9fc;border:1px solid var(--line);font-size:12px;font-weight:800;color:var(--muted)}.connectionDot{width:10px;height:10px;border-radius:50%;background:#aab2c2;box-shadow:0 0 0 4px rgba(170,178,194,.13)}.connectionCheck.checking .connectionDot{background:var(--gold);animation:connectionPulse 1s infinite}.connectionCheck.ready{background:#edf8f5;border-color:#bee0d8;color:#18534d}.connectionCheck.ready .connectionDot{background:var(--jade)}.connectionCheck.problem{background:var(--redLight);border-color:#efc4bd;color:#7b2c24}.connectionCheck.problem .connectionDot{background:var(--red)}@keyframes connectionPulse{50%{opacity:.4}}
.passportStamps{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;margin:14px 0 18px}.passportStamp{width:100px;height:100px;border:3px double #b9c3d4;border-radius:50%;display:grid;place-items:center;text-align:center;transform:rotate(-5deg);color:#8b94a6;background:#fafbfd;font-size:11px;font-weight:900;line-height:1.25;text-transform:uppercase;letter-spacing:.05em}.passportStamp:nth-child(2){transform:rotate(6deg)}.passportStamp.earned{border-color:var(--vietRed);color:var(--vietRed);background:#fff8f4;box-shadow:inset 0 0 0 5px #fff,0 4px 12px rgba(185,46,56,.12)}.passportStampIcon{display:block;font-size:27px;margin-bottom:3px}.journeyComplete{position:relative;overflow:hidden;text-align:center;background:linear-gradient(145deg,#edf8f5,#fff9ea);border:2px solid #c6dfd8;border-top:7px solid var(--vietGold);border-radius:22px;padding:24px;margin-bottom:16px}.journeyComplete::before,.journeyComplete::after{content:'✦';position:absolute;color:rgba(229,173,61,.38);font-size:34px}.journeyComplete::before{left:25px;top:18px}.journeyComplete::after{right:25px;top:40px}.journeyCompleteIcon{font-size:52px;margin-bottom:8px}.journeyComplete h3{font-size:27px;color:var(--jadeDark);margin-bottom:7px}.journeyComplete p{color:var(--muted);margin:0;line-height:1.55}
.sceneBrief{position:relative;overflow:hidden;background:linear-gradient(135deg,#f5fbf9,#fffaf0);border:2px solid #c9dfda;border-top:6px solid var(--jade);border-radius:20px;padding:20px;box-shadow:0 10px 24px rgba(34,47,95,.07)}.sceneBrief::after{content:'';position:absolute;width:150px;height:150px;border-radius:50%;right:-75px;top:-80px;border:20px solid rgba(229,173,61,.09)}.sceneBriefTop{position:relative;z-index:1;display:flex;align-items:center;gap:13px;margin-bottom:14px}.sceneBriefIcon{width:54px;height:54px;border-radius:17px;display:grid;place-items:center;background:#fff;font-size:28px;box-shadow:0 8px 18px rgba(8,127,112,.12)}.sceneBriefEyebrow{font-size:10px;color:var(--jadeDark);font-weight:900;letter-spacing:.09em;text-transform:uppercase;margin-bottom:3px}.sceneBriefTitle{font-size:23px;font-weight:900;letter-spacing:-.025em}.sceneBriefBody{position:relative;z-index:1;color:#34405e;line-height:1.65}.sceneBriefBody p{margin-bottom:10px}.sceneBriefFacts{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:15px}.sceneFact{background:#fff;border:1px solid #d9e6e3;border-radius:13px;padding:10px;text-align:center}.sceneFact b{display:block;color:var(--jadeDark);font-size:12px;margin-bottom:3px}.sceneFact span{font-size:12px;color:var(--muted)}
.toast{position:fixed;top:18px;right:18px;background:linear-gradient(135deg,var(--indigo),var(--blue));color:#fff;font-size:13px;font-weight:900;padding:9px 18px;border-radius:999px;opacity:0;transform:translateY(-10px);transition:.25s;box-shadow:0 4px 16px rgba(57,73,171,.35)}.toast.show{opacity:1;transform:translateY(0)}
@media(max-width:820px){.startHero{min-height:590px;padding:34px 30px;grid-template-columns:1fr;gap:10px}.journeyVisual{height:190px;margin-top:0}.heroTitle{font-size:44px}.routeLine{top:79px}.routeStop{width:62px;height:62px;font-size:29px}.routeStop.airport{top:76px}.routeStop.hotel{top:24px}.routePlane{top:43px;font-size:32px}.routeLabel.depart{top:145px}.routeLabel.arrive{top:92px}.vietSignature{bottom:0}.startPanel{padding:30px}}
@media(max-width:700px){body{padding:0;background:var(--bg)}.app{border:0;border-radius:0;min-height:100vh}main{padding:18px}.grid,.instructionGrid{grid-template-columns:1fr}.meters{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.meter{padding:8px}.meterLabel{font-size:11px;display:block}.meterLabel span{font-size:11px}.meterLabel span:last-child{display:block;margin-top:2px}.track{height:7px}header{align-items:flex-start;flex-direction:column}.headerTools{justify-content:flex-start}.rules{font-size:12px}.miniHud{left:12px;right:12px;bottom:12px;transform:none;max-width:none}.introHero p{font-size:16px}.studyBar{gap:5px}.stopBtn{padding:7px 9px;font-size:12px}.questbar{font-size:12px;padding:8px 10px}.bubble{font-size:16px}.startShell,.setupShell{border-radius:20px}.startHero{min-height:570px;padding:30px 24px 24px}.heroTitle{font-size:40px}.heroLead{font-size:16px}.journeyVisual{height:145px}.routeLine{top:60px}.routeStop{width:54px;height:54px;font-size:25px}.routeStop.airport{top:56px}.routeStop.hotel{top:14px}.routePlane{top:28px;font-size:29px}.routeLabel.depart{top:117px}.routeLabel.arrive{top:75px}.vietSignature{display:none}.startPanel{padding:26px 22px}.startPanel .difficultyGrid{grid-template-columns:1fr 1fr}.startPanel .difficultyCard{min-height:118px}.fieldHint{display:none}}
@media(max-width:480px){header{padding:15px 17px}.brandMark{width:31px;height:31px}.brand{font-size:19px}main{padding:12px}.startHero{min-height:555px}.heroTitle{font-size:36px}.journeyVisual{height:132px}.welcomeAction{align-items:stretch;flex-direction:column}.welcomeBtn{width:100%}.startPanel .difficultyGrid{grid-template-columns:1fr}.startPanel .difficultyCard{min-height:auto}}
@media(max-width:480px){.onboardSteps{gap:5px;font-size:9px}.onboardLine{width:14px}.onboardDot{width:20px;height:20px}}
@media(max-width:560px){.sceneBriefFacts{grid-template-columns:1fr}.sceneFact{text-align:left;display:flex;justify-content:space-between;gap:10px}.sceneFact b{margin:0}}
</style>
</head>
<body>
<div class="toast" id="toast"></div>
<div class="app">
  <header><div class="brandRow"><span class="brandMark" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none"><path d="M32 48c-9-7-14-15-14-24 7 2 12 6 14 12 2-6 7-10 14-12 0 9-5 17-14 24Z" fill="currentColor" opacity=".92"/><path d="M31.8 46C22 45 14.7 40.3 10 32.2c8.1-.7 14.7 1.7 20 7.2M32.2 46C42 45 49.3 40.3 54 32.2c-8.1-.7-14.7 1.7-20 7.2" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M32 36c-5.4-5.7-7-12.7-4.7-21 3.2 2.4 4.8 5.8 4.7 10.2-.1-4.4 1.5-7.8 4.7-10.2C39 23.3 37.4 30.3 32 36Z" fill="#E5AD3D"/></svg></span><div><div class="brand">Word Explorer</div><div class="sub" id="apiStatus">Interactive vocabulary journey · AI learning support</div></div></div><div class="headerTools"><div class="routeProgress" id="routeProgress"><span class="routeNode" id="routeAirport">✈ Airport</span><span class="routeArrow">→</span><span class="routeNode" id="routeHotel">Hotel 🏨</span></div><button type="button" class="pill soundToggle" id="soundToggle" aria-pressed="true">🔊 Sound</button><div class="pill" id="hud">⭐ 0 XP</div></div></header>
  <main>
    <section class="screen active" id="start">
      <div class="startShell">
        <div class="startHero">
          <div class="heroContent">
            <div class="heroEyebrow">Hành trình tiếng Anh · English journey</div>
            <h1 class="heroTitle">Your words shape the journey.</h1>
            <p class="heroLead">Use English to handle real-life travel challenges. Make careful choices, learn useful vocabulary, and protect your resources along the way.</p>
            <div class="heroChips">
              <span class="heroChip">10 choices per level</span>
              <span class="heroChip">Clickable word help</span>
              <span class="heroChip">AI tutor support</span>
            </div>
            <div class="welcomeAction">
              <button class="btn welcomeBtn" onclick="show('setup')">Start Your Journey&nbsp; →</button>
              <span class="welcomeNote">Vietnamese English learning through travel</span>
            </div>
          </div>
          <div class="journeyVisual" aria-hidden="true">
            <div class="routeLine"></div>
            <div class="routeStop airport">✈️</div>
            <div class="routePlane">➤</div>
            <div class="routeStop hotel">🏨</div>
            <span class="routeLabel depart">Airport</span>
            <span class="routeLabel arrive">Hotel</span>
            <div class="vietSignature"><span></span>Created for Vietnamese English learners<span></span></div>
          </div>
        </div>
      </div>
    </section>
    <section class="screen" id="setup">
      <div class="onboardSteps" aria-label="Getting started, step 1 of 3"><span class="onboardStep active"><span class="onboardDot">1</span>Setup</span><span class="onboardLine"></span><span class="onboardStep"><span class="onboardDot">2</span>Guide</span><span class="onboardLine"></span><span class="onboardStep"><span class="onboardDot">3</span>Role</span></div>
      <div class="setupShell">
        <div class="setupTop"></div>
        <div class="startPanel">
          <button class="btn ghost setupBack" onclick="show('start')">← Back to Welcome</button>
          <h2 class="title">Start Your Journey</h2>
          <p class="subtitle">Enter your study ID and choose the language challenge that fits you.</p>
          <div class="studyNotice">
            <span class="studyNoticeIcon">🔒</span>
            <div><b>Study mode</b><br>Try your best. This is a vocabulary learning game, not a school grade. Your choices, resources, and quiz answers will be saved for the research record.</div>
          </div>
          <div class="fieldLabel"><label for="playerName"><b>Participant ID or nickname</b></label><span class="fieldHint">Required</span></div>
          <input id="playerName" placeholder="Example: L01 or Jake" autocomplete="off" aria-describedby="playerNameError">
          <div class="fieldError" id="playerNameError" role="alert">Please enter your participant ID or nickname.</div>
          <div class="connectionCheck checking" id="connectionCheck"><span class="connectionDot"></span><span id="connectionText">Checking game connection…</span></div>
          <div class="difficultyHeader">
            <label><b>Choose one difficulty tier</b></label>
            <div class="helperText">Easy gives more language support. Hard gives more challenge.</div>
          </div>
          <input type="hidden" id="difficultyTier" value="Easy">
          <div class="difficultyGrid" id="difficultyGrid">
            <button type="button" class="difficultyCard selected" onclick="selectDifficulty('Easy',this)">
              <div class="difficultyTop"><span class="difficultyName">Easy</span><span class="difficultyCheck">✓</span></div>
              <div class="difficultyLevel">A2</div>
              <div class="difficultyDesc">Shorter sentences, clearer choices, more support.</div>
            </button>
            <button type="button" class="difficultyCard" onclick="selectDifficulty('Hard',this)">
              <div class="difficultyTop"><span class="difficultyName">Hard</span><span class="difficultyCheck">✓</span></div>
              <div class="difficultyLevel">B1</div>
              <div class="difficultyDesc">More natural language, tighter resources, and stronger choices.</div>
            </button>
          </div>
          <button type="button" class="btn primary" id="beginJourneyBtn" style="width:100%;margin-top:14px">Begin the Journey&nbsp; →</button>
          <div class="startFoot"><b>VI · EN</b>&nbsp; Airport and hotel scenarios · Vocabulary role-play study</div>
        </div>
      </div>
    </section>
    <section class="screen" id="instructions">
      <div class="onboardSteps" aria-label="Getting started, step 2 of 3"><span class="onboardStep done"><span class="onboardDot">✓</span>Setup</span><span class="onboardLine"></span><span class="onboardStep active"><span class="onboardDot">2</span>Guide</span><span class="onboardLine"></span><span class="onboardStep"><span class="onboardDot">3</span>Role</span></div>
      <button class="btn ghost" style="margin-bottom:12px;font-size:13px" onclick="show('setup')">← Back</button>
      <h2 class="title">Before You Begin</h2>
      <p class="subtitle">Your goal is to complete each scenario and unlock the vocabulary quiz.</p>
      <div class="card">
        <div class="introHero">
          <h3>How It Works</h3>
          <p>Read each situation carefully, then choose <b>A</b>, <b>B</b>, or <b>C</b>. Choosing too quickly may cost money, eat up time or patience, increase stress, and stop you from unlocking the quiz.</p>
        </div>
        <div class="instructionGrid">
          <div class="infoTile resources">
            <div class="infoIcon">💰</div>
            <div><div class="infoTitle">Protect Your Resources</div><div class="infoBody">Keep Money and Time above the danger line. If you are close to danger, the game may offer a support card.</div></div>
          </div>
          <div class="infoTile quiz">
            <div class="infoIcon">🔓</div>
            <div><div class="infoTitle">Quiz Unlock Rule</div><div class="infoBody">Maintain your resources through all 10 turns to unlock the vocabulary quiz. If a resource crosses a danger line, replay the scenario first.</div></div>
          </div>
          <div class="infoTile risk">
            <div class="infoIcon">🎲</div>
            <div><div class="infoTitle">Risk Roll Choices</div><div class="infoBody">Some C choices are special risk rolls. You roll a die: success can save resources, but failure can cost time, money, or stress. They lock if Stress is too high.</div></div>
          </div>
          <div class="infoTile production">
            <div class="infoIcon">✍️</div>
            <div><div class="infoTitle">Support and Feedback</div><div class="infoBody">You can ask the tutor during scenarios. In the quiz, typed items show a small letter clue, and writing receives detailed feedback.</div></div>
          </div>
          <div class="infoTile data">
            <div class="infoIcon">📊</div>
            <div><div class="infoTitle">Study Data</div><div class="infoBody">Your choices, resources, quiz answers, writing response, and completion point are saved for the research study.</div></div>
          </div>
        </div>
        <button class="btn primary" style="width:100%;margin-top:16px" onclick="beginStudyFromInstructions()">Choose Character</button>
      </div>
    </section>
    <section class="screen" id="chars">
      <div class="onboardSteps" aria-label="Getting started, step 3 of 3"><span class="onboardStep done"><span class="onboardDot">✓</span>Setup</span><span class="onboardLine"></span><span class="onboardStep done"><span class="onboardDot">✓</span>Guide</span><span class="onboardLine"></span><span class="onboardStep active"><span class="onboardDot">3</span>Role</span></div>
      <button class="btn ghost" style="margin-bottom:12px;font-size:13px" onclick="show('instructions')">← Back</button>
      <h2 class="title">Choose Your Character</h2>
      <p class="subtitle">The Student has less money but more time. The Professional has money but no time to waste.</p>
      <div class="grid" id="charGrid"></div>
    </section>
    <section class="screen" id="map">
      <button class="btn ghost" style="margin-bottom:12px;font-size:13px" onclick="renderChars();show('chars')">← Change Character</button>
      <h2 class="title">Level Map</h2>
      <p class="subtitle" id="mapSub"></p>
      <div class="passportStamps" id="mapStamps"></div>
      <div class="map" id="levelMap"></div>
    </section>
    <section class="screen" id="brief">
      <div class="card" id="briefCard"></div>
    </section>
    <section class="screen" id="game">
      <div class="studyBar"><span class="studyStatus" id="studyStatus">Study data: ready</span><span class="sessionClock" id="gameClock">⏱ 00:00</span><button class="btn stopBtn" onclick="stopStudy('participant_stop')">Stop Study</button></div>
      <div class="progress"><span id="progress"></span></div>
      <div class="meters">
        <div class="meter" id="moneyMeter"><div class="meterLabel"><span>💰 Money</span><span id="moneyNum"></span></div><div class="track"><div class="fill money" id="moneyFill"></div><span class="marker" id="moneyMark"></span></div><div class="warn">Danger: not enough money to continue the trip.</div></div>
        <div class="meter" id="timeMeter"><div class="meterLabel"><span>⏰ Time</span><span id="timeNum"></span></div><div class="track"><div class="fill time" id="timeFill"></div><span class="marker" id="timeMark"></span></div><div class="warn">Danger: you may miss the flight, meeting, or deadline.</div></div>
        <div class="meter" id="stressMeter"><div class="meterLabel"><span>😰 Stress</span><span id="stressNum"></span></div><div class="track"><div class="fill stress" id="stressFill"></div><span class="marker" id="stressMark"></span></div><div class="warn">Danger: panic makes communication difficult.</div></div>
      </div>
      <div class="questbar" id="questbar"></div>
      <div class="xpSupportBar" id="xpSupportBar"></div>
      <div class="story" id="story"></div>
      <div id="dice"></div>
      <div class="card" id="responses"></div>
      <div class="miniHud" id="miniHud">
        <span class="miniChip" id="miniMoney">💰 $0</span>
        <span class="miniChip timeMini" id="miniTime">⏰ 0 min</span>
        <span class="miniChip stressMini" id="miniStress">😰 0/100</span>
      </div>
    </section>
    <section class="screen" id="test">
      <div class="studyBar"><span class="studyStatus">You may stop after this test or continue to the next level.</span><span class="sessionClock" id="testClock">⏱ 00:00</span><button class="btn stopBtn" onclick="stopStudy('participant_stop_during_test')">Stop Study</button></div>
      <h2 class="title">Vocabulary Test</h2>
      <p class="subtitle">This test checks vocabulary meaning, sentence use, and reading comprehension. Reach the passing score to unlock the next level.</p>
      <div id="testBox"></div>
    </section>
    <section class="screen" id="review">
      <h2 class="title">Almost There</h2>
      <p class="subtitle">Review the missed words, then replay this level.</p>
      <div class="card" style="background:var(--goldLight);border-color:#efd39a"><b>Review the missed items before replaying.</b><div id="reviewScore" class="small" style="margin-top:4px"></div></div>
      <div id="reviewWords" style="display:grid;gap:10px;margin:14px 0"></div>
      <button class="btn primary" id="reviewActionBtn" style="width:100%" onclick="replay()">Replay This Level</button>
    </section>
    <section class="screen" id="end">
      <h2 class="title">Level Complete</h2>
      <div class="card">
        <div id="completionHero"></div>
        <div class="passportStamps" id="passportStamps"></div>
        <div class="scoreBig" id="finalScore"></div>
        <p class="subtitle" id="finalText"></p>
        <div class="note" id="finalResources"></div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:14px">
          <button class="btn primary" onclick="showMap()">Back to Level Map</button>
          <button class="btn primary" onclick="openPostSurvey()">Take Post Survey</button>
          <button class="btn ghost" onclick="copyStudyData()">Copy Study Data</button>
          <button class="btn ghost" onclick="downloadStudyData()">Download Study Data</button>
          <button class="btn ghost" onclick="stopStudy('finished_after_level')">Finish Study</button>
          <button class="btn ghost" onclick="resetAll()">Start Over</button>
        </div>
      </div>
    </section>
    <section class="screen" id="studyEnd">
      <h2 class="title">Study Stopped</h2>
      <p class="subtitle">Thank you. Your game data has been saved for the research record.</p>
      <div class="card" id="studySummary"></div>
    </section>
  </main>
</div>

<script>
const CHARS=[
  {id:'student',emoji:'🎒',name:'The Student',role:'First trip abroad, tight budget',desc:'Travelling alone for the first time. Money is the biggest pressure.',startMoney:500,startTime:80,startStress:45,dangerMoney:150,dangerTime:10,dangerStress:85,strongMoney:300,strongTime:25,strongStress:60,challenge:'Save money. You cannot pay your way out of every problem.'},
  {id:'professional',emoji:'💼',name:'The Professional',role:'Business trip, no time to waste',desc:'Calm and direct, but every delay can damage an important meeting.',startMoney:1500,startTime:35,startStress:40,dangerMoney:300,dangerTime:10,dangerStress:85,strongMoney:900,strongTime:20,strongStress:60,challenge:'Save time. You can spend money, but delays are dangerous.'}
];

const LEVELS=[
  {id:'airport',num:1,icon:'✈️',name:'Airport',npc:'Check-in Officer',level:'A2/B1',vocab:['overweight fee','weight limit','check-in','carry-on','reorganize','boarding pass','passport','reprint fee','barcode','airline app','priority boarding','boarding group','overhead bin','exit row','seat','gate check','check','tag','terminal','gate','shuttle','express cart','departure','snack','meal','food court','security checkpoint','boarding time','tray','electronics','liquids','metal items','inspection','liquid','travel-size','security rule','water station','refill','final boarding call','personal item','flight attendant','purchase'],
   quests:{
    student:{title:'Flight 218 to Berlin',clock:'Boarding begins in 120 minutes',setup:'You arrive at the airport with $500, 120 minutes, and low stress. Your first problem is a heavy bag at the counter.',goal:'Reach your seat on the plane with at least $350, 60 minutes, and stress at 80 or lower.'},
    professional:{title:'Flight 218 to Berlin',clock:'Boarding begins in 120 minutes',setup:'You arrive at the airport with $500, 120 minutes, and low stress. Your first problem is a heavy bag at the counter.',goal:'Reach your seat on the plane with at least $350, 60 minutes, and stress at 80 or lower.'}}},
  {id:'hotel',num:2,icon:'🏨',name:'Hotel',npc:'Front Desk Agent',level:'A2/B1',vocab:['reservation','confirmation number','booking','front desk','ID','single bed','double bed','suite','upgrade','early check-in','late check-out','fee','lobby','deposit','incidental charges','mini-bar','hold','credit card','bellhop','luggage cart','tip','self-carry','luggage','complimentary','premium Wi-Fi','gym','pool','noise complaint','room change','housekeeping','floor','quiet','breakfast buffet','continental breakfast','room service','inclusive','check-out time','extension','noon','final bill','receipt','overcharge','refund'],
   quests:{
    student:{title:'Hotel Check-In',clock:'First meeting in 80 minutes',setup:'You arrive at a hotel to check in. The front desk cannot find your booking. You must resolve the issue, choose room options, handle deposits, use amenities, and check out.',goal:'Finish hotel check-in and final bill review with at least $200, 20 minutes, and stress at 80 or lower.'},
    professional:{title:'Hotel Check-In',clock:'First meeting in 35 minutes',setup:'You arrive at a hotel to check in. The front desk cannot find your booking. You must resolve the issue, choose room options, handle deposits, use amenities, and check out.',goal:'Finish hotel check-in and final bill review with at least $200, 20 minutes, and stress at 80 or lower.'}}},
  {id:'market',num:3,icon:'🛍️',name:'Market',npc:'Market Vendor',level:'A2/B1',vocab:['bargain','quality','recommend','souvenir','vendor','discount','local','fresh','price','stall'],
   quests:{
    student:{title:'Gift Under $10',clock:'Flight in 2 hours',setup:'You need a meaningful Vietnamese gift, but you only have $10 and little bag space.',goal:'Find and buy a good gift within your budget.'},
    professional:{title:'The Gift Must Look Right',clock:'Meeting in 90 minutes',setup:'You need a handmade gift for a client, but many items look cheap or mass-produced.',goal:'Find an authentic, appropriate gift before the meeting.'}}},
  {id:'cafe',num:4,icon:'☕',name:'Café',npc:'Barista',level:'B1',vocab:['order','menu','specialty','portion','atmosphere','preference','ingredient','recommend','regular','dessert'],
   quests:{
    student:{title:'The Silence',clock:'Your partner leaves in 25 minutes',setup:'Your language partner is here. You said hello, and now there is an awkward silence.',goal:'Keep the conversation going and agree on a next meeting.'},
    professional:{title:'Client Arrives Early',clock:'Client is already at the entrance',setup:'Your client arrived early. You have no table, no wifi password, and low battery.',goal:'Get a table, wifi, and power sorted before your client loses patience.'}}}
];

const VDB={
 'boarding pass':['thẻ lên máy bay','Please show your boarding pass at the gate.'],'luggage':['hành lý','Your luggage is too heavy.'],'departure':['khởi hành','The departure is at 6:30.'],'gate':['cổng lên máy bay','Please go to Gate 14.'],'delay':['sự chậm trễ','There is a delay.'],'security check':['kiểm tra an ninh','Go through the security check.'],'passport':['hộ chiếu','You need your passport.'],'terminal':['nhà ga sân bay','The flight leaves from Terminal 2.'],'destination':['điểm đến','What is your destination?'],'check-in':['làm thủ tục / nhận phòng','Check-in closes soon.'],
 'overweight fee':['phí hành lý quá cân','The overweight fee is $80.'],'weight limit':['giới hạn cân nặng','Your bag is over the weight limit.'],'carry-on':['hành lý xách tay','You can move items into your carry-on.'],'reorganize':['sắp xếp lại','Please reorganize your luggage.'],'reprint fee':['phí in lại','There is a reprint fee for a new boarding pass.'],'barcode':['mã vạch','The barcode might scan.'],'airline app':['ứng dụng hãng hàng không','Check your airline app for the boarding pass.'],'priority boarding':['ưu tiên lên máy bay','Priority boarding lets you board early.'],'boarding group':['nhóm lên máy bay','You are in boarding group C.'],'overhead bin':['ngăn hành lý phía trên','The overhead bin is full.'],'exit row':['hàng ghế gần cửa thoát hiểm','The exit row seat has more space.'],'seat':['ghế ngồi','Your seat is 34B.'],'gate check':['gửi hành lý tại cổng','You may need to gate check your bag.'],'check':['gửi hành lý / kiểm tra','You can check your carry-on now.'],'tag':['gắn thẻ','I will tag your carry-on.'],'shuttle':['xe trung chuyển','The shuttle goes to Terminal 2.'],'express cart':['xe điện nhanh','The express cart reaches the gate faster.'],'snack':['đồ ăn nhẹ','I will buy a small snack.'],'meal':['bữa ăn','A full meal takes more time.'],'food court':['khu ăn uống','The food court is near security.'],'security checkpoint':['điểm kiểm tra an ninh','Go to the security checkpoint.'],'boarding time':['giờ lên máy bay','Your boarding time is approaching.'],'tray':['khay','Put your laptop in a tray.'],'electronics':['thiết bị điện tử','Electronics go in a separate tray.'],'liquids':['chất lỏng','Liquids must be under 100ml.'],'metal items':['đồ kim loại','Metal items should go in the tray.'],'inspection':['kiểm tra kỹ','Your bag needs extra inspection.'],'liquid':['chất lỏng','This liquid bottle is too large.'],'travel-size':['cỡ du lịch','Buy a travel-size bottle later.'],'security rule':['quy định an ninh','This follows the security rule.'],'water station':['trạm nước','There is a water station after security.'],'refill':['đổ đầy lại','You can refill your bottle.'],'final boarding call':['lần gọi lên máy bay cuối','This is the final boarding call.'],'personal item':['vật dụng cá nhân','Keep your personal item under the seat.'],'flight attendant':['tiếp viên hàng không','Ask the flight attendant for help.'],'purchase':['mua hàng','Food is available for purchase.'],
 'reservation':['đặt phòng','I have a reservation.'],'confirmation number':['mã xác nhận','My confirmation number is in my email.'],'booking':['việc đặt phòng','The hotel found my booking.'],'front desk':['quầy lễ tân','Please ask at the front desk.'],'single bed':['giường đơn','The room has one single bed.'],'double bed':['giường đôi','Could I get a double bed?'],'suite':['phòng suite','A suite is bigger than a standard room.'],'upgrade':['nâng cấp','The hotel offered an upgrade to a suite.'],'early check-in':['nhận phòng sớm','Early check-in lets you enter the room before 3 PM.'],'late check-out':['trả phòng muộn','Late check-out lets you leave after 11 AM.'],'available':['có sẵn / còn trống','Is a room available?'],'lobby':['sảnh','Please wait in the lobby.'],'deposit':['tiền đặt cọc / khoản giữ tiền','The hotel asks for a deposit for possible extra charges.'],'incidental charges':['phí phát sinh','Room service and the mini-bar are incidental charges.'],'mini-bar':['tủ đồ uống nhỏ trong phòng','I did not use the mini-bar.'],'hold':['khoản tạm giữ','The deposit is a hold on my credit card.'],'credit card':['thẻ tín dụng','The hotel needs a credit card for the deposit.'],'bellhop':['nhân viên mang hành lý','The bellhop can take my bags upstairs.'],'luggage cart':['xe đẩy hành lý','I used a luggage cart for my bags.'],'complimentary':['miễn phí','The hotel has complimentary coffee.'],'premium Wi-Fi':['wifi tốc độ cao trả phí','Premium Wi-Fi is faster for video calls.'],'noise complaint':['phàn nàn về tiếng ồn','The front desk received a noise complaint.'],'room change':['đổi phòng','I asked for a room change.'],'checkout':['trả phòng','Checkout is at 11.'],'room service':['dịch vụ phòng','Room service can bring food.'],'housekeeping':['dọn phòng','Housekeeping will clean the room.'],'facilities':['tiện nghi','The hotel facilities include a gym.'],'floor':['tầng','Your room is on the fifth floor.'],'balcony':['ban công','The room has a balcony.'],'breakfast buffet':['buffet sáng','The breakfast buffet starts at 6 AM.'],'continental breakfast':['bữa sáng nhẹ kiểu Âu','Continental breakfast includes bread, fruit, and coffee.'],'check-out time':['giờ trả phòng','The check-out time is 11 AM.'],'extension':['gia hạn','I asked for an extension until noon.'],'final bill':['hóa đơn cuối cùng','Please check the final bill.'],'receipt':['biên lai','I need a receipt for my payment.'],'overcharge':['tính phí quá mức','There is an overcharge on my bill.'],'refund':['hoàn tiền','The hotel gave me a refund.'],
 'bargain':['món hời','This scarf is a bargain.'],'quality':['chất lượng','The quality is good.'],'recommend':['giới thiệu','What do you recommend?'],'souvenir':['đồ lưu niệm','I need a souvenir.'],'vendor':['người bán hàng','The vendor is friendly.'],'discount':['giảm giá','Can I get a discount?'],'local':['địa phương','I want something local.'],'fresh':['tươi','The fruit is fresh.'],'price':['giá','What is the price?'],'stall':['gian hàng','This stall sells gifts.'],
 'order':['gọi món','Are you ready to order?'],'menu':['thực đơn','Can I see the menu?'],'specialty':['đặc sản','What is your specialty?'],'portion':['khẩu phần','The portion is large.'],'atmosphere':['bầu không khí','The atmosphere is warm.'],'preference':['sở thích','Do you have a preference?'],'ingredient':['nguyên liệu','What ingredient is in this?'],'regular':['khách quen','She is a regular here.'],'dessert':['món tráng miệng','Would you like dessert?'],
 'travel':['đi du lịch / di chuyển','I travel to another country to study English.']
};

const VDEF={
 'boarding pass':'a document or phone ticket that lets you get on a plane','luggage':'bags and suitcases you take when you travel','departure':'the time when a plane, train, or bus leaves','gate':'the place in an airport where passengers get on the plane','delay':'when something happens later than planned','security check':'the place where staff scan people and bags for safety','passport':'an official document you use to travel to another country','terminal':'a large airport building for arrivals and departures','destination':'the place you are travelling to','check-in':'the process of registering for a flight or hotel',
 'reservation':'a booking made before you arrive','confirmation number':'a code that proves your booking','booking':'an arrangement made before you arrive','front desk':'the hotel desk where guests check in and ask for help','single bed':'a bed for one person','double bed':'a larger bed for two people','suite':'a larger, better hotel room, often with extra space','upgrade':'to move to a better room or service','early check-in':'entering your hotel room before the normal check-in time','late check-out':'leaving your hotel room after the normal check-out time','available':'free and ready to use','lobby':'the main entrance area of a hotel','deposit':'money the hotel holds for possible extra charges or damage','incidental charges':'extra hotel costs, such as room service or mini-bar items','mini-bar':'a small fridge or snack area in a hotel room','hold':'money temporarily kept on a card, then released later','credit card':'a payment card the hotel can use for a hold or charge','bellhop':'a hotel worker who carries luggage','luggage cart':'a small cart used to move bags','complimentary':'free for guests','premium Wi-Fi':'faster paid internet service','noise complaint':'a report that a room or area is too loud','room change':'moving from one hotel room to another','checkout':'the time or process of leaving a hotel','room service':'food or drinks delivered to a hotel room','housekeeping':'hotel staff who clean rooms','facilities':'useful services or places in a hotel, such as a gym or pool','floor':'one level of a building','balcony':'a small outdoor area attached to a room','breakfast buffet':'a breakfast where guests choose from many foods','continental breakfast':'a simple breakfast with items like bread, fruit, and coffee','check-out time':'the time when guests must leave the room','extension':'extra time added to a service or stay','final bill':'the last list of charges before payment','receipt':'a paper or email that shows what you paid','overcharge':'a charge that is too high or should not be there','refund':'money returned to you',
 'bargain':'something bought for a very good low price','quality':'how good or well-made something is','recommend':'to suggest something good','souvenir':'an object you buy to remember a place','vendor':'a person who sells things, often at a market','discount':'a lower price than usual','local':'from the area you are visiting','fresh':'recently made, picked, or cooked','price':'the amount of money something costs','stall':'a small shop or table in a market',
 'order':'to ask for food or drink in a cafe or restaurant','menu':'a list of food and drinks','specialty':'something a place is known for making well','portion':'the amount of food served to one person','atmosphere':'the feeling or mood of a place','preference':'something you like more than another option','ingredient':'one thing used to make food or drink','regular':'a customer who often visits the same place','dessert':'sweet food eaten after the main meal','travel':'to go from one place to another, especially to another city or country'
};

const COMMON_DEFS={
 'eat':['to put food in your mouth and swallow it','ăn','I eat breakfast at seven o’clock.'],
 'drink':['to take liquid into your mouth and swallow it','uống','I drink water when I am thirsty.'],
 'food':['things people or animals eat','đồ ăn / thức ăn','The food at this cafe is good.'],
 'situation':['what is happening now, including the problem or conditions','tình huống','This situation is difficult, but we can solve it.'],
 'problem':['something difficult that needs a solution','vấn đề','I have a problem with my ticket.'],
 'help':['to make something easier for someone','giúp đỡ','Can you help me, please?'],
 'mean':['to have a particular meaning','có nghĩa là','What does this word mean?'],
 'word':['one unit of language with meaning','từ','This word is new for me.'],
 'home':['the place where you live','nhà','I want to go home after school.'],
 'go':['to move or travel to another place','đi','I need to go to the gate.'],
 'want':['to wish for something','muốn','I want a quiet room.'],
 'need':['to require something because it is important','cần','I need my passport.'],
 'say':['to speak words','nói','What should I say to the officer?'],
 'ask':['to say a question','hỏi','I will ask for help.'],
 'answer':['something you say or write after a question','câu trả lời','Your answer was polite.'],
 'teacher':['a person who helps students learn','giáo viên','My teacher explains new words.'],
 'student':['a person who is learning','học sinh / sinh viên','The student asks a question.'],
 'airport':['a place where people take planes','sân bay','We arrive at the airport early.'],
 'hotel':['a place where travellers pay to sleep','khách sạn','The hotel is near the station.'],
 'market':['a place where people buy and sell things','chợ','I bought fruit at the market.'],
 'cafe':['a place where people buy drinks and simple food','quán cà phê','We meet at the cafe.'],
 'buy':['to get something by paying money','mua','I buy a souvenir at the market.'],
 'pay':['to give money for something','trả tiền','I pay for the ticket.'],
 'sleep':['to rest with your eyes closed at night','ngủ','I need to sleep at the hotel.'],
 'walk':['to move on foot','đi bộ','I walk to the gate.'],
 'wait':['to stay until something happens','chờ','I wait in the lobby.'],
 'late':['after the correct or expected time','trễ / muộn','I am late for my meeting.'],
 'early':['before the expected time','sớm','I arrive early at the airport.'],
 'overweight':['too heavy or above the allowed weight','quá cân / quá trọng lượng','My luggage is overweight, so I need to remove some items.'],
 'expensive':['costing a lot of money','đắt','This room is too expensive.'],
 'cheap':['costing little money','rẻ','This gift is cheap but nice.'],
 'quiet':['with little or no noise','yên tĩnh','I need a quiet place for my call.'],
 'busy':['full of people or activity','bận rộn / đông đúc','The cafe is busy today.'],
 'polite':['showing respect and good manners','lịch sự','A polite answer can help.'],
 'rude':['not polite; showing disrespect','thô lỗ / bất lịch sự','A rude answer increases stress.'],
 'cancel':['to stop a plan or booking','hủy','Do you want to cancel the ticket?'],
 'finish':['to complete something','hoàn thành','I need to finish check-in.']
};

const TEST_PROMPTS={
 'overweight fee':'Your bag is too heavy, so the airline asks you to pay an ___.',
 'weight limit':'The airline allows 23kg, but your bag is above the ___.',
 'carry-on':'Small bags you take onto the plane are called ___.',
 'reorganize':'You open your suitcase and ___ your clothes to make the bag lighter.',
 'reprint fee':'You lost your boarding pass, so the airline charges a ___ to print another one.',
 'barcode':'The scanner reads the ___ on your phone ticket.',
 'airline app':'You open the ___ on your phone to find your boarding pass.',
 'priority boarding':'Passengers with ___ can get on the plane earlier.',
 'boarding group':'Your ticket says you are in ___ C.',
 'overhead bin':'You put your bag in the ___ above your seat.',
 'exit row':'A seat near the emergency door is in the ___.',
 'seat':'Your ticket says your ___ is 34B.',
 'gate check':'If your carry-on is too large, staff may ask you to ___ it.',
 'check':'You can ___ your carry-on so it travels with checked luggage.',
 'tag':'The officer puts a paper ___ on your bag before sending it away.',
 'shuttle':'The free ___ takes passengers from Terminal 1 to Terminal 2.',
 'express cart':'The paid ___ moves passengers through the airport faster.',
 'snack':'A small food item before boarding is a ___.',
 'meal':'A sandwich, drink, and side together can be a quick ___.',
 'food court':'Many airport restaurants are together in the ___.',
 'security checkpoint':'Staff scan bags and passengers at the ___.',
 'boarding time':'You should reach the gate before your ___.',
 'tray':'At security, you put electronics and liquids in a ___.',
 'electronics':'Laptops and phones are ___.',
 'liquids':'Water and shampoo are examples of ___.',
 'metal items':'Keys, coins, and belts are ___.',
 'inspection':'If the scanner finds a problem, your bag needs extra ___.',
 'liquid':'A bottle of water is a ___.',
 'travel-size':'A small 100ml bottle for flights is ___.',
 'security rule':'The 100ml liquid limit is a ___.',
 'water station':'After security, you can refill your bottle at a ___.',
 'refill':'To put water in an empty bottle again is to ___.',
 'final boarding call':'The last announcement before the plane closes is the ___.',
 'personal item':'A small bag under your seat is a ___.',
 'flight attendant':'The person who helps passengers on the plane is a ___.',
 'purchase':'Food and drinks are available for ___ after takeoff.',
 'boarding pass':'At the gate, the officer scans your ___ before you can get on the plane.',
 'luggage':'Your ___ is 8kg over the limit, so the airline may charge a fee.',
 'departure':'The ___ time is 9:05, so you need to go to the gate soon.',
 'gate':'The screen says your flight is boarding at ___ 14B.',
 'delay':'A 40-minute ___ means the flight will leave later than planned.',
 'security check':'Before you reach the gate, you must pass through the ___.',
 'passport':'For an international flight, you must show your ___ with your ticket.',
 'terminal':'Your flight leaves from ___ 2, not the building you are in now.',
 'destination':'The officer asks, "What is your final ___: Hanoi or Ho Chi Minh City?"',
 'check-in':'At airport ___, staff weigh your bag and print your boarding pass.',
 'reservation':'At the hotel desk, you say, "I have a ___ under Nguyen."',
 'available':'The receptionist says one small room is still ___ tonight.',
 'floor':'Your room is on the fifth ___, so you need to take the lift.',
 'balcony':'The room has a small ___ where you can stand outside.',
 'checkout':'Hotel ___ is at 11am, so you must return the key before then.',
 'room service':'You call ___ because you want dinner delivered to your hotel room.',
 'housekeeping':'___ will clean the room after you leave in the morning.',
 'facilities':'The hotel ___ include a gym, pool, and business centre.',
 'lobby':'You wait in the hotel ___ near reception.',
 'bargain':'Only five dollars for this handmade scarf is a real ___.',
 'quality':'This bag costs more because the ___ is much better.',
 'recommend':'You ask the vendor, "Which local gift do you ___?"',
 'souvenir':'You buy a small ___ to remember your trip.',
 'vendor':'The market ___ sells fruit, scarves, and small gifts.',
 'discount':'The vendor gives you a 10% ___ because you buy two items.',
 'local':'A ___ product is made in the area you are visiting.',
 'fresh':'The fruit is ___ because it was picked this morning.',
 'price':'You ask, "What is the ___ of this lacquer box?"',
 'stall':'A market ___ is a small shop or table where people sell things.',
 'order':'At the cafe, you ___ coffee and dessert from the menu.',
 'menu':'The ___ lists the drinks, food, and prices.',
 'specialty':'Egg coffee is the cafe ___, so many visitors try it.',
 'portion':'The dessert ___ is huge, so two people can share it.',
 'atmosphere':'Soft music and warm lights create a relaxed ___.',
 'preference':'Your ___ is what you like more, such as coffee instead of tea.',
 'ingredient':'Egg yolk is the main ___ in egg coffee.',
 'regular':'A cafe ___ comes often and usually orders the same drink.',
 'dessert':'Cake or sweet sticky rice after the meal is ___.'
};
function testSentence(word){
  return TEST_PROMPTS[word]||`In this situation, the best word is ___.`;
}

const CHOICE_EFFECTS={
 airport:{
 student:[
   [{text:'Could I avoid the overweight fee by moving a few things?',money:0,stress:+7,time:-15,xp:10},{text:'That is fine. I will pay the overweight fee.',money:-80,stress:+2,time:-3,xp:5},{text:'Could you waive the overweight fee this one time?',money:0,stress:+12,time:-5,xp:20}],
   [{text:'Could I take a moment to find my boarding pass?',money:0,stress:+5,time:-8,xp:8},{text:'Could you print a new boarding pass for me, please?',money:-25,stress:-1,time:-2,xp:8},{text:'Can you scan the boarding pass screenshot on my phone?',money:0,stress:+6,time:-4,xp:15}],
   [{text:'No, thank you. I do not need priority boarding.',money:0,stress:+2,time:-2,xp:5},{text:'Yes, I would like to add priority boarding.',money:-45,stress:-5,time:-2,xp:6},{text:'Is there any way I could get priority boarding for free?',money:0,stress:+8,time:-3,xp:18}],
   [{text:'Could I make my carry-on smaller now?',money:0,stress:+4,time:-10,xp:10},{text:'I will send my carry-on with staff now to avoid trouble later.',money:-35,stress:-4,time:-4,xp:7},{text:'I will keep my carry-on with me and hope it is fine.',money:0,stress:+6,time:-1,xp:5}],
   [{text:'Could you show me where the gate is?',money:0,stress:-4,time:-12,xp:12},{text:'Is there a faster way to reach the gate?',money:-20,stress:-6,time:-5,xp:10},{text:'I will run to the gate myself.',money:0,stress:+10,time:-8,xp:8}],
   [{text:'I will spend a few minutes taking out my electronics and metal items so I do not get stopped later.',money:0,stress:-3,time:-7,xp:10},{text:'Is there a faster security lane or paid assistance I can use? I need to get through quickly.',money:-18,stress:-5,time:+6,xp:12},{text:'I only have a few small metal items. Can I keep them in my pocket and remove them if the scanner stops me?',money:0,stress:+12,time:-15,xp:8}],
   [{text:'I will remove my liquids now.',money:0,stress:-3,time:-7,xp:10},{text:'Could you explain which liquids are allowed?',money:0,stress:-5,time:-5,xp:12},{text:'I think my liquids can stay in my bag.',money:0,stress:+12,time:-15,xp:8}],
   [{text:'I will look for the water station after this.',money:0,stress:+2,time:-3,xp:8},{text:'Could you show me where the water station is?',money:0,stress:-3,time:-2,xp:10},{text:'I will ignore the water station and keep moving.',money:0,stress:+10,time:-18,xp:12}],
   [{text:'Is this the line for the final boarding call?',money:0,stress:-4,time:-5,xp:10},{text:'I am ready for the final boarding call now.',money:0,stress:-6,time:-2,xp:8},{text:'I am late for the final boarding call. Can I skip the line?',money:0,stress:+8,time:-6,xp:6}],
   [{text:'Could the flight attendant help me find overhead bin space?',money:0,stress:-5,time:-6,xp:12},{text:'I will ask the flight attendant before using another overhead bin.',money:-18,stress:-7,time:-3,xp:8},{text:'I will try to place my bag quickly before asking for help.',money:-30,stress:+10,time:-6,xp:5}]
  ],
  professional:[
   [{text:'Could I avoid the overweight fee by moving a few things?',money:0,stress:+7,time:-15,xp:10},{text:'That is fine. I will pay the overweight fee.',money:-80,stress:+2,time:-3,xp:5},{text:'Could you waive the overweight fee this one time?',money:0,stress:+12,time:-5,xp:20}],
   [{text:'Could I take a moment to find my boarding pass?',money:0,stress:+5,time:-8,xp:8},{text:'Could you print a new boarding pass for me, please?',money:-25,stress:-1,time:-2,xp:8},{text:'Can you scan the boarding pass screenshot on my phone?',money:0,stress:+6,time:-4,xp:15}],
   [{text:'No, thank you. I do not need priority boarding.',money:0,stress:+2,time:-2,xp:5},{text:'Yes, I would like to add priority boarding.',money:-45,stress:-5,time:-2,xp:6},{text:'Is there any way I could get priority boarding for free?',money:0,stress:+8,time:-3,xp:18}],
   [{text:'Could I make my carry-on smaller now?',money:0,stress:+4,time:-10,xp:10},{text:'I will send my carry-on with staff now to avoid trouble later.',money:-35,stress:-4,time:-4,xp:7},{text:'I will keep my carry-on with me and hope it is fine.',money:0,stress:+6,time:-1,xp:5}],
   [{text:'Could you show me where the gate is?',money:0,stress:-4,time:-12,xp:12},{text:'Is there a faster way to reach the gate?',money:-20,stress:-6,time:-5,xp:10},{text:'I will run to the gate myself.',money:0,stress:+10,time:-8,xp:8}],
   [{text:'I will spend a few minutes taking out my electronics and metal items so I do not get stopped later.',money:0,stress:-3,time:-7,xp:10},{text:'Is there a faster security lane or paid assistance I can use? I need to get through quickly.',money:-18,stress:-5,time:+6,xp:12},{text:'I only have a few small metal items. Can I keep them in my pocket and remove them if the scanner stops me?',money:0,stress:+12,time:-15,xp:8}],
   [{text:'I will remove my liquids now.',money:0,stress:-3,time:-7,xp:10},{text:'Could you explain which liquids are allowed?',money:0,stress:-5,time:-5,xp:12},{text:'I think my liquids can stay in my bag.',money:0,stress:+12,time:-15,xp:8}],
   [{text:'I will look for the water station after this.',money:0,stress:+2,time:-3,xp:8},{text:'Could you show me where the water station is?',money:0,stress:-3,time:-2,xp:10},{text:'I will ignore the water station and keep moving.',money:0,stress:+10,time:-18,xp:12}],
   [{text:'Is this the line for the final boarding call?',money:0,stress:-4,time:-5,xp:10},{text:'I am ready for the final boarding call now.',money:0,stress:-6,time:-2,xp:8},{text:'I am late for the final boarding call. Can I skip the line?',money:0,stress:+8,time:-6,xp:6}],
   [{text:'Could the flight attendant help me find overhead bin space?',money:0,stress:-5,time:-6,xp:12},{text:'I will ask the flight attendant before using another overhead bin.',money:-18,stress:-7,time:-3,xp:8},{text:'I will try to place my bag quickly before asking for help.',money:-30,stress:+10,time:-6,xp:5}]
  ]},
 hotel:{
  student:[
   [{text:'Find confirmation number.',money:0,time:-10,stress:+5,xp:10},{text:'Search by ID.',money:0,time:-3,stress:-2,xp:12},{risky:true,text:'Demand a room without proof.',success:{money:0,time:-2,stress:-3,xp:18},failure:{money:0,time:-15,stress:+12,xp:5}}],
   [{text:'Wait for a double bed room.',money:0,time:-12,stress:+4,xp:10},{text:'Pay for a suite upgrade.',money:-80,time:-2,stress:-5,xp:10},{risky:true,text:'Demand a free upgrade.',success:{money:0,time:-4,stress:-2,xp:18},failure:{money:0,time:-10,stress:+14,xp:4}}],
   [{text:'Wait in the lobby.',money:0,time:-25,stress:+8,xp:8},{text:'Pay early check-in fee.',money:-40,time:-2,stress:-6,xp:12},{risky:true,text:'Trade late check-out for free early check-in.',success:{money:0,time:-3,stress:-4,xp:18},failure:{money:0,time:-20,stress:+10,xp:6}}],
   [{text:'Provide card for full deposit.',money:0,time:-5,stress:+3,xp:10},{text:'Request reduced deposit.',money:0,time:-2,stress:-3,xp:14},{risky:true,text:'Refuse all deposit.',success:{money:0,time:-2,stress:-5,xp:20},failure:{money:0,time:-20,stress:+18,xp:2}}],
   [{text:'Use luggage cart.',money:0,time:-15,stress:+6,xp:10},{text:'Tip the bellhop.',money:-12,time:-3,stress:-4,xp:12},{risky:true,text:'Ask bellhop for no-tip help.',success:{money:0,time:-2,stress:+2,xp:16},failure:{money:0,time:-12,stress:+14,xp:5}}],
   [{text:'Use complimentary Wi-Fi.',money:0,time:-5,stress:+3,xp:10},{text:'Pay for premium Wi-Fi.',money:-20,time:-1,stress:-5,xp:12},{risky:true,text:'Ask for free Wi-Fi for a review.',success:{money:0,time:-2,stress:-3,xp:18},failure:{money:0,time:-10,stress:+8,xp:6}}],
   [{text:'Wait through the noise.',money:0,time:-18,stress:+12,xp:8},{text:'Request quiet room change.',money:0,time:-8,stress:-7,xp:14},{risky:true,text:'Ask for suite due to noise.',success:{money:0,time:-6,stress:-8,xp:20},failure:{money:0,time:-15,stress:+15,xp:4}}],
   [{text:'Take continental breakfast.',money:-15,time:-8,stress:-1,xp:10},{text:'Ask if buffet is inclusive.',money:0,time:-12,stress:-4,xp:12},{risky:true,text:'Order room service.',success:{money:-33,time:-3,stress:-5,xp:14},failure:{money:-33,time:-20,stress:+12,xp:4}}],
   [{text:'Check out at 11.',money:0,time:-6,stress:+4,xp:10},{text:'Pay for late check-out.',money:-45,time:+15,stress:-6,xp:12},{risky:true,text:'Ask for free loyalty extension.',success:{money:0,time:+10,stress:-4,xp:18},failure:{money:0,time:-12,stress:+12,xp:5}}],
   [{text:'Remove mini-bar overcharge.',money:+15,time:-10,stress:-2,xp:14},{text:'Accept final bill.',money:0,time:-2,stress:-3,xp:12},{risky:true,text:'Request full bill review.',success:{money:+30,time:-8,stress:-6,xp:20},failure:{money:0,time:-18,stress:+14,xp:5}}]
  ],
  professional:[
   [{text:'Find confirmation number.',money:0,time:-10,stress:+5,xp:10},{text:'Search by ID.',money:0,time:-3,stress:-2,xp:12},{risky:true,text:'Demand a room without proof.',success:{money:0,time:-2,stress:-3,xp:18},failure:{money:0,time:-15,stress:+12,xp:5}}],
   [{text:'Wait for a double bed room.',money:0,time:-12,stress:+4,xp:10},{text:'Pay for a suite upgrade.',money:-80,time:-2,stress:-5,xp:10},{risky:true,text:'Demand a free upgrade.',success:{money:0,time:-4,stress:-2,xp:18},failure:{money:0,time:-10,stress:+14,xp:4}}],
   [{text:'Wait in the lobby.',money:0,time:-25,stress:+8,xp:8},{text:'Pay early check-in fee.',money:-40,time:-2,stress:-6,xp:12},{risky:true,text:'Trade late check-out for free early check-in.',success:{money:0,time:-3,stress:-4,xp:18},failure:{money:0,time:-20,stress:+10,xp:6}}],
   [{text:'Provide card for full deposit.',money:0,time:-5,stress:+3,xp:10},{text:'Request reduced deposit.',money:0,time:-2,stress:-3,xp:14},{risky:true,text:'Refuse all deposit.',success:{money:0,time:-2,stress:-5,xp:20},failure:{money:0,time:-20,stress:+18,xp:2}}],
   [{text:'Use luggage cart.',money:0,time:-15,stress:+6,xp:10},{text:'Tip the bellhop.',money:-12,time:-3,stress:-4,xp:12},{risky:true,text:'Ask bellhop for no-tip help.',success:{money:0,time:-2,stress:+2,xp:16},failure:{money:0,time:-12,stress:+14,xp:5}}],
   [{text:'Use complimentary Wi-Fi.',money:0,time:-5,stress:+3,xp:10},{text:'Pay for premium Wi-Fi.',money:-20,time:-1,stress:-5,xp:12},{risky:true,text:'Ask for free Wi-Fi for a review.',success:{money:0,time:-2,stress:-3,xp:18},failure:{money:0,time:-10,stress:+8,xp:6}}],
   [{text:'Wait through the noise.',money:0,time:-18,stress:+12,xp:8},{text:'Request quiet room change.',money:0,time:-8,stress:-7,xp:14},{risky:true,text:'Ask for suite due to noise.',success:{money:0,time:-6,stress:-8,xp:20},failure:{money:0,time:-15,stress:+15,xp:4}}],
   [{text:'Take continental breakfast.',money:-15,time:-8,stress:-1,xp:10},{text:'Ask if buffet is inclusive.',money:0,time:-12,stress:-4,xp:12},{risky:true,text:'Order room service.',success:{money:-33,time:-3,stress:-5,xp:14},failure:{money:-33,time:-20,stress:+12,xp:4}}],
   [{text:'Check out at 11.',money:0,time:-6,stress:+4,xp:10},{text:'Pay for late check-out.',money:-45,time:+15,stress:-6,xp:12},{risky:true,text:'Ask for free loyalty extension.',success:{money:0,time:+10,stress:-4,xp:18},failure:{money:0,time:-12,stress:+12,xp:5}}],
   [{text:'Remove mini-bar overcharge.',money:+15,time:-10,stress:-2,xp:14},{text:'Accept final bill.',money:0,time:-2,stress:-3,xp:12},{risky:true,text:'Request full bill review.',success:{money:+30,time:-8,stress:-6,xp:20},failure:{money:0,time:-18,stress:+14,xp:5}}]
  ]},
 market:{
  student:[
   [{text:'Ask the vendor what is under $10.',money:0,stress:-5,time:-8,xp:20},{text:'Describe the gift you need clearly.',money:0,stress:-8,time:-10,xp:25},{text:'Ask if they can recommend something local.',money:0,stress:-10,time:-10,xp:25}],
   [{text:'Offer $8 and see what they say.',money:-8,stress:0,time:-10,xp:20},{text:'Ask them to show the cheapest options.',money:0,stress:-5,time:-10,xp:20},{text:'Politely walk to another stall.',money:0,stress:+5,time:-15,xp:15}],
   [{text:'Negotiate firmly and agree on $9.',money:-9,stress:-5,time:-8,xp:25},{text:'Buy the $10 item without bargaining.',money:-10,stress:-10,time:-5,xp:10},{text:'Ask for a small student discount.',money:-7,stress:-8,time:-10,xp:25}]
  ],
  professional:[
   [{text:'Ask directly what is high quality and local.',money:0,stress:0,time:-8,xp:20},{text:'Show a photo of the item you want.',money:0,stress:-5,time:-8,xp:20},{text:'Ask the vendor to recommend their best piece.',money:0,stress:-5,time:-10,xp:25}],
   [{text:'Pay the asking price to save time.',money:-80,stress:-10,time:-5,xp:10},{text:'Ask if they can wrap it as a business gift.',money:-65,stress:-5,time:-8,xp:20},{text:'Negotiate professionally for a fair price.',money:-55,stress:0,time:-10,xp:25}],
   [{text:'Buy it and ask for a receipt.',money:-70,stress:-8,time:-5,xp:15},{text:'Ask about the craftsmanship and origin.',money:-60,stress:-10,time:-10,xp:25},{text:'Request gift wrapping and a business bag.',money:-65,stress:-5,time:-8,xp:20}]
  ]},
 cafe:{
  student:[
   [{text:'Order a coffee and introduce yourself.',money:-5,stress:-10,time:-8,xp:20},{text:'Ask what they recommend on the menu.',money:-5,stress:-12,time:-8,xp:25},{text:'Ask an open question about their studies.',money:0,stress:-15,time:-10,xp:25}],
   [{text:'Ask about their favourite Vietnamese food.',money:0,stress:-12,time:-10,xp:25},{text:'Share why you are learning English.',money:0,stress:-15,time:-10,xp:25},{text:'Ask for their recommendation on the cafe.',money:-5,stress:-10,time:-8,xp:20}],
   [{text:'Suggest meeting here again next week.',money:0,stress:-15,time:-8,xp:25},{text:'Ask if they know other language partners.',money:0,stress:-10,time:-10,xp:20},{text:'Thank them and exchange contact details.',money:0,stress:-18,time:-5,xp:25}]
  ],
  professional:[
   [{text:'Ask the barista for a quiet table now.',money:-10,stress:-5,time:-5,xp:20},{text:'Order quickly and ask for the wifi password.',money:-15,stress:-5,time:-5,xp:20},{text:'Ask if there is a reserved section.',money:-25,stress:-10,time:-5,xp:15}],
   [{text:'Move to the corner table politely.',money:0,stress:-8,time:-8,xp:20},{text:'Ask the barista to hold the table for you.',money:-10,stress:-5,time:-5,xp:20},{text:'Buy a snack to justify taking the space.',money:-20,stress:-10,time:-5,xp:15}],
   [{text:'Check in with the client and explain.',money:0,stress:-5,time:-8,xp:25},{text:'Order for the client before they arrive.',money:-40,stress:-12,time:-5,xp:20},{text:'Ask the barista to recommend the specialty.',money:-15,stress:-15,time:-5,xp:25}]
  ]}
};

const API_BASE=location.protocol==='file:'?'https://world-explorer-7imk.onrender.com':'';
const API_URL=API_BASE+'/api/story';
const TURN_API_URL=API_BASE+'/api/turn';
const DEFINE_URL=API_BASE+'/api/define';
const TUTOR_API_URL=API_BASE+'/api/tutor';
const WRITING_FEEDBACK_URL=API_BASE+'/api/writing-feedback';
const USE_QUESTION_FEEDBACK_URL=API_BASE+'/api/use-question-feedback';
const STUDY_EVENT_URL=API_BASE+'/api/study-event';
const STATUS_URL=API_BASE+'/api/status';
const TUTOR_MESSAGE_LIMIT=15;
const POST_SURVEY_URL=''; // Paste your Qualtrics/Google Forms post-survey link here.
const DEV_MODE=true; // story uses built-in scripted turns; tutor chat and writing feedback call the AI server.
const TOTAL_TURNS=10;
const PREVIEW_MAX={money:1500,time:80,stress:100};
const state={sessionId:'we_'+Date.now()+'_'+Math.random().toString(36).slice(2,8),startedAt:new Date().toISOString(),sessionClockStartedAt:null,sessionClockTimer:null,name:'',difficulty:'Easy',char:null,level:null,turn:0,xp:0,money:0,time:0,stress:0,seen:[],answers:[],unlocked:1,scores:{},ending:'',crossedDanger:false,apiOk:null,lastPlayerAnswer:'',aiChoices:[],storyHistory:[],recoveryUsed:{},xpSupportUsed:{},testWords:[],eventCount:0,studyStopped:false,attempts:{},successfulAttempts:{},studyEvents:[],selectedIdea:null,quizRetryAfterReplay:{},lastWritingReview:null,freeChatHistory:[],tutorMessageCount:0,soundEnabled:localStorage.getItem('wordExplorerSound')!=='off'};
function $(id){return document.getElementById(id)}
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');const hud=$('miniHud');if(hud)hud.classList.toggle('show',id==='game');updateSessionClock();updateXpSupportBar();updateJourneyChrome(id);if(id==='setup')checkGameConnection()}
function toast(t){$('toast').textContent=t;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1200)}
function addXP(n){state.xp+=n;$('hud').textContent='⭐ '+state.xp+' XP';toast('+'+n+' XP');updateXpSupportBar()}
function clamp(n,min=0,max=100){return Math.max(min,Math.min(max,n))}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
let audioCtx=null;
function tone(freq=440,duration=.08,type='sine',gain=.045){
  if(!state.soundEnabled)return;
  try{
    audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();
    const osc=audioCtx.createOscillator(), vol=audioCtx.createGain();
    osc.type=type;osc.frequency.value=freq;vol.gain.value=gain;
    osc.connect(vol);vol.connect(audioCtx.destination);
    const now=audioCtx.currentTime;
    vol.gain.setValueAtTime(gain,now);
    vol.gain.exponentialRampToValueAtTime(.001,now+duration);
    osc.start(now);osc.stop(now+duration);
  }catch(e){}
}
function sound(kind){
  if(kind==='choice'){tone(520,.055,'triangle',.035);setTimeout(()=>tone(700,.055,'triangle',.03),55);return;}
  if(kind==='gain'){tone(620,.07,'sine',.04);setTimeout(()=>tone(880,.08,'sine',.035),65);return;}
  if(kind==='loss'){tone(260,.09,'sawtooth',.025);setTimeout(()=>tone(210,.1,'sawtooth',.02),70);return;}
  if(kind==='danger'){tone(180,.14,'square',.025);return;}
  if(kind==='quizPass'){[523,659,784,1046].forEach((f,i)=>setTimeout(()=>tone(f,.11,'triangle',.045),i*105));return;}
  if(kind==='quizFail'){tone(330,.12,'sine',.035);setTimeout(()=>tone(247,.16,'sine',.03),120);return;}
}
function updateSoundToggle(){
  const button=$('soundToggle');
  if(!button)return;
  button.textContent=state.soundEnabled?'🔊 Sound':'🔇 Muted';
  button.setAttribute('aria-pressed',String(state.soundEnabled));
}
function toggleSound(){
  state.soundEnabled=!state.soundEnabled;
  localStorage.setItem('wordExplorerSound',state.soundEnabled?'on':'off');
  updateSoundToggle();
  if(state.soundEnabled)sound('choice');
}
function levelPassed(id){return Number(state.scores[id]||0)>=passScoreForLevel(id)}
function stampHtml(id,label,icon){
  return `<div class="passportStamp ${levelPassed(id)?'earned':''}"><div><span class="passportStampIcon">${icon}</span>${label}<br>${levelPassed(id)?'Completed':'Not yet'}</div></div>`;
}
function renderPassportStamps(targetId){
  const target=$(targetId);
  if(target)target.innerHTML=stampHtml('airport','Airport','✈️')+stampHtml('hotel','Hotel','🏨');
}
function updateJourneyChrome(screenId){
  const route=$('routeProgress');
  if(!route)return;
  const visible=!!state.char&&!['start','setup','instructions','chars'].includes(screenId);
  route.classList.toggle('show',visible);
  const airport=$('routeAirport'), hotel=$('routeHotel');
  [airport,hotel].forEach(el=>el&&el.classList.remove('active','done'));
  if(levelPassed('airport'))airport.classList.add('done');
  if(levelPassed('hotel'))hotel.classList.add('done');
  if(!levelPassed('airport')&&(state.level?.id==='airport'||screenId==='map'))airport.classList.add('active');
  if(levelPassed('airport')&&!levelPassed('hotel')&&(state.level?.id==='hotel'||screenId==='map'))hotel.classList.add('active');
}
async function checkGameConnection(){
  const box=$('connectionCheck'), text=$('connectionText'), button=$('beginJourneyBtn');
  if(!box||!text)return;
  box.className='connectionCheck checking';
  text.textContent='Checking game connection…';
  if(button)button.disabled=true;
  try{
    const res=await fetch(STATUS_URL,{cache:'no-store'});
    const data=await res.json();
    if(!res.ok||!data.ok)throw new Error('not ready');
    box.className='connectionCheck ready';
    text.textContent=data.provider==='offline'?'Game ready · basic mode available':'Game ready · AI support connected';
    state.apiOk=data.provider!=='offline';
  }catch(e){
    box.className='connectionCheck problem';
    text.textContent='Connection unavailable · please ask the researcher before continuing';
    state.apiOk=false;
  }finally{
    if(button)button.disabled=false;
  }
}
function pulseMeter(kind,delta){
  if(!delta)return;
  const el=$(kind+'Meter');
  if(!el)return;
  const good=(kind==='stress')?delta<0:delta>0;
  const cls=good?'pulseGain':'pulseLoss';
  el.classList.remove('pulseGain','pulseLoss');
  void el.offsetWidth;
  el.classList.add(cls);
  sound(good?'gain':'loss');
}
function blockPaste(e){e.preventDefault();alert('Please type your own answer for this research task. Copy and paste is turned off here.');}
function formatElapsed(ms){
  const total=Math.max(0,Math.floor(ms/1000));
  const minutes=String(Math.floor(total/60)).padStart(2,'0');
  const seconds=String(total%60).padStart(2,'0');
  return `${minutes}:${seconds}`;
}
function updateSessionClock(){
  if(!state.sessionClockStartedAt)return;
  const text='⏱ '+formatElapsed(Date.now()-state.sessionClockStartedAt);
  ['gameClock','testClock'].forEach(id=>{const el=$(id);if(el)el.textContent=text;});
}
function startSessionClock(){
  if(!state.sessionClockStartedAt)state.sessionClockStartedAt=Date.now();
  updateSessionClock();
  if(!state.sessionClockTimer)state.sessionClockTimer=setInterval(updateSessionClock,1000);
}
function resourceSnapshot(){
  return {money:Math.round(state.money||0),time:Math.round(state.time||0),stress:Math.round(state.stress||0),xp:state.xp,turn:state.turn,level:state.level?.id||null,character:state.char?.id||null,difficulty:state.difficulty,elapsedSeconds:state.sessionClockStartedAt?Math.floor((Date.now()-state.sessionClockStartedAt)/1000):0};
}
function studyPayload(type,details={}){
  return {type,sessionId:state.sessionId,clientTime:new Date().toISOString(),participantCode:state.name||null,difficulty:state.difficulty,resources:resourceSnapshot(),scores:state.scores,seenWords:state.seen,storyHistory:state.storyHistory,details};
}
function logStudyEvent(type,details={}){
  const payload=studyPayload(type,details);
  state.eventCount++;
  state.studyEvents.push(payload);
  localStorage.setItem('wordExplorerStudyEvents',JSON.stringify(state.studyEvents));
  localStorage.setItem('wordExplorerLastStudyEvent',JSON.stringify(payload));
  const status=$('studyStatus');
  if(status)status.textContent='Study data: saving...';
  fetch(STUDY_EVENT_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
    .then(res=>{if(!res.ok)throw new Error('not saved'); if(status)status.textContent='Study data: saved';})
    .catch(()=>{if(status)status.textContent='Study data: local backup only';});
}
function studyDataExport(){
  return {
    sessionId:state.sessionId,
    startedAt:state.startedAt,
    exportedAt:new Date().toISOString(),
    participantCode:state.name||null,
    difficulty:state.difficulty,
    character:state.char?.id||null,
    scores:state.scores,
    attempts:state.attempts,
    successfulAttempts:state.successfulAttempts,
    finalResources:resourceSnapshot(),
    events:state.studyEvents
  };
}
async function copyStudyData(){
  const text=JSON.stringify(studyDataExport(),null,2);
  try{
    await navigator.clipboard.writeText(text);
    toast('Study data copied');
  }catch(err){
    localStorage.setItem('wordExplorerStudyDataExport',text);
    alert('Clipboard was not available. A backup copy was saved in this browser as wordExplorerStudyDataExport.');
  }
}
function openPostSurvey(){
  logStudyEvent('post_survey_click',{level:state.level?.id||null,completedLevels:Object.keys(state.scores),surveyConfigured:!!POST_SURVEY_URL});
  if(!POST_SURVEY_URL){
    alert('Post-survey link is not set yet. Paste your survey URL into POST_SURVEY_URL in the game file.');
    return;
  }
  window.open(POST_SURVEY_URL,'_blank','noopener');
}
function downloadStudyData(){
  const text=JSON.stringify(studyDataExport(),null,2);
  const blob=new Blob([text],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=`word-explorer-${state.name||'participant'}-${state.sessionId}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast('Study data downloaded');
}
function collectPartialTestAnswers(){
  if(state.testType==='airport_short')return collectAirportPartialAnswers();
  if(state.testType==='hotel_assessment')return collectHotelPartialAnswers();
  if(!state.testWords||!state.testWords.length)return [];
  return state.testWords.map((w,i)=>{
    if(state.answers[i])return state.answers[i];
    if(i>=4&&i<7)return {word:w,ok:false,picked:($('type'+i)||{}).value||'',type:'type_partial'};
    if(i>=7)return {word:w,ok:false,picked:($('use'+i)||{}).value||'',type:'use_partial'};
    return {word:w,ok:false,picked:'not answered',type:'mc_partial'};
  });
}
function collectAirportPartialAnswers(){
  const a=state.currentAssessment||{};
  const match=(a.matchItems||AIRPORT_MATCH_ITEMS||[]).map((item,i)=>({word:item.word,picked:($('airportMatch'+i)||{}).value||'',correct:item.answer,type:'match_partial'}));
  const fill=(a.fillItems||AIRPORT_FILL_ITEMS||[]).map((item,i)=>{
    if(Array.isArray(item.answer)){
      return {word:item.answer.join(' + '),picked:[($('airportFill'+i+'_0')||{}).value||'',($('airportFill'+i+'_1')||{}).value||''].join(' + '),type:'fill_partial'};
    }
    return {word:item.answer,picked:($('airportFill'+i)||{}).value||'',type:'fill_partial'};
  });
  const reading=(a.readingItems||AIRPORT_READING_TF||[]).map((item,i)=>({question:item.statement,picked:($('airportTf'+i)||{}).value||'',correct:item.answer,type:'true_false_partial'}));
  return {match,fill,reading};
}
function collectHotelPartialAnswers(){
  const a=state.currentAssessment||{};
  const match=(a.matchItems||HOTEL_MATCH_ITEMS||[]).map((item,i)=>({word:item.word,picked:($('hotelMatch'+i)||{}).value||'',correct:item.answer,type:'match_partial'}));
  const fill=(a.fillItems||HOTEL_FILL_ITEMS||[]).map((item,i)=>({word:item.answer,picked:($('hotelFill'+i)||{}).value||'',type:'fill_partial'}));
  const reading=(a.readingItems||HOTEL_READING_TF||[]).map((item,i)=>({question:item.statement,picked:($('hotelTf'+i)||{}).value||'',correct:item.answer,type:'true_false_partial'}));
  return {match,fill,reading};
}
function targetWordsInText(text){
  const vocab=state.level?.vocab||[];
  return vocab.filter(w=>new RegExp('\\b'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(text));
}
function responseProfile(text){
  const words=String(text||'').trim().split(/\s+/).filter(Boolean);
  return {wordCount:words.length,sentenceLike:/[.!?]$/.test(String(text||'').trim()),targetWordsUsed:targetWordsInText(text)};
}
function selectDifficulty(value,card){
  state.difficulty=value;
  const input=$('difficultyTier');
  if(input)input.value=value;
  document.querySelectorAll('.difficultyCard').forEach(el=>el.classList.remove('selected'));
  if(card)card.classList.add('selected');
}
function stopStudy(reason){
  if(state.studyStopped)return;
  state.studyStopped=true;
  const partialAnswers=collectPartialTestAnswers();
  logStudyEvent('study_stop',{reason,partialAnswers,completedLevels:Object.keys(state.scores),bestScores:state.scores});
  const completed=Object.keys(state.scores).length;
  $('studySummary').innerHTML=`<h3>Session summary</h3>
    <p class="small">Participant: <b>${esc(state.name||'unnamed')}</b><br>Session ID: <b>${esc(state.sessionId)}</b></p>
    <p class="small">Completed levels with tests: <b>${completed}</b> / ${LEVELS.length}<br>Current level: <b>${esc(state.level?.name||'none')}</b><br>Final resources: <b>$${Math.round(state.money||0)}</b> · <b>${resourceTwoName()} ${Math.round(state.time||0)}${resourceTwoUnit()}</b> · <b>Stress ${Math.round(state.stress||0)}/100</b></p>
    <div class="note"><b>Study record saved.</b><br><span class="small">Your completed activity has been recorded for the research study.</span></div>
    <button class="btn primary" style="width:100%;margin-top:10px" onclick="openPostSurvey()">Take Post Survey</button>
    <button class="btn primary" style="width:100%;margin-top:10px" onclick="copyStudyData()">Copy Study Data</button>
    <button class="btn ghost" style="width:100%;margin-top:10px" onclick="downloadStudyData()">Download Study Data</button>
    <button class="btn ghost" style="width:100%;margin-top:10px" onclick="showMap()">Return to Level Map</button>`;
  show('studyEnd');
}

function startJourney(){
  const input=$('playerName'), error=$('playerNameError'), n=input.value.trim();
  if(!n){
    input.classList.add('inputError');
    error.classList.add('show');
    input.focus();
    return;
  }
  input.classList.remove('inputError');
  error.classList.remove('show');
  sound('choice');
  state.name=n;
  state.difficulty=($('difficultyTier')&&$('difficultyTier').value)||'Easy';
  logStudyEvent('session_start',{participantCode:n,difficulty:state.difficulty,studyAcknowledgement:true});
  show('instructions');
}
function bindSetupControls(){
  const button=$('beginJourneyBtn'), input=$('playerName');
  if(button)button.addEventListener('click',startJourney);
  if(input){
    input.addEventListener('input',()=>{
      if(!input.value.trim())return;
      input.classList.remove('inputError');
      const error=$('playerNameError');
      if(error)error.classList.remove('show');
    });
    input.addEventListener('keydown',event=>{if(event.key==='Enter')startJourney()});
  }
}
bindSetupControls();
function beginStudyFromInstructions(){logStudyEvent('instructions_acknowledged',{quizUnlockRule:'resources_must_stay_safe'});renderChars();show('chars')}
function meterPreview(c,label,value,max,danger,stress=false){
  const pct=stress?value:Math.round(value/max*100), mark=stress?danger:Math.round(danger/max*100);
  return `<div style="margin-top:8px"><div style="display:flex;justify-content:space-between;font-size:12px;font-weight:900;color:var(--muted)"><span>${label}</span><span>${stress?value+'/100':label.includes('Money')?'$'+value:value+' min'}</span></div><div class="track" style="margin-top:5px"><div class="fill ${label.includes('Money')?'money':label.includes('Time')?'time':'stress'}" style="width:${pct}%"></div><span class="marker" style="left:${mark}%"></span></div></div>`
}
function renderChars(){
  $('charGrid').innerHTML=CHARS.map(c=>`<div class="choice" onclick="pickChar('${c.id}')"><div class="emoji">${c.emoji}</div><div class="name">${c.name}</div><div class="role">${c.role}</div><div class="desc">${c.desc}</div>${meterPreview(c,'Money',c.startMoney,PREVIEW_MAX.money,c.dangerMoney)}${meterPreview(c,'Time',c.startTime,PREVIEW_MAX.time,c.dangerTime)}${meterPreview(c,'Stress',c.startStress,PREVIEW_MAX.stress,c.dangerStress,true)}<div class="small" style="margin-top:10px"><b>${c.challenge}</b></div></div>`).join('')
}
function pickChar(id){state.char=CHARS.find(c=>c.id===id);logStudyEvent('character_selected',{character:state.char});showMap()}
function showMap(){
  $('mapSub').textContent=`${state.char.emoji} ${state.char.name} · pass the vocabulary test to unlock the next level`;
  renderPassportStamps('mapStamps');
  const visibleLevels=LEVELS.filter(l=>l.id==='airport'||l.id==='hotel');
  $('levelMap').innerHTML=visibleLevels.map(l=>{
    const open=l.num<=state.unlocked, done=state.scores[l.id]>=passScoreForLevel(l.id);
    return `<div class="level ${open?'open':'locked'} ${done?'done':''}" ${open?`onclick="pickLevel('${l.id}')"`:''}>
      <div class="badge">${done?'✓':open?l.icon:'🔒'}</div><div style="flex:1"><div class="level-title">Level ${l.num}: ${l.name}</div>
      <div class="level-meta">${l.quests[state.char.id].title} · ${l.level} · ${state.difficulty}</div>${state.scores[l.id]!=null?`<div class="scoreLine">Best score: ${state.scores[l.id]}/${testTotalForLevel(l.id)}</div>`:''}</div></div>`;
  }).join('');
  show('map');
}
function passScoreForLevel(id){return id==='airport'?16:id==='hotel'?20:6}
function testTotalForLevel(id){return id==='airport'?20:id==='hotel'?25:7}
function studyCompletionText(passed){
  if(!passed)return `${state.name}, vocabulary test not passed yet. Review the missed items and replay this level when ready.`;
  if(state.level?.id==='hotel')return `Thank you, ${state.name}. You completed both study levels. Please copy or download your study data before closing.`;
  return `${state.name}, ${state.ending}. Level ${state.level.num} passed. Level 2 — Hotel — is now unlocked.`;
}
function simpleReviewHtml(items){
  return items.map(d=>{
    const label=d.word||d.question||'Question';
    const correct=d.correct||d.word||'—';
    return `<div class="reviewWord"><b>${esc(label)}</b><div class="small">Your answer: ${esc(d.picked||'not answered')}<br>Correct answer: ${esc(correct)}</div></div>`;
  }).join('');
}
function sectionedReviewHtml(items){
  const sections=[
    ['Vocabulary Matching',items.filter(d=>d.part==='match')],
    ['Fill in the Blank',items.filter(d=>d.part==='fill_blank'||d.type==='type')],
    ['Reading / True-False',items.filter(d=>d.part==='reading_true_false')],
    ['Choose the Word',items.filter(d=>d.type==='mc')]
  ].filter(s=>s[1].length);
  if(!sections.length)return '<div class="reviewWord"><b>Objective answers</b><div class="small">No missed objective items recorded.</div></div>';
  return sections.map(([title,rows])=>`<div class="card" style="margin:0"><b>${esc(title)}</b><div style="display:grid;gap:10px;margin-top:10px">${simpleReviewHtml(rows)}</div></div>`).join('');
}
function writingReviewHtml(){
  const w=state.lastWritingReview;
  if(!w)return '<div class="card" style="margin:0"><b>Writing Feedback</b><div class="small" style="margin-top:8px">No writing response was recorded for this attempt.</div></div>';
  const response=w.response?`<div class="small" style="margin-top:8px"><b>Your writing:</b> ${esc(w.response)}</div>`:'<div class="small" style="margin-top:8px">No writing submitted.</div>';
  const feedback=w.feedback?`<div class="feedback" style="display:block;margin-top:10px"><b>AI feedback:</b> ${w.feedback}</div>`:'';
  return `<div class="card" style="margin:0;border-left:5px solid var(--teal)"><b>Writing Feedback and Rubric</b>${response}${feedback}${writingRubricHtml(w.rubric)}</div>`;
}
function pickLevel(id){
  state.level=LEVELS.find(l=>l.id===id);resetLevelState();
  const q=state.level.quests[state.char.id], c=levelRules();
  $('briefCard').innerHTML=`<button class="btn ghost" style="margin-bottom:14px;font-size:13px" onclick="showMap()">← Back to Level Map</button>
  <div class="missionTop"><div class="missionIcon">${state.level.icon}</div><div><span class="tag">Level ${state.level.num} · ${state.level.level}</span><h2 style="margin:8px 0 0">${q.title}</h2><div class="small">${state.char.emoji} ${state.char.name} · ${state.level.name}</div></div></div>
  <div class="stakes"><b>Situation:</b> ${q.setup}<br><b>Time pressure:</b> ${q.clock}</div>
  <div class="difficultyBanner"><b>${state.difficulty} mode:</b> ${difficultyDescription()}</div>
  <div class="goal"><b>Your goal:</b> ${q.goal}</div>
  <table class="rules"><tr><th>Resource</th><th>Starting</th><th>Danger if...</th><th>Strong if...</th></tr>
    <tr><td>💰 Money</td><td>$${c.startMoney}</td><td class="dangerText">below $${c.dangerMoney}</td><td class="strongText">above $${c.strongMoney}</td></tr>
    <tr><td>${resourceTwoIcon()} ${resourceTwoName()}</td><td>${c.startTime}${resourceTwoUnit()}</td><td class="dangerText">below ${c.dangerTime}${resourceTwoUnit()}</td><td class="strongText">above ${c.strongTime}${resourceTwoUnit()}</td></tr>
    <tr><td>😰 Stress</td><td>${c.startStress}/100</td><td class="dangerText">above ${c.dangerStress}</td><td class="strongText">below ${c.strongStress}</td></tr>
  </table>
  <button class="btn primary" style="width:100%;margin-top:18px" onclick="begin()">Begin Level</button>`;
  show('brief');
}
function levelRules(){
  if(state.level?.id==='airport'){
    return {startMoney:500,startTime:120,startStress:20,dangerMoney:350,dangerTime:60,dangerStress:80,strongMoney:420,strongTime:80,strongStress:60};
  }
  if(state.level?.id==='hotel'){
    if(state.char?.id==='professional')return {startMoney:1500,startTime:35,startStress:40,dangerMoney:200,dangerTime:20,dangerStress:80,strongMoney:200,strongTime:20,strongStress:80};
    return {startMoney:500,startTime:80,startStress:45,dangerMoney:200,dangerTime:20,dangerStress:80,strongMoney:200,strongTime:20,strongStress:80};
  }
  return state.char;
}
function resourceTwoName(){return 'Time'}
function resourceTwoIcon(){return '⏰'}
function resourceTwoUnit(){return ' min'}
function difficultyDescription(){
  return {
    Easy:'A2 support with shorter sentences and clearer choices.',
    Hard:'B1 challenge with more natural language and tighter resource pressure.'
  }[state.difficulty]||'B1 challenge.';
}
function resetLevelState(){
  const r=levelRules();
  if(state.level?.id)state.attempts[state.level.id]=(state.attempts[state.level.id]||0)+1;
  state.turn=0;state.seen=[];state.answers=[];state.money=r.startMoney;state.time=r.startTime;state.stress=r.startStress;
  if(!['airport','hotel'].includes(state.level?.id)&&state.difficulty==='Easy'){state.time+=10;state.stress=clamp(state.stress-5)}
  if(!['airport','hotel'].includes(state.level?.id)&&state.difficulty==='Hard'){state.time=Math.max(5,state.time-10);state.stress=clamp(state.stress+8)}
  state.ending='';state.crossedDanger=false;state.lastPlayerAnswer='';state.aiChoices=[];state.storyHistory=[];state.recoveryUsed={};state.xpSupportUsed={};state.lastWritingReview=null;state.freeChatHistory=[];state.tutorMessageCount=0;state.turnPages=[];state.pageIndex=0
}
function levelOpeningPage(){
  const q=state.level.quests[state.char.id], r=levelRules();
  if(state.level.id==='airport'){
    return `<div class="sceneBrief">
      <div class="sceneBriefTop"><div class="sceneBriefIcon">✈️</div><div><div class="sceneBriefEyebrow">Level 1 · Airport</div><div class="sceneBriefTitle">Flight 218 to Berlin</div></div></div>
      <div class="sceneBriefBody">
        <p>You are at an airport in Vietnam, travelling alone to Berlin. You have arrived at the check-in counter with your passport, luggage, and enough time before boarding.</p>
        <p><b>However,</b> your suitcase is above the airline's weight limit. You must solve this problem, pass through security, reach Gate B7, and board the plane without losing too much money, time, or calm.</p>
      </div>
      <div class="sceneBriefFacts">
        <div class="sceneFact"><b>Destination</b><span>Berlin</span></div>
        <div class="sceneFact"><b>Boarding</b><span>In ${r.startTime} minutes</span></div>
        <div class="sceneFact"><b>First problem</b><span>Heavy suitcase</span></div>
      </div>
    </div>`;
  }
  return `<div class="sceneBrief">
    <div class="sceneBriefTop"><div class="sceneBriefIcon">🏨</div><div><div class="sceneBriefEyebrow">Level 2 · Hotel</div><div class="sceneBriefTitle">Arrival in Berlin</div></div></div>
    <div class="sceneBriefBody">
      <p>You have arrived at your hotel in Berlin and approach the front desk to check in. You are tired, and you need to settle in before your next commitment.</p>
      <p><b>However,</b> the receptionist cannot find your booking. You must confirm your reservation, make decisions about the room and hotel services, and check the final bill carefully.</p>
    </div>
    <div class="sceneBriefFacts">
      <div class="sceneFact"><b>Location</b><span>Berlin hotel</span></div>
      <div class="sceneFact"><b>Time available</b><span>${r.startTime} minutes</span></div>
      <div class="sceneFact"><b>First problem</b><span>Missing booking</span></div>
    </div>
  </div>`;
}
function begin(){
  startSessionClock();
  resetLevelState();
  $('story').innerHTML='';
  $('dice').innerHTML='';
  $('responses').innerHTML='';
  positionMarkers();
  renderBars();
  logStudyEvent('level_start',{level:state.level,quest:state.level.quests[state.char.id],attemptNumber:state.attempts[state.level.id]});
  addTurnPage({kind:'intro',turn:0,title:state.level.id==='airport'?'Airport Briefing':'Hotel Briefing',supportHtml:levelOpeningPage()});
  nextTurn();
  show('game');
}
function positionMarkers(){
  const r=levelRules();
  $('moneyMark').style.left=Math.round(r.dangerMoney/r.startMoney*100)+'%';
  $('timeMark').style.left=Math.round(r.dangerTime/r.startTime*100)+'%';
  $('stressMark').style.left=r.dangerStress+'%';
}
function renderBars(){
  const c=levelRules();
  const moneyPct=clamp(Math.round(state.money/c.startMoney*100)), timePct=clamp(Math.round(state.time/c.startTime*100)), stressPct=clamp(state.stress);
  const timeLabel=document.querySelector('#timeMeter .meterLabel span:first-child');
  const timeWarn=document.querySelector('#timeMeter .warn');
  if(timeLabel)timeLabel.textContent=resourceTwoIcon()+' '+resourceTwoName();
  if(timeWarn)timeWarn.textContent='Danger: you may miss the flight, meeting, or deadline.';
  $('moneyNum').textContent='$'+Math.round(state.money);$('timeNum').textContent=Math.round(state.time)+resourceTwoUnit();$('stressNum').textContent=Math.round(state.stress)+'/100';
  $('moneyFill').style.width=moneyPct+'%';$('timeFill').style.width=timePct+'%';$('stressFill').style.width=stressPct+'%';
  setDanger('money',state.money<c.dangerMoney);setDanger('time',state.time<c.dangerTime);setDanger('stress',state.stress>c.dangerStress);
  updateMiniHud();
  updateXpSupportBar();
  const q=state.level.quests[state.char.id];
  $('questbar').innerHTML=`<b>⚡ ${q.title}</b> <span class="small">· ${q.clock}</span><br><span class="small">Goal: $${c.dangerMoney}+ · ${resourceTwoName()} ${c.dangerTime}+${resourceTwoUnit()} · Stress ≤ ${c.dangerStress}</span>`;
}
function setDanger(kind,on){$(kind+'Meter').classList.toggle('danger',on);$(kind+'Fill').classList.toggle('dangerFill',on)}
function updateMiniHud(){
  const hud=$('miniHud'); if(!hud||!state.char)return;
  const r=levelRules();
  hud.classList.toggle('show',$('game').classList.contains('active'));
  $('miniMoney').innerHTML=`<span class="miniValue">💰 $${Math.round(state.money)}</span><span class="miniGoal">goal $${r.dangerMoney}+</span>`;
  $('miniTime').innerHTML=`<span class="miniValue">${resourceTwoIcon()} ${Math.round(state.time)}${resourceTwoUnit()}</span><span class="miniGoal">goal ${r.dangerTime}+${resourceTwoUnit()}</span>`;
  $('miniStress').innerHTML=`<span class="miniValue">😰 ${Math.round(state.stress)}/100</span><span class="miniGoal">limit ≤ ${r.dangerStress}</span>`;
  $('miniMoney').classList.toggle('dangerMini',state.money<r.dangerMoney);
  $('miniTime').classList.toggle('dangerMini',state.time<r.dangerTime);
  $('miniStress').classList.toggle('dangerMini',state.stress>r.dangerStress);
}
function applyDelta(d){
  state.money=Math.max(0,state.money+(d.money||0));
  state.time=Math.max(0,state.time+(d.time||0));
  state.stress=clamp(state.stress+(d.stress||0));
  renderBars();
  pulseMeter('money',d.money||0);
  pulseMeter('time',d.time||0);
  pulseMeter('stress',d.stress||0);
  const fail=checkDanger();
  if(fail)sound('danger');
  state.crossedDanger=!!fail;
  return fail||null;
}
function checkDanger(){const c=levelRules();if(state.money<c.dangerMoney)return 'money';if(state.time<c.dangerTime)return 'time';if(state.stress>c.dangerStress)return 'stress';return null}
function dangerMessage(type){return {money:'Your money dropped below the safe line. You may not have enough money to continue.',time:'Your time dropped below the safe line. You may miss the flight, meeting, or deadline.',stress:'Your stress crossed the danger line. Panic makes communication harder.'}[type]}
function recoveryRisk(){
  const c=levelRules();
  if(!state.recoveryUsed.money&&state.money<=c.dangerMoney+Math.round(c.startMoney*.12))return 'money';
  if(!state.recoveryUsed.time&&state.time<=c.dangerTime+12)return 'time';
  if(!state.recoveryUsed.stress&&state.stress>=c.dangerStress-12)return 'stress';
  return null;
}
function recoveryMessage(type){
  return {
    money:'Your money is close to the danger line. You can use one support card to recover money, but it will cost time.',
    time:'Your time is close to the danger line. You can use one support card to recover time, but it will cost money.',
    stress:'Your stress is close to the danger line. You can use one support card to calm down, but it will cost time.'
  }[type];
}
function showWordHelp(w){
  if(!state.seen.includes(w))state.seen.push(w);
  const v=VDB[w]||[w,'Example unavailable.'];
  logStudyEvent('vocabulary_support',{method:'click_highlighted_word',word:w,vietnamese:v?.[0]||'',example:v?.[1]||''});
  alert(`${w}\nVietnamese: ${v[0]}\nExample: ${v[1]}`);
}
function word(w){if(!state.seen.includes(w))state.seen.push(w);return `<span class="word" onclick="showWordHelp('${esc(w)}')">${w}</span>`}
function renderGeneratedText(text,requiredWords){
  let html=esc(text||'').replace(/\*\*([^*\n]+)\*\*/g,(m,w)=>{
    const key=w.toLowerCase().trim();
    return VDB[key]?word(key):`<b>${esc(w)}</b>`;
  });
  return html;
}
function plainText(html){return String(html||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim()}
function rememberBeat(text){state.storyHistory.push(`Turn ${state.turn}: ${plainText(text)}`);state.storyHistory=state.storyHistory.slice(-12)}
function addTurnPage(page){
  if(!state.turnPages)state.turnPages=[];
  state.turnPages.push(Object.assign({kind:'turn',turn:state.turn,title:'',previousChoice:'',feedback:'',scenario:'',supportHtml:''},page||{}));
  state.pageIndex=state.turnPages.length-1;
  renderTurnPage();
  scrollTurnPageIntoView();
}
function scrollTurnPageIntoView(){
  const s=$('story');
  if(!s)return;
  requestAnimationFrame(()=>s.scrollIntoView({behavior:'smooth',block:'start'}));
}
function insertFeedbackAfterNpcReaction(scenario,feedback,danger=false){
  if(!feedback)return scenario;
  const block=`<div class="note ${danger?'dangerNote':''}" style="margin:12px 0">${feedback}</div>`;
  const divider='<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">';
  const idx=String(scenario||'').indexOf(divider);
  if(idx>=0)return scenario.slice(0,idx)+block+scenario.slice(idx);
  return String(scenario||'')+block;
}
function latestTurnPage(){
  return state.turnPages&&state.turnPages.length?state.turnPages[state.turnPages.length-1]:null;
}
function currentTurnPage(){
  return state.turnPages&&state.turnPages.length?state.turnPages[state.pageIndex||0]:null;
}
function renderTurnPage(){
  const s=$('story');
  if(!s)return;
  const pages=state.turnPages||[];
  if(!pages.length){s.innerHTML='';return;}
  state.pageIndex=Math.max(0,Math.min(state.pageIndex||0,pages.length-1));
  const p=pages[state.pageIndex];
  const isLatest=state.pageIndex===pages.length-1;
  const label=p.title||((p.kind==='intro')?'Mission Briefing':(p.kind==='support'?'Support Page':(p.kind==='result'?'Result Page':`Turn ${p.turn} of ${TOTAL_TURNS}`)));
  const previousDisabled=state.pageIndex<=0?'disabled':'';
  const previousLabel=state.pageIndex===1&&pages[0]?.kind==='intro'?'← Briefing':'← Back';
  const nextDisabled=isLatest?'disabled':'';
  const latestButton=!isLatest?`<button class="btn ghost" onclick="goLatestStoryPage()">Latest</button>`:'';
  s.innerHTML=`<div class="pageNav">
      <button class="btn ghost" onclick="goStoryPage(-1)" ${previousDisabled}>${previousLabel}</button>
      <div class="pageCounter">Page ${state.pageIndex+1}/${pages.length}<br>${esc(label)}</div>
      <div style="display:flex;gap:6px">${latestButton}<button class="btn ghost" onclick="goStoryPage(1)" ${nextDisabled}>Next →</button></div>
    </div>
    ${!isLatest?`<div class="note reviewOnly"><b>Review page.</b><br>You can read earlier choices here. Go to the latest page to keep playing.</div>`:''}
    ${p.previousChoice?`<div class="previousChoice"><b>Your previous choice</b><br>${esc(p.previousChoice)}</div>`:''}
    ${p.feedback?`<div class="note ${p.danger?'dangerNote':''}">${p.feedback}</div>`:''}
    ${p.supportHtml||''}
    ${p.scenario?`<div class="bubble npcBubble">${speakerHtml()}${p.scenario}</div>`:''}`;
  const responses=$('responses'), dice=$('dice');
  if(responses)responses.style.display=isLatest?'block':'none';
  if(dice)dice.style.display=isLatest?'block':'none';
}
function goStoryPage(delta){state.pageIndex=(state.pageIndex||0)+delta;renderTurnPage()}
function goLatestStoryPage(){state.pageIndex=(state.turnPages||[]).length-1;renderTurnPage()}
function appendToStory(html){const s=$('story');if(!s)return;s.insertAdjacentHTML('beforeend',html);s.scrollTop=s.scrollHeight;}
function arcBeat(turn){
  return ['Opening problem','First complication','Clarify the facts','Policy or price pressure','Resource pressure','Possible workaround','Interruption or surprise','Final check','Last risk','Resolution setup'][(turn-1)%10];
}
function onlineRequiredHtml(message){
  return `<div class="note dangerNote"><b>AI support is temporarily unavailable.</b><br>Please pause here and let the researcher know. Your progress remains saved in this browser.</div>`;
}
function showOnlineRequired(message){
  state.apiOk=false;
  state.aiChoices=[];
  $('apiStatus').textContent='AI learning support temporarily unavailable';
  $('dice').innerHTML='';
  $('responses').innerHTML=onlineRequiredHtml(message);
}
function mockAiTurn(requiredWords,opts={}){
  const previous=String(opts.previousAnswer||state.lastPlayerAnswer||'').trim();
  const q=state.level.quests[state.char.id];
  const opening=!previous;
  const vocab=requiredWords.length?requiredWords:vocabForTurn(state.turn);
  const w0=vocab[0], w1=vocab[1]||vocab[0];
  const firstWord=word(w0), secondWord=word(w1);
  let npc='';
  if(opening){
    npc=sceneText();
  }else if(state.level.id==='airport'){
    npc=airportReaction(opts.choiceIndex,previous,state.turn-1)+`<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">${sceneText()}</div>`;
  }else if(state.level.id==='hotel'){
    const reaction=opts.skipImmediateReaction?'':hotelReaction(opts.choiceIndex,opts.selectedChoice,state.turn-1)+`<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">`;
    npc=opts.skipImmediateReaction?sceneText():reaction+sceneText()+'</div>';
  }else if(state.level.id==='airport'&&/\b(why|need my passport|passport again|already showed|wasting time)\b/i.test(previous)){
    npc=`I need your ${word('passport')} because airport rules require a name and ID check before I print the final ${word('boarding pass')}.<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">If you show it now, I can confirm your ${word('destination')} and keep your check-in moving.</div>`;
  }else if(state.level.id==='airport'&&state.turn===2){
    if(/\b(pay|paid|fee|card|cash)\b/i.test(previous)){
      npc=`Payment received, ${state.name}. Your ${word('luggage')} fee is handled, and check-in can continue.<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">Now I need your ${word('passport')} and ${word('boarding pass')} to finish check-in.</div>`;
    }else if(/\b(repack|carry-on|carry on|move|bag|luggage)\b/i.test(previous)){
      npc=`That works, ${state.name}. Your ${word('luggage')} is now under the limit.<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">Now I need your ${word('passport')} and ${word('boarding pass')} to finish check-in.</div>`;
    }else{
      npc=`I understand, ${state.name}. We still need to finish the ${word('luggage')} step before check-in can continue.<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">Please show your ${word('passport')} and ${word('boarding pass')} when you are ready.</div>`;
    }
  }else{
    npc=`${genericFreeTextReaction(previous)}<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">${sceneText()}</div>`;
  }
  state.aiChoices=[];
  const choices=mockChoicesForTurn();
  state.aiChoices=choices;
  $('apiStatus').textContent='Vocabulary role-play study · tutor and writing feedback online';
  logStudyEvent('mock_ai_prompt',{mode:opts.mode||'turn',level:state.level?.id,turn:state.turn,npc:plainText(npc),choices,targetVocab:vocab,quest:q.title});
  return npc;
}
function airportReaction(choiceIndex,previous,previousTurn){
  if(choiceIndex==null){
    return airportFreeTextReaction(previous,previousTurn);
  }
  const reactions=[
    [
      `Good idea. Please step aside and reorganise your bag. Moving items into your carry-on avoids the fee, but it will take a few minutes.`,
      `Thank you. Payment is accepted and your bag is checked in. We can continue with check-in now.`,
      `I understand. Let me check with a supervisor, but I cannot promise anything — please have a backup plan ready.`
    ],
    [
      `Of course, take your time. Check your pockets, your bag, and your phone — the boarding pass is sometimes saved in an airline app.`,
      `No problem. I can reprint one for you now. There is a small reprinting fee, but it is quick.`,
      `Let me try to scan that. If the barcode is clear enough, it should work.`
    ],
    [
      `Understood. You will board with the regular group. Please listen for your boarding group announcement.`,
      `Done. Priority boarding has been added. You will board before most other passengers.`,
      `I have checked, and I can offer it to you as a one-time courtesy. Please be ready to board early.`
    ],
    [
      `Good thinking. Please step aside and take a few minutes to reorganise your carry-on. Once it fits within the size limit, come back to the counter and we can continue.`,
      `Understood. Staff will take your carry-on now and tag it for the hold. You can collect it at baggage claim when you land.`,
      `That is your choice, but cabin crew may ask you to check it at the gate if it does not fit. Be prepared for that.`
    ],
    [
      `Of course. Walk along the main corridor and follow the signs for Terminal B. Turn left at the end, and Gate B7 will be on your right. It is about a 10-minute walk. If you need to move faster, there is a free airport ${word('shuttle')} near the entrance that stops at all gates.`,
      `There is a faster route, but it costs extra. You can take an express cart through the ${word('terminal')} — it reaches Gate B7 in about three minutes.`,
      `Gate B7 is quite far. Running is possible, but the ${word('security checkpoint')} is ahead and you will need to stop there first. Please watch your time.`
    ],
    [
      `Good. Take a minute to put your electronics and metal items in the tray. That should help you avoid being stopped at the scanner.`,
      `Yes. There is a paid fast-track lane. I can guide you there now, but there is an extra fee.`,
      `You can try, but if the scanner stops you, the officer will ask you to empty your pockets and check the items again.`
    ],
    [
      `Thank you for checking. You may pass through now.`,
      `Small travel-size containers are usually fine. Anything over 100ml must be removed.`,
      `I am sorry, but that bottle is too large. You cannot pay to keep it in your bag. You need to leave it here before you can continue, and you may need to buy a replacement after security.`
    ],
    [
      `Yes, the water station is just past the security exit on your right. You can refill any empty bottle there for free.`,
      `It is on the right side after the security area, near the food court. You will see it easily.`,
      `That works. Buying a drink near the gate is faster, but it will cost a little money.`
    ],
    [
      `Yes, please go straight to your gate now. This is the last call before the doors close.`,
      `I can add paid priority gate assistance. It costs extra, but it should help you board faster.`,
      `You may still make it, but it will be very close. Please hurry directly to Gate B7.`
    ],
    [
      `A crew member has found a space in the overhead bin two rows behind you. That is the closest available spot.`,
      `The crew member can gate-check your bag for a fee. You can pick it up after landing.`,
      `The crew member says all overhead bins are full. Your bag will need to be gate-checked and stored below.`
    ]
  ];
  return reactions[previousTurn-1]?.[choiceIndex]||`Okay, ${state.name}. I understand.`;
}
function airportFreeTextReaction(previous,previousTurn){
  const text=String(previous||'').toLowerCase();
  if(/\b(discount|cheaper|lower price|reduce|waive|free)\b/.test(text)){
    if(previousTurn===1)return `I cannot promise a discount, but I can check whether the airline allows a lower charge. If not, you can still move items or pay the fee.`;
    if(previousTurn===3)return `I cannot discount that service, but I can tell you whether the regular option is still safe for your flight.`;
    if(previousTurn===4)return `There is no discount for that bag service right now. The free option is to keep the bag with you, but it may create a problem later.`;
    return `I understand you want to save money. I can check the cheapest option, but some airport rules cannot be changed.`;
  }
  if(/\b(why|need|passport|id|document)\b/.test(text)&&previousTurn===2){
    return `I need to check your identity before I can continue. If your document matches the ticket, this should only take a moment.`;
  }
  if(/\b(repack|carry-on|carry on|move|take out|remove|suitcase|bag)\b/.test(text)&&previousTurn===1){
    return `Yes, you can step aside and move some items. That usually avoids the extra charge, but it takes a little time.`;
  }
  if(/\b(pay|card|cash|fee|charge)\b/.test(text)){
    return `Okay, I can process the payment and keep the line moving. Please stay here while I update the record.`;
  }
  if(/\b(help|please|could you|can you|sorry|thank you)\b/.test(text)){
    return `Thank you for asking politely. I can help, but we still need to follow the airport rule for this step.`;
  }
  if(/\b(no|not|don't|dont|refuse|won't|wont)\b/.test(text)){
    return `I understand, but refusing this step will slow things down. You need to choose a solution before we can continue.`;
  }
  return freeChatRedirectMessage();
}
function hotelFreeTextReaction(previous,previousTurn){
  const text=String(previous||'').toLowerCase();
  if(/\b(discount|cheaper|lower price|reduce|waive|free)\b/.test(text)){
    if(previousTurn===2)return `I can check whether a free upgrade is possible, but it depends on room availability and hotel policy.`;
    if(previousTurn===3)return `I understand you want to avoid the fee. I can check, but early check-in is not always free.`;
    if(previousTurn===9)return `I can check whether late check-out can be free, but I may need manager approval.`;
    return `I can look for the lowest-cost option, but some hotel charges cannot be removed.`;
  }
  if(/\b(why|need|deposit|credit card|card|hold)\b/.test(text)){
    return `The deposit is a temporary hold for possible extra charges, such as room service or the mini-bar. If nothing is used, it should be released later.`;
  }
  if(/\b(reservation|booking|confirmation|number|id)\b/.test(text)){
    return `Yes, that information can help me find the booking faster. A confirmation number or ID is usually the best next step.`;
  }
  if(/\b(noise|quiet|sleep|room change|floor)\b/.test(text)){
    return `I understand. A quiet room matters, especially when you are tired. I can check whether a room change is possible.`;
  }
  if(/\b(help|please|could you|can you|sorry|thank you)\b/.test(text)){
    return `Thank you for asking politely. I can help, but we still need to follow the hotel process.`;
  }
  if(/\b(no|not|don't|dont|refuse|won't|wont)\b/.test(text)){
    return `I understand you are frustrated, but refusing this step may slow down check-in. Let us choose the best option.`;
  }
  return freeChatRedirectMessage();
}
function genericFreeTextReaction(previous){
  const text=String(previous||'').toLowerCase();
  if(/\b(discount|cheaper|lower price|reduce|waive|free)\b/.test(text))return `I understand you want a cheaper option. I can check what is possible, but I still need to follow the rule for this situation.`;
  if(/\b(why|how|what|mean|explain)\b/.test(text))return `Good question. Let me explain it simply before we continue.`;
  if(/\b(help|please|could you|can you|sorry|thank you)\b/.test(text))return `Thank you for asking politely. I can help with the next step.`;
  if(/\b(no|not|don't|dont|refuse|won't|wont)\b/.test(text))return `I understand, but refusing this step may make the situation harder. Let us choose the next best option.`;
  return freeChatRedirectMessage();
}
function mockChoicesForTurn(){
  return groupFallbackChoices().map((choice,i)=>{
    const built=buildChoice(choice,i);
    return {
      text:built.text,money:built.money,time:built.time,stress:built.stress,xp:built.xp,reason:built.why,
      risky:built.risky,dice:built.dice,odds:built.odds,successRolls:built.successRolls,
      successReaction:built.successReaction,failReaction:built.failReaction,
      success:built.success,failure:built.failure
    };
  });
}
async function apiStory(requiredWords,opts={}){
  if(DEV_MODE)return mockAiTurn(requiredWords,opts);
  try{
    const q=state.level.quests[state.char.id];
    const res=await fetch(TURN_API_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        playerName:state.name,
        difficulty:state.difficulty,
        character:state.char.name,
        characterRole:state.char.role,
        characterChallenge:state.char.challenge,
        location:state.level.name,
        npc:state.level.npc,
        questTitle:q.title,
        questSetup:q.setup,
        questGoal:q.goal,
        urgency:q.clock,
        turn:state.turn,
        totalTurns:TOTAL_TURNS,
        arcBeat:arcBeat(state.turn),
        playerAnswer:opts.previousAnswer!==undefined?opts.previousAnswer:state.lastPlayerAnswer,
        selectedChoice:opts.selectedChoice||null,
        selectedChoiceIndex:opts.choiceIndex ?? null,
        mode:opts.mode||'turn',
        resources:{money:Math.round(state.money),time:Math.round(state.time),stress:Math.round(state.stress)},
        danger:{money:levelRules().dangerMoney,time:levelRules().dangerTime,stress:levelRules().dangerStress},
        vocab:requiredWords,
        levelVocab:state.level.vocab,
        storyHistory:state.storyHistory.slice(-8)
      })
    });
    if(!res.ok){
      const err=await res.json().catch(()=>({}));
      throw new Error(err.error||'ChatGPT API unavailable');
    }
    const data=await res.json();
    state.aiChoices=Array.isArray(data.choices)?data.choices.slice(0,3):[];
    state.apiOk=true;$('apiStatus').textContent='Level-based English quests · AI support online';
    logStudyEvent('ai_prompt',{mode:opts.mode||'turn',level:state.level?.id,turn:state.turn,npc:data.npc||data.story||'',choices:state.aiChoices,targetVocab:requiredWords});
    return renderGeneratedText(data.npc||data.story,requiredWords);
  }catch(e){
    const message=e.message||'ChatGPT API unavailable';
    logStudyEvent('api_unavailable',{message,mode:opts.mode||'turn',level:state.level?.id,turn:state.turn});
    showOnlineRequired(message);
    return null;
  }
}
function vocabForTurn(turn){
  if(state.level?.id==='airport'){
    return [
      ['overweight fee'],
      ['boarding pass'],
      ['priority boarding'],
      ['carry-on','overhead bin'],
      ['gate'],
      ['security checkpoint'],
      ['liquids'],
      ['water station'],
      ['final boarding call'],
      ['overhead bin','flight attendant']
    ][(turn-1)%10];
  }
  const v=state.level.vocab;
  const pairs=[[0,1],[2,3],[4,5],[6,7],[8,9],[0,2],[1,3],[4,6],[5,7],[8,9]];
  return pairs[(turn-1)%pairs.length].map(i=>v[i]);
}
function sceneText(){
  const t=state.turn,n=state.name;
  const words=vocabForTurn(t).map(w=>word(w));
  const line={
    airport:[
      `Your suitcase is over the weight limit. You can pay an ${word('overweight fee')} or move some items into your carry-on.`,
      `Do you have your ${word('boarding pass')}? This is the document that allows you to board the plane — the staff scan it before you walk through the gate. If you cannot find it right now, please do not worry. There are other options we can try together.`,
      `There is an option called ${word('priority boarding')}. It lets you get on the plane earlier than most other passengers, so you have more time to find your seat and store your bag.`,
      `Your ${word('carry-on')} looks very full. If it is too large for the ${word('overhead bin')}, you may need to check it in. Please decide what you would like to do.`,
      `Your ${word('gate')} is B7. Gates can be far from the check-in area, so please make sure you allow enough time to get there.`,
      `You are now at the ${word('security checkpoint')}. Please take your ${word('electronics')} out of your bag and place them in a separate tray. Remove your belt or jacket if you have any ${word('metal items')}. The officer will guide you through.`,
      `Please check your bag for ${word('liquids')}. Bottles over 100ml are not allowed through security. If you have a large bottle, you will need to remove it now.`,
      `After this area, there is a ${word('water station')}. You can use it to refill an empty bottle for free before your flight.`,
      `The ${word('final boarding call')} is starting soon. This is the last announcement before the plane doors close. You need to move quickly and stay calm.`,
      `The ${word('overhead bin')} near your seat is full. A ${word('flight attendant')} is standing nearby and can help you find another space.`
    ],
    hotel:[
      `Welcome. May I have your ${word('reservation')} name or ${word('confirmation number')}?<div class="small" style="margin-top:8px">You give your name, but the agent cannot find your ${word('booking')} at the ${word('front desk')}.</div>`,
      `I see your ${word('reservation')} is for a standard room with a ${word('single bed')}. We do have a more comfortable ${word('double bed')} room, but it will take a few minutes to prepare. We also have a ${word('suite')} available tonight as a paid ${word('upgrade')}. What would you like to do?`,
      `Your room is not ready for ${word('early check-in')} yet. Check-in time is 3 PM. You are welcome to wait in the ${word('lobby')}.`,
      `We require a $100 ${word('deposit')} for ${word('incidental charges')} like the ${word('mini-bar')} or room damage. I will need a ${word('credit card')} for the hold.`,
      `Our ${word('bellhop')} can take your bags to the room, or you can use a free ${word('luggage cart')} by the elevator.`,
      `Basic Wi-Fi is free, but it is a bit slow. ${word('premium Wi-Fi')} is $20 per day. The ${word('gym')} and ${word('pool')} are ${word('complimentary')}.`,
      `I am sorry, but we have had a ${word('noise complaint')} about the room above you. We can either move you to another room or send ${word('housekeeping')} to check the ${word('floor')}.`,
      `Breakfast options: ${word('breakfast buffet')} is $28, ${word('continental breakfast')} is $15, or ${word('room service')} has a $5 delivery charge plus food cost.`,
      `${word('check-out time')} is 11 AM. Would you like a ${word('late check-out')} or an ${word('extension')}?`,
      `Here is your ${word('final bill')}. Please review the ${word('incidental charges')}.<div class="small" style="margin-top:8px">You see a $15 ${word('mini-bar')} charge you never used.</div>`
    ],
    market:[`Hello ${n}, this is a good ${words[0]}, but please check the ${words[1]}. What are you looking for?`,`${n}, another ${words[0]} has a better ${words[1]} if you decide now. Do you want to see it?`,`Look here, ${n}. A ${words[0]} shopper found ${words[1]} items at another table. Should I show you?`,`${n}, I can change the ${words[0]} at the next ${words[1]}. What price works for you?`,`This ${words[0]} has better ${words[1]}, ${n}, but it costs more. Is quality or price more important?`,`${n}, this ${words[0]} includes a small ${words[1]} if you buy quickly. Do you want it?`,`A ${words[0]} customer says this gift is not ${words[1]} enough, ${n}. Do you agree?`,`${n}, is the ${words[0]} at this ${words[1]} acceptable, or do you want another option?`,`Another buyer wants the same ${words[0]}, ${n}. It may not stay ${words[1]} for long. What do you do?`,`Final choice, ${n}: agree on the ${words[0]} or leave this ${words[1]}. What is your answer?`],
    cafe:[`Hi ${n}, would you like to ${words[0]} from the ${words[1]} now, or wait for your friend?`,`${n}, the ${words[0]} is large, but your ${words[1]} may be lighter. What sounds better?`,`This drink has a secret ${words[0]}, ${n}, and a ${words[1]} says it is popular. Do you want to try it?`,`I can wait, ${n}. Choose a ${words[0]}, or ask me about ${words[1]}. What would help?`,`${n}, please ${words[0]} first, then I can check the ${words[1]}. What do you want?`,`Your guest likes the ${words[0]}, ${n}, but their ${words[1]} is different. What should I bring?`,`The main ${words[0]} is ready, ${n}, and a ${words[1]} nearby recommends it. Do you want one?`,`The conversation is slowing, ${n}. You could mention the ${words[0]} and ask about their ${words[1]}. What will you say?`,`Sorry ${n}, I brought the wrong ${words[0]}, and your guest is looking at the ${words[1]}. How should I fix it?`,`Final moment, ${n}: confirm the ${words[0]} and suggest sharing ${words[1]}. What is your answer?`]
  };
  const base=line[state.level.id][(t-1)%10];
  return adaptDifficultyText(previousVocabBridge(t)+base+scenarioVocabRepetition(t));
}
function previousVocabBridge(turn){
  if(turn<=1)return '';
  if(state.level?.id==='airport'){
    const bridges=[
      '',
      `The ${word('overweight fee')} is settled for now, and the officer moves to your documents.`,
      `The officer finishes checking your ${word('boarding pass')} and points you toward the boarding options.`,
      `You decide about ${word('priority boarding')}, then the officer looks at the size of your bag.`,
      `Your ${word('carry-on')} is handled for now, but you still need to reach the gate on time.`,
      `You know the ${word('gate')} number now, and the next stop is security.`,
      `You clear the ${word('security checkpoint')}, but the officer notices one more thing in your bag.`,
      `After sorting out the ${word('liquids')}, you are past security and feeling thirsty.`,
      `You leave the ${word('water station')} area and hear an announcement from the gate.`,
      `After the ${word('final boarding call')}, you make it onto the plane, but your bag still needs a place.`
    ];
    return `<div class="small" style="margin-bottom:10px;color:var(--muted)">${bridges[(turn-1)%10]}</div>`;
  }
  if(state.level?.id==='hotel'){
    const bridges=[
      '',
      `The ${word('reservation')} finally appears on the screen, and the agent checks your room type.`,
      `The agent notes your ${word('upgrade')} choice and checks whether a room is ready now.`,
      `The ${word('early check-in')} question is settled, and the agent asks for a card.`,
      `After recording the ${word('deposit')}, the agent looks at your bags beside the desk.`,
      `Once the ${word('bellhop')} question is settled, the agent explains the hotel services.`,
      `The ${word('premium Wi-Fi')} choice is handled, and you head upstairs to the room.`,
      `After the ${word('noise complaint')}, the agent checks what breakfast option you want.`,
      `Breakfast is settled, so the agent explains tomorrow's ${word('check-out time')}.`,
      `After the ${word('late check-out')} decision, the agent prints your bill.`
    ];
    return `<div class="small" style="margin-bottom:10px;color:var(--muted)">${bridges[(turn-1)%10]}</div>`;
  }
  return '';
}
function scenarioVocabRepetition(turn){
  if(state.level?.id==='airport'){
    if(turn===1)return '';
    const lines=[
      `The officer points to a side table where passengers can reorganize bags before paying the ${word('overweight fee')}.`,
      `If your phone battery dies, losing the ${word('boarding pass')} again could slow you down at the gate.`,
      `The agent shows you the regular line and the ${word('priority boarding')} lane, so the cost now has a clear benefit.`,
      `A staff member holds up a sizing frame for the ${word('carry-on')} and points toward the plane entrance.`,
      `There is a free shuttle nearby, but the express cart reaches the ${word('gate')} faster for a fee.`,
      `A passenger ahead forgot to remove ${word('electronics')}, and their bag is now waiting for extra inspection.`,
      `You remember seeing a small shop after security where travel-size ${word('liquids')} are sold.`,
      `The empty bottle in your bag is useful now because the ${word('water station')} is just past the food court.`,
      `People around you stand up when they hear ${word('final boarding call')}, so the line suddenly starts moving.`,
      `The ${word('flight attendant')} asks passengers to keep the aisle clear while bags are being moved.`
    ];
    return `<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">${lines[(turn-1)%10]}</div>`;
  }
  if(state.level?.id==='hotel'){
    const lines=[
      `The agent asks whether the ${word('confirmation number')} is in your email, your booking app, or a message from the hotel.`,
      `The agent turns the screen toward you so you can compare the ${word('double bed')} room and the ${word('suite')} price.`,
      `Several guests are waiting in the ${word('lobby')}, so the early room option starts to feel more valuable.`,
      `The agent explains that the ${word('deposit')} will disappear from your card later if there are no extra charges.`,
      `Your bags are heavy enough that the ${word('bellhop')} notices you looking at the elevator.`,
      `The agent gives you a small card with the ${word('premium Wi-Fi')} code and the free facilities listed below it.`,
      `The hallway is quiet now, but the earlier ${word('noise complaint')} is already written in your file.`,
      `The restaurant line is short, but ${word('room service')} would let you stay upstairs and rest.`,
      `The agent checks tomorrow's schedule before offering the ${word('late check-out')} option.`,
      `The printer starts producing the ${word('final bill')}, and the agent asks you to check each charge before paying.`
    ];
    return `<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">${lines[(turn-1)%10]}</div>`;
  }
  return '';
}
function adaptDifficultyText(text){
  if(state.difficulty==='Easy'){
    return text
      .replace(/How would you like to handle it\?/g,'What do you want to do?')
      .replace(/Which city are you flying to\?/g,'What city are you going to?')
      .replace(/Do you want me to confirm the new time\?/g,'Should I check the new time?')
      .replace(/The normal line is slow, but fast-track costs extra\. What do you choose\?/g,'The normal line is slow. Fast-track costs money. What do you choose?');
  }
  if(state.difficulty==='Hard'){
    return text;
  }
  return text;
}
function npcIcon(){
  return {airport:'🛂',hotel:'🛎️',market:'🧺',cafe:'☕'}[state.level?.id]||'💬';
}
function speakerHtml(){
  return `<div class="speaker"><span class="npcIcon">${npcIcon()}</span><span>${state.level.npc}</span></div>`;
}
function offlineReaction(text){
  const lower=text.toLowerCase();
  const words=vocabForTurn(state.turn).map(w=>word(w));
  const noMoney=/\b(broke|no money|not enough money|can't pay|cannot pay|cant pay|too expensive|free|let me go|waive|waiver)\b/.test(lower);
  if(noMoney&&state.level.id==='airport'){
    return `No, ${state.name}, I cannot just let you go while the ${words[0]} problem is unresolved. You must pay the fee, repack your ${words[1]}, or ask a supervisor for an exception.`;
  }
  if(state.level.id==='airport'&&state.turn===1&&/\b(repack|carry-on|carry on|move some|move things|open my bag|move items)\b/.test(lower)){
    return `Yes, ${state.name}, you can repack your ${word('luggage')} here. Once the bag is under the limit, I can continue checking your ${word('boarding pass')}.`;
  }
  if(state.level.id==='airport'&&state.turn===1&&/\b(pay|paid|card|cash|fee)\b/.test(lower)){
    return `Thank you, ${state.name}. The ${word('luggage')} fee is paid, so I can continue your ${word('check-in')} now.`;
  }
  if(noMoney&&state.level.id==='hotel'){
    return `I understand, ${state.name}, but I cannot give a room for free without a valid ${words[0]}. Show proof of payment, accept a cheaper option, or wait for the manager.`;
  }
  if(noMoney&&state.level.id==='market'){
    return `I understand your budget, ${state.name}, but I cannot give it for free. Choose a cheaper ${words[0]}, ask for a small ${words[1]}, or walk away politely.`;
  }
  if(noMoney&&state.level.id==='cafe'){
    return `I understand, ${state.name}, but you still need to ${words[0]} something if you want to use the table. You can choose a cheaper item from the ${words[1]}.`;
  }
  if(/\b(home|go home|leave|quit|stop)\b/.test(lower)){
    return freeChatRedirectMessage();
  }
  if(/\b(chicken|food|eat|hungry|drink|coffee)\b/.test(lower)){
    return freeChatRedirectMessage();
  }
  if(/\b(bitch|fuck|shit|stupid|idiot|shut up|go away|hate you)\b/i.test(lower)){
    return `This is not really relevant to ${esc(state.level?.name||'this scenario')}. Please use polite language and choose option A, B, or C, or ask about the words in this turn.`;
  }
  return freeChatRedirectMessage();
}
function fallbackAfterAnswer(text,choiceIndex,choice,previousTurn){
  if(state.level.id==='airport'&&previousTurn===1){
    if(choiceIndex===1||(choice&&(choice.money||0)<0)||/\b(pay|paid|fee|card|cash)\b/i.test(text)){
      return `Payment received, ${state.name}. Your ${word('luggage')} fee is handled, and check-in can continue.<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">Now I need your ${word('passport')} and ${word('boarding pass')} to finish check-in.</div>`;
    }
    if(choiceIndex===0||/\b(repack|carry-on|carry on|move some|move things|open my bag|move items)\b/i.test(text)){
      return `That works, ${state.name}. Your ${word('luggage')} is now under the limit.<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">Now I need your ${word('passport')} and ${word('boarding pass')} to finish check-in.</div>`;
    }
  }
  const currentTurn=state.turn;
  state.turn=previousTurn;
  const reaction=choice?choiceOutcomeReaction(choiceIndex,choice):offlineReaction(text);
  state.turn=currentTurn;
  return `${reaction}<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">${sceneText()}</div>`;
}
function choiceOutcomeReaction(i,choice){
  const words=vocabForTurn(state.turn).map(w=>word(w));
  if(state.level.id==='hotel')return hotelReaction(i,choice);
  if(state.level.id==='airport'&&state.turn===1&&i===1){
    return `Okay, thank you for paying the fee, ${state.name}. Your ${words[1]} is accepted now, so we can move to the next airport problem.`;
  }
  if(state.level.id==='airport'&&state.turn===1&&i===0){
    return `Okay, ${state.name}, you can repack your ${words[1]} instead of paying the full fee. That saves money, but it uses important time.`;
  }
  if(state.level.id==='airport'&&state.turn===1&&i===2){
    return `No, ${state.name}, I cannot let you go to the ${words[0]} while the bag problem is unresolved. You must pay, repack, or ask a supervisor.`;
  }
  if(state.level.id==='airport'&&state.turn===3&&i===0){
    return `Okay, ${state.name}, take one minute to find your ${words[0]}. I will keep your place, but the ${words[1]} is getting closer.`;
  }
  if(state.level.id==='airport'&&state.turn===3&&i===1){
    return `Okay, thank you for paying the reprint fee, ${state.name}. Your ${words[0]} record is fixed now.`;
  }
  if(state.level.id==='airport'&&state.turn===4){
    return `Good, ${state.name}, your ${words[0]} is checked. Now we need to get you through the ${words[1]} safely.`;
  }
  if(choice.money<0&&choice.time>=-6){
    return `Okay, thank you for the payment, ${state.name}. That solves this step quickly, so now we can deal with the next problem.`;
  }
  if(choice.money<0){
    return `Okay, ${state.name}, the paid option is accepted. It costs money, but it helps us move faster.`;
  }
  if(choice.time<=-18&&choice.stress>0){
    return `Okay, ${state.name}, we can do that carefully. It saves money, but it will take time and add pressure.`;
  }
  if(choice.stress>=20){
    return `I understand, ${state.name}, but that response makes the situation harder. We still need a practical solution.`;
  }
  return `Okay, ${state.name}, that is clear. This step is handled, so let's move to the next part.`;
}
function hotelReaction(i,choice,turnOverride){
  const turn=turnOverride||state.turn, result=choice?.randomResult;
  const lines=[
    ['No problem. Take your time. I will keep searching on my end. After a moment, you find it and the reservation is located.','I can call booking support now. There is a $20 service fee, but it may help us find the booking faster. Ah, they found it under a different spelling.','Ah, here it is. It was filed under a different spelling. I have found it. Let me check you in.','I searched, but nothing came up. You will need to give me the confirmation number. Okay, found it. That took a few extra minutes.'],
    ['Let me check. Yes, we have a double bed available. No extra charge, but it will be about ten minutes to prepare.','Certainly. The suite upgrade is $80 for the night. I will add that to your bill.','Let me check with the manager. Yes, because your room type was not ready, we can offer a complimentary upgrade tonight.','I checked with the manager, but I am sorry. A suite is available only as a paid upgrade tonight.'],
    ['Sounds good. There is complimentary coffee near the fireplace. I will call you when it is ready.','It is $30. I can have the room ready in about ten minutes. I will take your payment now.','That is a fair trade. Yes, I can approve that: early check-in now, and you can check out at 1 PM tomorrow at no extra charge.'],
    ['Thank you. I will place the hold now. It will be released at check-out if there are no charges.','Yes, I can do that. I will disable the mini-bar key, and your deposit will be $50. Just sign this form.','The manager made a one-time exception. No deposit required.','Sorry, the manager said no. You will still need to provide a $100 deposit. That took a few minutes.'],
    ['Sure, it is right over there. Just bring it back when you are done.','Most guests tip $3 per bag. With your two bags, that would be $6 total. He will meet you upstairs.','He is new and wants to make a good impression. He agreed to help you at no charge.','He politely declined. You ended up carrying them yourself, and it took longer because you waited.'],
    ['Sure. Connect to HotelGuest and accept the terms. It works for email and web browsing, but video calls might lag.','Done. You will receive a code by text. It is very reliable for video calls and large downloads.','I wish I could, but we are not allowed to waive the fee. I am sorry. The basic Wi-Fi is your only free option.'],
    ['Of course. If it continues, just call the front desk. I have added a note.','I can do that. There is a room on the 8th floor that is very quiet. Here is your new key. No extra charge.','Yes, a quiet suite is available as a paid upgrade. I can move you there tonight.'],
    ['Great. Continental is served from 6 to 10 AM in the lobby. I will add $15 to your bill.','Let me check. Yes, your booking includes the buffet breakfast. No extra charge. Enjoy.','Sure. That will be $22 for the meal plus a $5 delivery fee, so $27 total. It will arrive in about 20 minutes.'],
    ['Understood. Please leave your key at the front desk. Have a safe trip.','That will be $45. I have added it to your bill. You can stay in the room until 1 PM.','Yes, your gold status gives you a free extension until noon. I have noted it.','I checked, but you are not in our loyalty program. The fee would apply if you want late check-out.'],
    ['I apologize. That was left by the previous guest. I have removed it. Here is your corrected bill.','You are welcome. I will email you a receipt. Have a great day.','I am very sorry. Let me get my manager. You are right: we found two mistakes. You will receive a $30 refund. Sorry for the wait.']
  ];
  if(i===2&&lines[turn-1].length>3)return result==='success'?lines[turn-1][2]:lines[turn-1][3];
  return lines[turn-1][i]||'This hotel step is handled.';
}
async function immediateNpcReaction(text,choiceIndex,choice){
  if(choice)return choiceOutcomeReaction(choiceIndex,choice);
  const requiredWords=vocabForTurn(state.turn);
  const apiText=await apiStory(requiredWords,{previousAnswer:text,mode:'immediate_reaction'});
  return apiText;
}
async function nextTurn(){
  state.turn++;$('progress').style.width=(state.turn/TOTAL_TURNS*100)+'%';
  const requiredWords=vocabForTurn(state.turn);
  $('responses').innerHTML=`<div class="small" style="text-align:center;padding:14px;color:var(--muted)">⏳ <em>Preparing situation ${state.turn}…</em></div>`;
  const apiText=await apiStory(requiredWords);
  if(!apiText)return;
  const scenario=apiText;
  rememberBeat(scenario);
  addTurnPage({turn:state.turn,scenario});
  if(state.turn===4&&state.level.id!=='hotel'){
    $('responses').innerHTML=storyDicePromptHtml();
    $('dice').innerHTML='';
  }else{
    $('responses').innerHTML=choicePanelHtml('Your turn: choose a response');
    $('dice').innerHTML='';
  }
}
function turnBlockHtml(scenario,title){
  return `<div class="bubble npcBubble"><div class="tag" style="margin-bottom:8px">Turn ${state.turn} of ${TOTAL_TURNS}</div>${speakerHtml()}${scenario}</div>`+choicePanelHtml(title);
}
function turnBlockHtmlWithDice(scenario){
  return `<div class="bubble npcBubble"><div class="tag" style="margin-bottom:8px">Turn ${state.turn} of ${TOTAL_TURNS}</div>${speakerHtml()}${scenario}</div>`+storyDicePromptHtml();
}
function combinedTurnBlockHtml(reaction,scenario,title){
  return `<div class="bubble npcBubble">${speakerHtml()}${reaction}<div style="border-top:1px solid var(--line);margin:12px 0;padding-top:12px">${scenario}</div></div>`+choicePanelHtml(title);
}
function groupChoices(){
  if(Array.isArray(state.aiChoices)&&state.aiChoices.length>=3&&typeof state.aiChoices[0]==='object'){
    return state.aiChoices.slice(0,3).map((choice,i)=>buildChoice(groupFallbackChoices()[i]||{},i));
  }
  return DEV_MODE?groupFallbackChoices().map(buildChoice):[];
}
function groupFallbackChoices(){
  if(state.level?.id==='hotel')return HOTEL_EFFECTS[state.turn-1]||HOTEL_EFFECTS[0]||[];
  return CHOICE_EFFECTS[state.level.id][state.char.id][state.turn-1]||CHOICE_EFFECTS[state.level.id][state.char.id][0]||[];
}
function formatEffect(c){
  const label=resourceTwoName();
  const unit=resourceTwoUnit();
  if(c.dice)return `Risk Roll · ${c.odds||''} · resources and XP depend on the roll`;
  if(c.risky)return `🎲 50/50 random result · 💰 Money, ${label==='Patience'?'🧘':'⏰'} ${label}, 😰 Stress, and ⭐ XP depend on the roll`;
  return `💰 Money ${c.money<0?'-$':'$'}${Math.abs(c.money||0)} · ${label==='Patience'?'🧘':'⏰'} ${label} ${c.time>0?'+':''}${c.time}${unit} · 😰 Stress ${c.stress>0?'+':''}${c.stress}${c.note?' · '+esc(c.note):''}`;
}
const AIRPORT_DICE_CHOICES={
  1:{odds:'50/50 — roll 1, 2, or 3 to succeed',successRolls:[1,2,3],
    successReaction:"The supervisor made an exception — just this once. You're all set.",
    failReaction:"I'm sorry, my supervisor said no. Because we already spent time checking, the fastest way to stay on schedule is to pay the overweight fee now and continue to the gate.",
    success:{money:0,time:0,stress:-15,xp:25,note:'fee waived'},
    failure:{money:-60,time:-18,stress:+18,xp:8,note:'fee paid after delay'}},
  5:{odds:'50/50 — roll 1, 2, or 3 to succeed',successRolls:[1,2,3],
    successReaction:"Wow, you're fast! You made it through security quickly and got to B7 with time to spare.",
    failReaction:"Running isn't always faster — security slowed you down. You arrived breathless, but you're still here.",
    success:{money:0,time:+6,stress:-6,xp:25},
    failure:{money:0,time:-10,stress:+18,xp:8}},
  9:{odds:'50/50 — roll 1, 2, or 3 to succeed',successRolls:[1,2,3],
    successReaction:"You're very late, but go ahead to the front. The gate agent will scan you now. You've made it just in time.",
    failReaction:"I'm sorry, but I can't let you skip. Please go to the back of the line. The gate is now closing.",
    success:{money:0,time:+8,stress:-12,xp:30},
    failure:{money:0,time:0,stress:+60,xp:0,gameOver:true}}
};
const HOTEL_DICE_CHOICES={
  1:{odds:'50/50 — roll 1, 2, or 3 to succeed',successRolls:[1,2,3],
    successReaction:'Ah, here it is. It was filed under a different spelling. I have found it. Let me check you in.',
    failReaction:'I searched, but nothing came up. You will need to give me the confirmation number. Okay, found it. That took a few extra minutes.',
    success:{money:0,time:+8,stress:-10,xp:25},
    failure:{money:0,time:-10,stress:+12,xp:8}},
  2:{odds:'50/50 — roll 1, 2, or 3 to succeed',successRolls:[1,2,3],
    successReaction:'Let me check with the manager. Yes, because your room type was not ready, we can offer a complimentary upgrade tonight.',
    failReaction:'I checked with the manager, but I am sorry. A suite is available only as a paid upgrade tonight. Since you still want the better room, I can add the paid upgrade now.',
    success:{money:0,time:+8,stress:-8,xp:25},
    failure:{money:-80,time:-6,stress:+8,xp:8,note:'paid upgrade after refusal'}},
  4:{odds:'50/50 — roll 1, 2, or 3 to succeed',successRolls:[1,2,3],
    successReaction:'The manager made a one-time exception. No deposit required.',
    failReaction:'Sorry, the manager said no. You still need to provide the $100 deposit. That took a few minutes, but the hold is now placed so check-in can continue.',
    success:{money:0,time:0,stress:-10,xp:25},
    failure:{money:-100,time:-8,stress:+15,xp:8,note:'deposit hold after delay'}},
  5:{odds:'50/50 — roll 1, 2, or 3 to succeed',successRolls:[1,2,3],
    successReaction:'He is new and wants to make a good impression. He agreed to help you at no charge.',
    failReaction:'He politely declined. You ended up carrying them yourself, and it took longer because you waited.',
    success:{money:0,time:+10,stress:-8,xp:25},
    failure:{money:0,time:-8,stress:+12,xp:8}},
  9:{odds:'50/50 — roll 1, 2, or 3 to succeed',successRolls:[1,2,3],
    successReaction:'Yes, your gold status gives you a free extension until noon. I have noted it.',
    failReaction:'I checked, but you are not in our loyalty program. If you still want late check-out, the fee applies, and I can add it now.',
    success:{money:0,time:+30,stress:-6,xp:25},
    failure:{money:-45,time:+30,stress:+6,xp:8,note:'paid late check-out'}}
};
const REAL_CHOICES={
 airport:[
  ['Could I avoid the fee by moving a few things?','That is fine. I will pay the fee.','🎲 Could you waive the fee just this once?'],
  ['Could I take a moment to find my boarding pass?','Could you print a new boarding pass for me?','Can you scan the screenshot on my phone?'],
  ['No, thank you. I do not need it.','Yes, I would like to add priority boarding.','Is there any way I could get it for free?'],
  ['Could I make my carry-on smaller now?','I will send it with staff now to avoid trouble later.','I will keep it with me and hope it is fine.'],
  ['Could you show me where the gate is?','Is there a faster way to reach the gate?','🎲 I will run to the gate myself.'],
  ['I will spend a few minutes taking out my electronics and metal items so I do not get stopped later.','Is there a faster security lane or paid assistance I can use? I need to get through quickly.','I only have a few small metal items. Can I keep them in my pocket and remove them if the scanner stops me?'],
  ['I will remove my liquids now.','Could you explain which liquids are allowed?','I will keep them in my bag and risk an inspection.'],
  ['I will look for the water station after this.','Could you show me where the water station is?','I will buy a drink near the gate and keep moving.'],
  ['Is this the line for the final boarding call?','I will pay for priority gate assistance if it helps me board faster.','🎲 I am late — can I skip to the front?'],
  ['Could the flight attendant help me find overhead bin space?','I will gate-check my bag if the crew says there is no overhead bin space.','I will ask the flight attendant before using another overhead bin.']
 ],
 hotel:[
  ['I have my confirmation number on my phone. Let me pull it up.','Could you call the booking support line for me? I can pay the service fee if needed.','🎲 I am sure I booked it. Could you check under my phone number or email? Maybe it is under a different spelling?'],
  ['Would it be possible to get a double bed instead? I can wait.','Could I upgrade to a suite? I am happy to pay the difference.','I was really hoping for a suite. Is there any chance of a complimentary upgrade?'],
  ['I will wait in the lobby, thank you.','I would like to pay the early check-in fee. How much is it?','If I agree to a late check-out tomorrow, could you let me check in early for free?'],
  ['Here is my credit card. Please put the full $100 hold on it.','I will not be using the mini-bar. Could you lower the deposit to $50?','🎲 Could you ask your manager to waive the deposit? I have stayed here before.'],
  ['I will use the luggage cart. Thanks.','I will take the bellhop. What is the usual tip?','🎲 I am on a tight budget. Could he do it for free just this once?'],
  ['I will use the free Wi-Fi. Hopefully it is enough.','Please add premium Wi-Fi. I need fast internet.','I am a student on a budget. Could you waive the premium fee just for today?'],
  ['I will wait a bit to see if it stops. Can you note it in my file?','Please move me to a quiet room on another floor, if possible. I would prefer no charge.','Would a paid upgrade to a quiet suite be available tonight?'],
  ['I will take the continental breakfast.','Is breakfast included in my room rate?','I will order room service: a club sandwich and coffee. Please charge it to my room.'],
  ['No thanks, I will check out at 11 AM.','I would like to pay for late check-out until 1 PM.','🎲 I am a loyalty member. Could I get a free late check-out?'],
  ['Excuse me, I did not use the mini-bar. Could you remove that charge?','Everything looks correct. Thank you.','This bill has multiple errors. Could you please audit the whole thing?']
 ],
 market:[
  ['Could you show me a souvenir under ten dollars?','I need something local and light. What do you recommend?','Everything is too expensive. Show me the cheapest thing.'],
  ['Is this handmade or from a factory?','The quality looks good. Can you tell me who made it?','I do not care who made it. I only want a low price.'],
  ['Could you recommend a smaller gift from this stall?','I like this one. Is it local to this area?','I saw something cheaper over there, so lower the price now.'],
  ['What is your best price if I buy it today?','Could you give me a small discount? I am on a tight budget.','I will only pay half. Take it or leave it.'],
  ['Is the fresh fruit safe to take on a flight?','I need a souvenir, not food. Can you show me something easier to pack?','I will buy it now and worry about the airport later.'],
  ['Could you wrap it so it does not break?','If I pay this price, can you include a small bag?','You should give me the bag for free.'],
  ['Can I compare the quality with that other item?','This looks better. Why is the price higher?','They look the same, so I will pay the cheaper price only.'],
  ['Is this vendor your family business?','I want to support a local stall. Which item is most traditional?','I do not need the story. Just tell me the discount.'],
  ['Can you hold this for two minutes while I check my budget?','I am ready to buy if the final price is clear.','If another customer wants it, I will just grab it now.'],
  ['Thank you. Can I have the receipt and the souvenir in a small bag?','This works for my gift. I will take it at that price.','Fine, but hurry. I do not want to talk anymore.']
 ],
 cafe:[
  ['Could I see the menu before I order?','What specialty do you recommend for someone new here?','Just give me whatever is fastest.'],
  ['Is the portion big enough for two people?','I prefer something light. Which dessert is not too sweet?','I do not care about the portion. I am hungry.'],
  ['What ingredient is in this drink?','I have a food preference. Can you tell me what is inside?','If it tastes bad, I will send it back.'],
  ['Is there a quiet table for a short conversation?','I like the atmosphere here. Could we sit near the window?','This place is too loud. Move someone else.'],
  ['Can I order now and wait for my friend?','My friend is a regular here. Do you know what they usually order?','I need the table now, even if I order later.'],
  ['Could you recommend something easy to share?','My preference is not too sweet. What would you choose?','Just bring the most popular thing. I do not want details.'],
  ['Does this dessert have any unusual ingredient?','That specialty sounds good. Can I order one to share?','I changed my mind again. Cancel it and start over.'],
  ['Can we keep talking here for a few more minutes?','The atmosphere is comfortable. Would it be okay if we stay?','We will stay as long as we want.'],
  ['I think this is the wrong order. Could you check it, please?','No problem. I can wait if you need to fix the order.','This is wrong. I want a new one immediately.'],
  ['Thank you. Could we pay now and maybe come back next week?','This was helpful. Would you like to meet here again?','I am done. I will leave now.']
 ]
};
const HOTEL_EFFECTS=[
  [{money:0,time:-10,stress:+5,xp:10,note:'find confirmation'},{money:-20,time:+8,stress:-4,xp:12,note:'support call fee'},{risky:true,dice:true,xp:0}],
  [{money:0,time:-12,stress:0,xp:10,note:'wait for room'},{money:-80,time:+6,stress:-8,xp:12,note:'suite upgrade'},{risky:true,dice:true,xp:0}],
  [{money:0,time:-15,stress:+4,xp:8,note:'wait in lobby'},{money:-30,time:+5,stress:-6,xp:12,note:'early check-in fee'},{money:0,time:+8,stress:-5,xp:14,note:'trade late check-out'}],
  [{money:-100,time:-5,stress:0,xp:10,note:'temporary hold'},{money:-50,time:-6,stress:-3,xp:14,note:'reduced hold discussion'},{risky:true,dice:true,xp:0}],
  [{money:0,time:-8,stress:+2,xp:10,note:'self-carry'},{money:-6,time:+8,stress:-4,xp:12,note:'bellhop tip'},{risky:true,dice:true,xp:0}],
  [{money:0,time:-6,stress:+3,xp:10,note:'free Wi-Fi may be slow'},{money:-20,time:+10,stress:-5,xp:12,note:'premium Wi-Fi'},{money:0,time:-8,stress:+6,xp:8,note:'ask to waive fee'}],
  [{money:0,time:-10,stress:+10,xp:8,note:'wait through noise'},{money:0,time:-15,stress:-8,xp:14,note:'room change'},{money:-90,time:+8,stress:-10,xp:12,note:'quiet suite upgrade'}],
  [{money:-15,time:-6,stress:-2,xp:10,note:'quick buffet'},{money:0,time:-6,stress:-4,xp:12,note:'check inclusion'},{money:-27,time:-10,stress:-2,xp:10,note:'room service'}],
  [{money:0,time:-5,stress:0,xp:10,note:'standard checkout'},{money:-45,time:+60,stress:-5,xp:12,note:'late check-out fee'},{risky:true,dice:true,xp:0}],
  [{money:+15,time:-8,stress:-5,xp:14,note:'remove overcharge'},{money:-15,time:0,stress:+6,xp:8,note:'pay mistaken charge'},{money:+30,time:-12,stress:-6,xp:16,note:'full bill correction'}]
];
function realEffectFor(i){
  const pro=state.char.id==='professional', level=state.level.id, turn=state.turn;
  if(level==='airport'){
    const dc=AIRPORT_DICE_CHOICES;
    const airportEffects=[
      [{money:0,time:-12,stress:+10,xp:15,note:'repack to avoid fee'},{money:-60,time:+8,stress:-5,xp:20,note:'pay fee and keep moving'},{risky:true,dice:true,...dc[1],money:0,time:0,stress:0,xp:0}],
      [{money:0,time:-8,stress:+6,xp:12,note:'search time'},{money:-10,time:+8,stress:-8,xp:20,note:'quick reprint'},{money:0,time:-5,stress:+4,xp:15,note:'try screenshot'}],
      [{money:0,time:-5,stress:0,xp:10,note:'regular boarding'},{money:-25,time:+10,stress:-10,xp:20,note:'priority boarding fee'},{money:0,time:-4,stress:+8,xp:8,note:'staff check'}],
      [{money:0,time:-12,stress:+8,xp:15,note:'resize bag'},{money:-35,time:+10,stress:+4,xp:12,note:'check carry-on now'},{money:0,time:-10,stress:+15,xp:8,note:'may be stopped later'}],
      [{money:0,time:-6,stress:-8,xp:15,note:'ask directions'},{money:-15,time:+12,stress:-10,xp:20,note:'express cart'},{risky:true,dice:true,...dc[5],money:0,time:0,stress:0,xp:0}],
      [{money:0,time:-7,stress:-5,xp:20,note:'prepare tray'},{money:-18,time:+10,stress:-8,xp:15,note:'fast-track lane'},{money:0,time:-18,stress:+20,xp:5,note:'extra screening'}],
      [{money:0,time:-5,stress:0,xp:15,note:'follow liquid rule'},{money:0,time:-7,stress:-4,xp:12,note:'ask rule'},{money:-8,time:-18,stress:+24,xp:8,note:'item removed; buy replacement later'}],
      [{money:0,time:-5,stress:-6,xp:12,note:'free refill'},{money:0,time:-7,stress:-3,xp:10,note:'ask location'},{money:-6,time:+8,stress:+4,xp:8,note:'buy drink quickly'}],
      [{money:0,time:+6,stress:-4,xp:15,note:'join correct line'},{money:-20,time:+10,stress:-5,xp:20,note:'paid gate assistance'},{risky:true,dice:true,...dc[9],money:0,time:0,stress:0,xp:0}],
      [{money:0,time:-5,stress:0,xp:15,note:'ask crew'},{money:0,time:+6,stress:-6,xp:20,note:'gate-check if required'},{money:0,time:-8,stress:+15,xp:5,note:'crew may move bag'}]
    ];
    return airportEffects[turn-1]?.[i];
  }
  if(level==='hotel'){
    const hotelEffect=HOTEL_EFFECTS[turn-1]?.[i];
    if(i===2&&hotelEffect?.dice)return {risky:true,dice:true,...(HOTEL_DICE_CHOICES[turn]||{}),money:0,time:0,stress:0,xp:0};
    return hotelEffect;
  }
  const patterns={
    airport:[
      {money:0,time:-18,stress:+6,xp:20},
      {money:pro?-80:-25,time:+6,stress:-8,xp:25},
      {money:0,time:-12,stress:+24,xp:8}
    ],
    hotel:[
      {money:0,time:-14,stress:-4,xp:20},
      {money:pro?-120:-35,time:+8,stress:-10,xp:25},
      {money:0,time:-10,stress:+24,xp:8}
    ],
    market:[
      {money:0,time:-12,stress:-3,xp:20},
      {money:pro?-90:-10,time:+5,stress:-8,xp:25},
      {money:0,time:-8,stress:+22,xp:8}
    ],
    cafe:[
      {money:pro?-20:-6,time:-8,stress:-6,xp:20},
      {money:pro?-35:-8,time:+5,stress:-10,xp:25},
      {money:pro?-15:-5,time:-5,stress:+16,xp:8}
    ]
  };
  return patterns[level]?.[i];
}
function choiceTextFor(i,c){
  const ai=state.aiChoices[i];
  if(ai&&typeof ai==='object')return ai.text || fallbackChoiceText(i,c);
  return ai || adaptChoiceForDifficulty(fallbackChoiceText(i,c),i);
}
function adaptChoiceForDifficulty(text,i){
  if(state.difficulty==='Easy'){
    const simple={
      'Could I repack my luggage and move some things into my carry-on?':'Can I repack my luggage, please?',
      'I understand the fee. I can pay it now so I do not miss departure.':'I can pay the fee now.',
      'I cannot pay that fee. Just let me go to the gate.':'I cannot pay. Please help me.',
      'Could you give me one minute to find my passport?':'One minute, please. I need my passport.',
      'Here is my passport and boarding pass. Can you scan them now?':'Here is my passport and boarding pass.',
      'Why do you need my passport again? I already showed my bag.':'Why do you need my passport?'
    };
    return simple[text]||text.replace(/\s+/g,' ').split('. ').slice(0,1).join('. ');
  }
  if(state.difficulty==='Hard'&&i!==2){
    return text.replace(/\?$/,'? I can explain clearly if needed.');
  }
  return text;
}
function buildChoice(choice,i){
  const ai=state.aiChoices[i];
  const text=choiceTextFor(i,choice);
  if(ai&&typeof ai==='object'&&ai.risky){
    const withImpact=tuneChoiceImpact(Object.assign({},choice,ai,{text}),i);
    withImpact.why=tradeoffReason(withImpact,i);
    return withImpact;
  }
  const baseEffect=realEffectFor(i)||{};
  const aiImpact=ai&&typeof ai==='object'?{
    money:Number(ai.money)||0,
    time:Number(ai.time)||0,
    stress:Number(ai.stress)||0,
    xp:Number(ai.xp)||20,
    reason:ai.reason||''
  }:null;
  const withImpact=tuneChoiceImpact(Object.assign({},choice,baseEffect,aiImpact||{},{text}),i);
  withImpact.why=tradeoffReason(withImpact,i);
  return withImpact;
}
function tuneChoiceImpact(choice,i){
  if(!choice||!['airport','hotel'].includes(state.level?.id))return choice;
  const tuned=Object.assign({},choice);
  const tightenResources=(impact)=>{
    const next=Object.assign({},impact);
    if((next.time||0)<0)next.time=Math.round(next.time*1.18);
    if((next.time||0)>0)next.time=Math.max(5,Math.round(next.time));
    if((next.stress||0)>0)next.stress=Math.round(next.stress*1.2);
    if((next.stress||0)<0)next.stress=Math.min(-1,Math.round(next.stress*.85));
    return next;
  };
  const tunePlain=(impact)=>{
    const next=Object.assign({},impact);
    if(state.level.id==='airport'){
      if(i===0){
        next.time=(next.time||0)-2;
        next.stress=(next.stress||0)+1;
      } else if(i===2) {
        next.time=(next.time||0)-2;
        next.stress=(next.stress||0)+4;
      }
    }
    const pressured=tightenResources(next);
    if(state.difficulty==='Hard'){
      if((pressured.time||0)<0)pressured.time-=2;
      if((pressured.stress||0)>0)pressured.stress+=2;
    }
    return pressured;
  };
  if(tuned.risky){
    tuned.success=tunePlain(tuned.success||{});
    tuned.failure=tunePlain(tuned.failure||{});
    return tuned;
  }
  return Object.assign(tuned,tunePlain(tuned));
}
function tradeoffReason(c,i){
  const text=String(c.text||'').toLowerCase();
  const slowCost='time';
  if(c.dice)return `Risk Roll: choose this only if you accept uncertainty. A good roll can solve the problem; a bad roll can cost resources. Locked if Stress is above 80.`;
  if(c.risky)return 'Risky 50/50: the result will be randomly decided.';
  if(i===0)return `Careful: protects money or avoids mistakes, but usually costs ${slowCost}.`;
  if(i===1)return `Fast: spends money or uses help to save ${slowCost} and reduce pressure.`;
  if(i===2)return `Risky: may seem easier now, but can waste ${slowCost} or raise stress.`;
  if(/repack|wait|check|confirm|compare|show|explain|recommend|ask|hold/.test(text))return `Careful: saves money or avoids mistakes, but costs ${slowCost}.`;
  if(/pay|fee|upgrade|buy|order|take it|available|fastest/.test(text))return `Fast: costs money, but saves ${slowCost} and lowers stress.`;
  if(/let me go|do not need|not important|fault|free|ridiculous|grab|behind the desk|move someone|refuse/.test(text))return `Risky: may avoid paying now, but raises stress and wastes ${slowCost}.`;
  if((c.money||0)<0)return 'Paid option: money goes down, but the problem moves faster.';
  if((c.stress||0)>10)return 'Risky communication: stress rises because the NPC is less cooperative.';
  return 'Balanced: this keeps the conversation moving with moderate cost.';
}
function fallbackChoiceText(i,c){
  return ((REAL_CHOICES[state.level.id]||[])[(state.turn-1)%10]||[])[i]||c.text;
}
function renderChoices(){
  $('dice').innerHTML='';
  $('responses').innerHTML=choicePanelHtml('Your turn: choose a response');
}
function choicePanelHtml(title){
  const choices=groupChoices();
  if(!choices.length)return onlineRequiredHtml();
  state.selectedIdea=null;
  const chatOpen=state.freeChatHistory.length?' show':'';
  const tutorUsed=state.tutorMessageCount||0;
  const tutorLimitReached=tutorUsed>=TUTOR_MESSAGE_LIMIT;
  const freeChatHtml=`<div class="freeChatBox">
    <b>📚 Tutor chat</b>
    <div class="small">Ask about this turn only. Good examples: <b>What does boarding pass mean?</b> · <b>Which option is safest?</b> · <b>Can I say this politely?</b></div>
    <div class="studyStatus" style="margin-top:6px">Tutor messages used this level: <b>${tutorUsed}/${TUTOR_MESSAGE_LIMIT}</b>${tutorLimitReached?' · limit reached':''}</div>
    <div class="freeChatReply chatTranscript${chatOpen}" id="freeChatReply">${freeChatHistoryHtml()}</div>
    <textarea id="freeChatInput" placeholder="${tutorLimitReached?'Tutor limit reached for this level. Choose A, B, or C to continue.':'Ask the tutor anything about this turn...'}" onkeydown="freeChatKey(event)" ${tutorLimitReached?'disabled':''}></textarea>
    <div class="freeChatActions">
      <button type="button" class="btn ghost" onclick="submitFreeChat()" ${tutorLimitReached?'disabled':''}>Ask</button>
      <span class="impact">Limit ${TUTOR_MESSAGE_LIMIT}/level · Cost: Time -5 min · Money -$5. Target-word questions can reduce Stress by 4.</span>
    </div>
  </div>`;
  return `<b>${title}</b><div class="note helperText">Choose one option: <b>A</b>, <b>B</b>, or <b>C</b>. Read the resource impact before you choose.</div>
  <div class="small" style="margin:6px 0 8px"><b>A = Careful</b> · <b>B = Fast</b> · <b>C = Risky</b>. Careful choices usually cost time, fast choices often cost money, and risky choices can raise stress.</div>`+
  choices.map((c,i)=>{
    if(c.dice){
      const locked=state.stress>80;
      if(locked)return `<button type="button" class="btn row" disabled style="opacity:0.5;cursor:not-allowed"><span class="tag" style="margin-right:6px;background:#aaa">C</span>🔒 Locked — stress too high to take this risk<div class="impact">Your stress is above 80. This risky option is not available.</div></button>`;
      return `<button type="button" class="btn row riskOption" onclick="answer(${i})"><span class="tag" style="margin-right:6px">C</span>🎲 ${esc(c.text)} <span class="riskBadge">Risk Roll</span><div class="impact">${formatEffect(c)}</div><div class="why">${esc(c.why)}</div></button>`;
    }
    return `<button type="button" class="btn row ${i===0?'mid':i===1?'good':'bad'}" onclick="answer(${i})"><span class="tag" style="margin-right:6px">${String.fromCharCode(65+i)}</span>${esc(c.text)}<div class="impact">Impact: ${formatEffect(c)}${c.risky?'':' · XP +'+c.xp}</div><div class="why">${esc(c.why)}</div></button>`;
  }).join('')+
  freeChatHtml;
}
function freeChatHistoryHtml(){
  const history=state.freeChatHistory||[];
  const latest=history.slice(-2);
  const olderNote=history.length>2?`<div class="small" style="text-align:center;color:var(--muted);margin-bottom:6px">Earlier tutor exchanges are saved in the page history.</div>`:'';
  return olderNote+latest.map(m=>`<div class="chatMsg ${m.role==='user'?'user':'tutor'}"><b>${m.role==='user'?'You':'📚 Tutor'}:</b> ${m.html}</div>`).join('');
}
function renderFreeChat(){
  const replyBox=$('freeChatReply');
  if(!replyBox)return;
  replyBox.classList.toggle('show',state.freeChatHistory.length>0);
  replyBox.innerHTML=freeChatHistoryHtml();
  replyBox.scrollTop=replyBox.scrollHeight;
}
function refreshTutorLimitControls(){
  const used=state.tutorMessageCount||0;
  const reached=used>=TUTOR_MESSAGE_LIMIT;
  const box=$('freeChatInput');
  const askBtn=document.querySelector('#responses .freeChatActions button');
  const status=document.querySelector('#responses .freeChatBox .studyStatus');
  if(status)status.innerHTML=`Tutor messages used this level: <b>${used}/${TUTOR_MESSAGE_LIMIT}</b>${reached?' · limit reached':''}`;
  if(box){
    box.disabled=reached;
    box.placeholder=reached?'Tutor limit reached for this level. Choose A, B, or C to continue.':'Ask the tutor anything about this turn...';
  }
  if(askBtn)askBtn.disabled=reached;
}
function addTutorSupportPage(question,answerHtml,danger){
  const activeScenario=(latestTurnPage()&&latestTurnPage().scenario)||'';
  const supportHtml=`<div class="supportPageNote"><b>Tutor support used</b><br><span class="small">Question:</span> ${esc(question)}<div style="margin-top:8px">${answerHtml}</div></div>`;
  addTurnPage({kind:'support',turn:state.turn,title:'Tutor Support',previousChoice:`Asked tutor: ${question}`,scenario:activeScenario,supportHtml,danger});
}
function freeChatKey(e){
  if(e.key==='Enter'&&!e.shiftKey){
    e.preventDefault();
    if(e.repeat)return;
    submitFreeChat();
  }
}
function freeChatRedirectMessage(){
  const place=state.level?.name||'this scenario';
  return `This is not really relevant to ${esc(place)}. Please choose option A, B, or C, or ask about the words in this turn.`;
}
function freeChatGuardMessage(text){
  const raw=String(text||'').trim();
  const lower=raw.toLowerCase();
  if(!raw)return '';
  if(raw.length>260)return 'Please keep chatbot questions short and connected to this turn. Choose A, B, or C, or ask about the words in this turn.';
  if(/https?:\/\/|www\.|@[a-z0-9_]+|#[a-z0-9_]+/i.test(raw))return freeChatRedirectMessage();
  if(/\b(bitch|bitches|fuck|shit|stupid|idiot|shut up|go away|hate you|kill|porn|sex|drug|weed|beer|gambling)\b/i.test(raw))return freeChatRedirectMessage();
  if(/\b(weather|sports?|football|music|song|movie|game|politics|news|restaurant|pizza|homework|math|dating|girlfriend|boyfriend|joke|story|recipe|programming|code|website|youtube|instagram|tiktok|facebook|favorite color|your name|who are you)\b/.test(lower)&&!freeChatHasScenarioOverlap(raw))return freeChatRedirectMessage();
  if(freeChatOffTopicVocabQuestion(raw))return freeChatRedirectMessage();
  const helpWord=freeChatVocabHelpWord(raw);
  if(helpWord&&(freeChatKnownVocabCandidate(helpWord)||freeChatHasScenarioOverlap(raw)))return '';
  if(freeChatStrategyQuestion(raw))return '';
  if(freeChatEnglishPracticeQuestion(raw)&&freeChatHasScenarioOverlap(raw))return '';
  if(/\b(how do i say|can i say|could i say|is this correct|correct this|make this polite|grammar|sentence)\b/.test(lower)&&freeChatHasScenarioOverlap(raw))return '';
  if(freeChatHasScenarioOverlap(raw))return '';
  return '';
}
function freeChatImportantWords(text){
  return String(text||'').toLowerCase().match(/[a-z][a-z'-]{2,}/g)||[];
}
function freeChatHasScenarioOverlap(text){
  const lower=String(text||'').toLowerCase();
  const q=state.level?.quests?.[state.char?.id]||{};
  const levelWords=(state.level?.vocab||[]).concat(vocabForTurn(state.turn)||[]);
  const choiceWords=groupChoices().flatMap(c=>freeChatImportantWords(c.text));
  const contextWords=freeChatImportantWords([state.level?.name,state.level?.npc,q.title,q.setup,q.goal,state.storyHistory.slice(-3).join(' ')].join(' '));
  const scenarioWords={
    airport:['airport','airline','flight','fly','gate','bag','baggage','luggage','passport','boarding','security','liquid','ticket','terminal','plane','fee','carry','station','attendant'],
    hotel:['hotel','room','front','desk','reservation','booking','check','deposit','card','upgrade','early','late','checkout','noise','quiet','floor','key','guest','lobby']
  }[state.level?.id]||[];
  const important=[...levelWords,...choiceWords,...contextWords,...scenarioWords]
    .map(w=>String(w).toLowerCase())
    .flatMap(w=>w.includes(' ')?[w,...freeChatImportantWords(w)]:[w])
    .filter(w=>w.length>2&&!/^(the|and|you|your|for|with|that|this|now|can|will|are|need|have|from|into|what|which|please)$/.test(w));
  return [...new Set(important)].some(w=>{
    const safe=w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    return w.includes(' ')?lower.includes(w):new RegExp(`\\b${safe}\\b`,'i').test(lower);
  });
}
function isIrrelevantFreeChat(text){
  return !!freeChatGuardMessage(text);
}
async function submitFreeChat(){
  if(state.chatSubmitting)return;
  if((state.tutorMessageCount||0)>=TUTOR_MESSAGE_LIMIT){
    alert(`Tutor limit reached for this level (${TUTOR_MESSAGE_LIMIT}/${TUTOR_MESSAGE_LIMIT}). Please choose A, B, or C to continue.`);
    logStudyEvent('free_chat_limit_reached',{turn:state.turn,limit:TUTOR_MESSAGE_LIMIT,level:state.level?.id});
    return;
  }
  const box=$('freeChatInput');
  const text=(box&&box.value.trim())||'';
  if(!text)return alert('Type your question first.');
  state.chatSubmitting=true;
  const askBtn=document.querySelector('#responses .freeChatActions button');
  if(askBtn)askBtn.disabled=true;
  if(box){box.value='';box.disabled=true;}
  const before=resourceSnapshot();
  const cost={money:-5,time:-5,stress:0};
  const danger=applyDelta(cost);
  addXP(3);
  state.tutorMessageCount=(state.tutorMessageCount||0)+1;
  const askedWord=freeChatVocabHelpWord(text);
  const turnWord=(vocabForTurn(state.turn)||[]).find(w=>normalizeAnswer(w)===normalizeAnswer(askedWord||''));
  const costLine=`<div class="chatCostNote">Cost: Time -5 min · Money -$5${danger?` · <b style="color:var(--red)">Danger: ${dangerMessage(danger)}</b>`:''}</div>`;
  state.freeChatHistory.push({role:'user',html:esc(text)});
  state.freeChatHistory.push({role:'tutor',html:`<span class="small" style="color:var(--muted)">Tutor is thinking...</span>`});
  renderFreeChat();
  const guardReply=freeChatGuardMessage(text);
  if(guardReply){
    logStudyEvent('free_chat_redirect',{turn:state.turn,text,reply:guardReply,cost,danger,resourcesBefore:before,resourcesAfter:resourceSnapshot()});
    state.freeChatHistory[state.freeChatHistory.length-1]={role:'tutor',html:guardReply+costLine};
    renderFreeChat();
    addTutorSupportPage(text,guardReply+costLine,danger);
    maybeRecoveryDice();
    refreshTutorLimitControls();
    state.chatSubmitting=false;
    return;
  }
  const reply=await freeChatReply(text);
  let rewardLine='';
  let reward=null;
  if(turnWord){
    reward={stress:-4};
    applyDelta(reward);
    rewardLine=`<div class="chatRewardNote">Vocab reward: Stress -4 for asking about <b>${esc(turnWord)}</b>.</div>`;
    logStudyEvent('vocab_reward',{turn:state.turn,word:turnWord,reward,resourcesAfter:resourceSnapshot()});
  }
  logStudyEvent('free_chat',{turn:state.turn,text,reply,cost,danger,vocabReward:reward,askedWord:askedWord||null,resourcesBefore:before,resourcesAfter:resourceSnapshot()});
  state.freeChatHistory[state.freeChatHistory.length-1]={role:'tutor',html:reply+rewardLine+costLine};
  renderFreeChat();
  addTutorSupportPage(text,reply+rewardLine+costLine,danger);
  maybeRecoveryDice();
  refreshTutorLimitControls();
  state.chatSubmitting=false;
}
async function freeChatReply(text){
  const helpWord=freeChatVocabHelpWord(text);
  if(helpWord){
    const def=await aiDefine(helpWord);
    return `<b>${esc(helpWord)}</b> means: ${esc(def.definition)}.<br>Vietnamese: <b>${esc(def.vietnamese||'')}</b><br>Example: ${esc(def.example||'')}<br><span class="small">In this scenario, use that meaning to choose A, B, or C.</span>`;
  }
  if(freeChatStrategyQuestion(text))return freeChatStrategyReply(text);
  if(freeChatEnglishPracticeQuestion(text))return freeChatEnglishPracticeReply(text);
  return await chatGptTutorReply(text);
}
function freeChatStrategyQuestion(text){
  const lower=String(text||'').toLowerCase();
  return /\b(which|what|should|better|best|safe|safer|safest|cheap|cheaper|cheapest|fast|faster|fastest|save|cost|risk|risky|happen|option|options|choice|choices)\b/.test(lower)
    && /\b(option|options|choice|choices|a|b|c|safer|better|best|cheap|fast|risk|risky)\b/.test(lower);
}
function freeChatStrategyReply(text){
  const lower=String(text||'').toLowerCase();
  const choices=groupChoices();
  if(!choices.length)return `Look at A, B, and C. Choose the one that best protects your money, time, and stress. Now please choose A, B, or C to continue.`;
  const scored=choices.map((c,i)=>{
    let score=0;
    const stress=c.risky||c.dice?35:(c.stress||0);
    const money=c.money||0;
    const time=c.time||0;
    if(/\b(safe|safer|safest|risk|risky)\b/.test(lower))score-=stress*4;
    else if(/\b(cheap|cheaper|cheapest|money|cost|save)\b/.test(lower))score+=money*3-stress;
    else if(/\b(fast|faster|fastest|time|patience)\b/.test(lower))score+=time*3-stress;
    else score+=time+money-stress*2;
    return {i,c,score};
  }).sort((a,b)=>b.score-a.score);
  const best=scored[0];
  const label=String.fromCharCode(65+best.i);
  const focus=/\b(cheap|cheaper|cheapest|money|cost|save)\b/.test(lower)?'save money'
    :/\b(fast|faster|fastest|time|patience)\b/.test(lower)?'save time'
    :/\b(safe|safer|safest|risk|risky)\b/.test(lower)?'keep stress lower'
    :'balance your resources';
  return `Option ${label} looks best if you want to ${focus}. ${esc(tradeoffReason(best.c,best.i))} Now please choose A, B, or C to continue.`;
}
function freeChatEnglishPracticeQuestion(text){
  const lower=String(text||'').toLowerCase();
  return /\b(can i say|is this correct|is it correct|grammar|correct my|fix|sentence|phrase|how do i say|does this sound|write this)\b/.test(lower)
    || (freeChatHasScenarioOverlap(text)&&/\b(i|we|you|could|would|please|need|want|have|has|am|is|are|will)\b/.test(lower));
}
function freeChatEnglishPracticeReply(text){
  const raw=String(text||'').trim();
  const candidate=(raw.split(':').slice(1).join(':')||raw).trim();
  let suggestion=candidate;
  suggestion=suggestion.replace(/\bi doesnt\b/ig,'I do not')
    .replace(/\bi dont\b/ig,'I do not')
    .replace(/\bi\b/g,'I')
    .replace(/\bshe love\b/ig,'she loves')
    .replace(/\bhe love\b/ig,'he loves')
    .replace(/\bcan i\b/ig,'Can I')
    .replace(/\bcould i\b/ig,'Could I');
  if(!/[.!?]$/.test(suggestion))suggestion+='.';
  if(state.level?.id==='airport'&&/\bmetal items\b/i.test(candidate)&&/\bbag\b/i.test(candidate)){
    suggestion='I have a lot of metal items in my bag. Can I spend a few minutes taking them out before security?';
  }else if(state.level?.id==='hotel'&&/\bdeposit|upgrade|receipt|booking|reservation\b/i.test(candidate)){
    suggestion=suggestion.replace(/\bI want\b/i,'I would like');
  }
  return `Good try. A clearer version is: <b>${esc(suggestion)}</b><br><span class="small">Grammar note: use polite question forms like <b>Can I...?</b> or <b>Could I...?</b>, and keep the sentence connected to this turn. Now please choose A, B, or C to continue.</span>`;
}
async function chatGptTutorReply(text){
  try{
    const q=state.level.quests[state.char.id];
    const turnVocab=vocabForTurn(state.turn).join(', ');
    const history=state.storyHistory.slice(-4).join(' | ');
    const choices=groupChoices().map((c,i)=>`${String.fromCharCode(65+i)}: ${c.text}`).join(' / ');
    const res=await fetch(TUTOR_API_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        message:text,
        location:state.level.name,
        npc:state.level.npc,
        turn:state.turn,
        totalTurns:TOTAL_TURNS,
        questSetup:q.setup,
        targetVocab:turnVocab,
        choices,
        storyHistory:history,
        chatHistory:(state.freeChatHistory||[]).slice(-8).map(m=>({role:m.role,text:plainText(m.html)}))
      })
    });
    if(!res.ok){
      const err=await res.json().catch(()=>({}));
      throw new Error(err.error||'ChatGPT tutor unavailable');
    }
    const data=await res.json();
    const reply=String(data.reply||'').trim();
    if(reply)return esc(reply).replace(/\n/g,'<br>');
    throw new Error('Empty reply');
  }catch(e){
    return `<span style="color:var(--gold);font-weight:900">Tutor is using offline fallback right now.</span><br>${localTutorReply(text)}`;
  }
}
function localTutorReply(text){
  const lower=String(text||'').toLowerCase();
  if(/\b(a|option a)\b/.test(lower)&&/\b(b|option b|c|option c|compare|versus|vs)\b/.test(lower))return freeChatStrategyReply(text);
  if(freeChatHasScenarioOverlap(text)){
    const words=vocabForTurn(state.turn).join(', ');
    return `Yes, that is connected to this turn. Try to use one clear sentence with the key words: <b>${esc(words)}</b>.<br><span class="small">I can help with wording, but the next game step is to choose A, B, or C.</span>`;
  }
  return freeChatRedirectMessage();
}
function freeChatVocabHelpWord(text){
  const lower=String(text||'').toLowerCase();
  const asksMeaning=/\b(what does|what is|meaning of|how do you say|define|translate)\b/.test(lower);
  // Pronouns and vague words that cannot be the actual vocabulary target
  const vague=new Set(['it','this','that','they','he','she','we','them','these','those','here','there','now','then','one','thing','word','i','you']);
  // 1. Extract grammatically first
  const direct=lower.match(/what\s+(?:does|is)\s+["']?([a-z][a-z -]{1,30}?)["']?\s+(?:mean\b|in vietnamese)/i)
    || lower.match(/what\s+is\s+["']?([a-z][a-z -]{1,30})["']?\??$/i)
    || lower.match(/meaning\s+of\s+["']?([a-z][a-z -]{1,30})["']?/i)
    || lower.match(/define\s+["']?([a-z][a-z -]{1,30})["']?/i)
    || lower.match(/how\s+do\s+you\s+say\s+["']?([a-z][a-z -]{1,30})["']?/i)
    || lower.match(/translate\s+["']?([a-z][a-z -]{1,30})["']?/i);
  if(direct){
    const extracted=direct[1].trim().replace(/[?!.'"\s]+$/,'');
    if(vague.has(extracted))return null; // pronoun: let the tutor handle contextually
    if(/^(the|a|an)\b/.test(extracted))return null;
    return extracted;
  }
  if(!asksMeaning){
    const dictionaryTerm=freeChatDictionaryTerm(text);
    if(dictionaryTerm)return dictionaryTerm;
  }
  // 2. Fallback scan — skip common question words and pronouns
  const skipWords=new Set(['mean','means','meaning','what','does','is','say','tell','how','the','a','an','this','that','it','in','of','please','vietnamese','i','you','they','we']);
  const candidates=[...(state.level?.vocab||[]),...Object.keys(VDB),...Object.keys(COMMON_DEFS)]
    .filter(w=>!skipWords.has(w.toLowerCase()))
    .sort((a,b)=>b.length-a.length);
  return candidates.find(w=>new RegExp('\\b'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(text))||null;
}
function freeChatDictionaryTerm(text){
  const cleaned=String(text||'')
    .trim()
    .replace(/^["']|["']$/g,'')
    .replace(/[?!.]+$/,'')
    .replace(/\s+/g,' ');
  if(!/^[a-zA-Z][a-zA-Z' -]{1,40}$/.test(cleaned))return null;
  const words=cleaned.split(/\s+/).filter(Boolean);
  if(words.length>4)return null;
  const lower=cleaned.toLowerCase();
  if(/\b(what|which|why|how|who|where|when|option|choice|safer|better|best)\b/.test(lower))return null;
  if(/^(hi|hello|hey|thanks|thank you|ok|okay|yes|no|a|b|c)$/i.test(cleaned))return null;
  if(/\b(tell|give|write|make|create|play|watch|like|love|hate|want|need|please)\b/.test(lower))return null;
  return lower;
}
function freeChatKnownVocabCandidate(wordKey){
  const wanted=String(wordKey||'').trim().toLowerCase();
  if(!wanted)return null;
  const candidates=[...(state.level?.vocab||[]),...Object.keys(VDB),...Object.keys(COMMON_DEFS)];
  return candidates.find(w=>w.toLowerCase()===wanted)||null;
}
function freeChatOffTopicVocabQuestion(text){
  const lower=String(text||'').toLowerCase();
  const asksMeaning=/\b(what does|what is|meaning of|how do you say|define|translate)\b/.test(lower);
  if(!asksMeaning)return false;
  const vague=new Set(['it','this','that','they','he','she','we','them','these','those','here','there','now','then','one','thing','word','i','you']);
  const direct=lower.match(/what\s+(?:does|is)\s+["']?([a-z][a-z -]{1,30}?)["']?\s+(?:mean\b|in vietnamese)/i)
    || lower.match(/meaning\s+of\s+["']?([a-z][a-z -]{1,30})["']?/i)
    || lower.match(/define\s+["']?([a-z][a-z -]{1,30})["']?/i)
    || lower.match(/how\s+do\s+you\s+say\s+["']?([a-z][a-z -]{1,30})["']?/i)
    || lower.match(/translate\s+["']?([a-z][a-z -]{1,30})["']?/i);
  if(!direct)return false;
  const extracted=direct[1].trim().replace(/[?!.'"\s]+$/,'');
  if(vague.has(extracted)||freeChatKnownVocabCandidate(extracted))return false;
  return !freeChatHasScenarioOverlap(extracted);
}
function selectChoiceIdea(i,btn){
  const choices=groupChoices();
  const c=choices[i];
  state.selectedIdea={index:i,choice:c};
  document.querySelectorAll('#responses .row').forEach(b=>b.classList.remove('correct'));
  if(btn)btn.classList.add('correct');
  const help=$('freeHelp');
  if(help)help.innerHTML=`<div class="note"><b>Selected strategy ${String.fromCharCode(65+i)}.</b><br>Now type your own sentence. You can use this idea, but write it in your own words.</div>`;
  const box=$('freeAnswer');
  if(box){box.focus();box.placeholder='Type your own sentence here. Example: Could you help me with this, please?';}
  logStudyEvent('strategy_selected',{turn:state.turn,choiceIndex:i,choice:c});
}
function freeAnswerKey(e){
  if(e.key==='Enter'&&!e.shiftKey){
    e.preventDefault();
    submitFreeAnswer();
  }
}
function storyDicePromptHtml(){
  return `<div class="diceLock" id="diceLock">Critical moment: roll the dice before choosing your response.</div>
  <div class="diceOverlay" id="storyDiceOverlay">
    <div class="diceStage" id="storyDiceStage">
      <div class="tag">Critical Moment</div>
      <div class="diceBig" id="storyDie">🎲</div>
      <h3 style="margin:6px 0">Roll the dice</h3>
      <div class="small">A random event will change your money, time, or stress before you answer.</div>
      <button class="btn primary" id="storyDiceBtn" style="margin-top:12px;width:100%" onclick="executeStoryDice()">Roll Now</button>
      <div id="storyDiceResult"></div>
    </div>
  </div>`;
}
function storyDiceOutcome(){
  const r=Math.ceil(Math.random()*6), face=['⚀','⚁','⚂','⚃','⚄','⚅'][r-1];let msg='The situation stays tense.',mode='Steady',effect={money:0,time:-10,stress:+8};
  if(r<=2){mode='Complication';msg='Something makes the situation harder.';effect={money:0,time:-22,stress:+30}}
  if(r>=5){mode='Lucky Break';msg='Something helpful happens.';effect={money:0,time:+14,stress:-18};addXP(10)}
  return {r,face,msg,mode,effect};
}
function executeStoryDice(){
  const btn=$('storyDiceBtn'), die=$('storyDie'), resultEl=$('storyDiceResult');
  if(btn)btn.disabled=true;
  if(die){die.textContent='🎲';die.classList.add('rolling')}
  setTimeout(function(){
    const result=storyDiceOutcome();
    if(die){die.classList.remove('rolling');die.textContent=result.face}
    const danger=applyDelta(result.effect);
    logStudyEvent('dice_roll',{kind:'critical',roll:result.r,mode:result.mode,message:result.msg,effect:result.effect,danger});
    if(resultEl){
      resultEl.innerHTML=`<div class="diceResult ${result.r<=2?'bad':result.r>=5?'good':'mid'}"><b>${result.mode}</b><div class="small">${result.msg}</div><div class="impact">Impact: ${formatEffect(result.effect)}</div></div>${danger?`<div class="note dangerNote"><b>Danger crossed:</b> ${dangerMessage(danger)}</div>`:''}`;
    }
    const stage=$('storyDiceStage');
    const lock=$('diceLock');
    if(lock)lock.textContent='Dice rolled. Continue to see your choices.';
    if(stage){
      stage.insertAdjacentHTML('beforeend',`<button class="btn primary" style="width:100%;margin-top:12px" onclick="finishStoryDice()">Continue to Choices</button>`);
    }
  },700);
}
function finishStoryDice(){
  const overlay=$('storyDiceOverlay');
  const lock=$('diceLock');
  if(overlay)overlay.remove();
  if(lock)lock.outerHTML=choicePanelHtml('Now choose your response');
  $('responses').scrollIntoView({behavior:'smooth',block:'start'});
}
function rollDice(){
  const result=storyDiceOutcome();
  const {face,msg,mode,effect}=result;
  const danger=applyDelta(effect);
  $('dice').innerHTML='';
  $('responses').innerHTML+=`<div class="dice"><div class="die">${face}</div><div><b>${mode}</b><div class="small">${msg}</div><div class="impact">Impact: ${formatEffect(effect)}</div></div></div>${danger?`<div class="note dangerNote"><b>Danger crossed:</b> ${dangerMessage(danger)}</div>`:''}`;
}
function supportOption(type){
  const options={
    money:{title:'Budget Rescue',text:'Ask for the cheapest acceptable option.',effect:{money:+45,time:-7,stress:-4},note:'You recover money, but lose time while negotiating.'},
    time:{title:'Fast-Track Help',text:'Ask staff for the fastest route or next step.',effect:{money:-15,time:+12,stress:-3},note:'You recover time, but it costs a little money.'},
    stress:{title:'Calm Reset',text:'Pause, breathe, and ask the tutor/NPC to repeat the key point.',effect:{money:0,time:-4,stress:-14},note:'You lower stress, but spend a few minutes calming down.'}
  };
  return options[type];
}
function xpSupportAvailable(){
  if(!$('xpSupportBar')||!state.level||state.studyStopped)return false;
  if(state.xp<20)return false;
  if(state.xpSupportUsed[state.level.id])return false;
  if(checkDanger())return false;
  if(recoveryRisk())return false;
  return true;
}
function updateXpSupportBar(){
  const bar=$('xpSupportBar');
  if(!bar)return;
  if(!$('game')?.classList.contains('active')||!state.level){bar.classList.remove('show');bar.innerHTML='';return;}
  if(!xpSupportAvailable()){
    bar.classList.remove('show');
    bar.innerHTML='';
    return;
  }
  bar.classList.add('show');
  bar.innerHTML=`<div class="xpSupportTop"><div><b>⭐ XP Support</b><br><span class="small">Spend 20 XP for one early support card before resources become risky.</span></div><button class="btn primary" onclick="showXpSupportChoices()">Use 20 XP</button></div>`;
}
function showXpSupportChoices(){
  const bar=$('xpSupportBar');
  if(!bar||!xpSupportAvailable())return updateXpSupportBar();
  bar.classList.add('show');
  bar.innerHTML=`<div><b>⭐ Choose one XP Support Card</b><br><span class="small">One use per level. Each card helps one resource and costs another.</span></div>
  <div class="xpSupportBtns">
    <button class="btn ghost" onclick="useXpSupport('money')">Budget Rescue</button>
    <button class="btn ghost" onclick="useXpSupport('time')">Fast-Track Help</button>
    <button class="btn ghost" onclick="useXpSupport('stress')">Calm Reset</button>
    <button class="btn ghost" onclick="updateXpSupportBar()">Cancel</button>
  </div>`;
}
function useXpSupport(type){
  if(!xpSupportAvailable())return updateXpSupportBar();
  const support=supportOption(type);
  if(!support)return;
  state.xp=Math.max(0,state.xp-20);
  $('hud').textContent='⭐ '+state.xp+' XP';
  state.xpSupportUsed[state.level.id]=true;
  const activeScenario=(latestTurnPage()&&latestTurnPage().scenario)||'';
  const danger=applyDelta(support.effect);
  logStudyEvent('xp_support_used',{turn:state.turn,resource:type,title:support.title,xpCost:20,effect:support.effect,danger,resourcesAfter:resourceSnapshot()});
  const supportHtml=`<div class="supportPageNote"><b>XP Support: ${esc(support.title)}</b><br>${esc(support.text)} ${esc(support.note)}<div class="impact">Cost: XP -20 · Impact: ${formatEffect(support.effect)}</div></div>${danger?`<div class="note dangerNote"><b>Still in danger:</b> ${dangerMessage(danger)}</div>`:`<div class="note"><b>Support used.</b> You spent XP to get help early.</div>`}`;
  updateXpSupportBar();
  addTurnPage({kind:'support',turn:state.turn,title:`XP Support: ${support.title}`,previousChoice:`Spent 20 XP on ${support.title}`,scenario:activeScenario,supportHtml,danger});
}
function maybeRecoveryDice(){
  const type=recoveryRisk();
  if(!type)return;
  const resourceName=type==='time'?resourceTwoName():type.charAt(0).toUpperCase()+type.slice(1);
  const support=supportOption(type);
  $('dice').innerHTML=`<div class="dice"><div class="die">🛟</div><div style="flex:1"><b>Support Card: ${esc(resourceName)} Risk</b><div class="small">${recoveryMessage(type)}</div>
  <div class="diceResult mid" style="text-align:left"><b>${esc(support.title)}</b><div class="small">${esc(support.text)} ${esc(support.note)}</div><div class="impact">Impact: ${formatEffect(support.effect)}</div></div>
  <button class="btn primary" style="margin-top:8px" onclick="useSupportOption('${type}')">Use Support Card</button></div></div>`;
}
function useSupportOption(type){
  const support=supportOption(type);
  if(!support)return;
  state.recoveryUsed[type]=true;
  const activeScenario=(latestTurnPage()&&latestTurnPage().scenario)||'';
  const danger=applyDelta(support.effect);
  addXP(8);
  logStudyEvent('support_used',{turn:state.turn,resource:type,title:support.title,effect:support.effect,danger,resourcesAfter:resourceSnapshot()});
  const supportHtml=`<div class="supportPageNote"><b>${esc(support.title)} used</b><br>${esc(support.note)}<div class="impact">Impact: ${formatEffect(support.effect)} · XP +8</div></div>${danger?`<div class="note dangerNote"><b>Still in danger:</b> ${dangerMessage(danger)}</div>`:`<div class="note"><b>Recovered.</b> Your resources are back on the safe side for now.</div>`}`;
  $('dice').innerHTML='';
  addTurnPage({kind:'support',turn:state.turn,title:`Support: ${support.title}`,previousChoice:`Used support: ${support.title}`,scenario:activeScenario,supportHtml,danger});
}
function answerFeedback(i,danger){
  if(danger)return '<b>Danger crossed:</b> '+dangerMessage(danger);
  return '';
}
async function continueAfterAnswer(text,feedback,danger,choiceIndex,choice){
  $('responses').innerHTML=`<div class="small" style="text-align:center;padding:14px;color:var(--muted)">⏳ <em>Responding…</em></div>`;
  if(state.turn>=TOTAL_TURNS){
    let finalReaction='';
    if(DEV_MODE&&state.level.id==='airport') finalReaction=airportReaction(choiceIndex,text,state.turn);
    if(DEV_MODE&&state.level.id==='hotel') finalReaction=hotelReaction(choiceIndex,choice,state.turn);
    if(finalReaction)addTurnPage({kind:'final',turn:state.turn,title:'Final response',previousChoice:text,feedback,danger,scenario:finalReaction});
    finishQuest();return;
  }
  state.turn++;
  $('progress').style.width=(state.turn/TOTAL_TURNS*100)+'%';
  state.aiChoices=[];
  const requiredWords=vocabForTurn(state.turn);
  const nextScenario=await apiStory(requiredWords,{previousAnswer:text,mode:'after_player_answer',selectedChoice:choice||null,choiceIndex,skipImmediateReaction:!!choice?.diceReaction});
  if(!nextScenario)return;
  const scenarioForPage=choice?.diceReaction?insertFeedbackAfterNpcReaction(nextScenario,feedback,danger):nextScenario;
  const feedbackForPage=choice?.diceReaction?'':feedback;
  rememberBeat(`Player: ${text}. NPC: ${plainText(scenarioForPage)}`);
  rememberBeat(scenarioForPage);
  addTurnPage({turn:state.turn,scenario:scenarioForPage,previousChoice:text,feedback:feedbackForPage,danger});
  $('responses').innerHTML=choicePanelHtml('What do you do next?');
  maybeRecoveryDice();
}
function answer(i){
  let c=groupChoices()[i], text=c.text, randomFeedback='';
  sound('choice');
  state.lastPlayerAnswer=text;
  // Dice turns — intercept choice C
  if(c.dice){
    if(state.stress>80)return; // locked — UI prevents this but double-check
    showAirportDiceOverlay(c);
    return;
  }
  if(state.level?.id==='hotel'&&c.risky){
    const success=Math.random()<0.5;
    const picked=success?c.success:c.failure;
    c=Object.assign({},c,picked,{text,randomResult:success?'success':'failure',risky:false,wasRisky:true});
    randomFeedback=`<b>50/50 result:</b> ${success?'Success':'Failure'}. Applied outcome: ${formatEffect(c)} · XP +${c.xp}. `;
  }
  addXP(c.xp);
  const danger=applyDelta(c);
  const feedback=randomFeedback+answerFeedback(i,danger);
  logStudyEvent('turn_response',{responseType:'suggested',choiceIndex:i,text,profile:responseProfile(text),choice:c,danger});
  continueAfterAnswer(text,feedback,danger,i,c);
}
function showAirportDiceOverlay(choice){
  state._pendingAirportDice=choice;
  const overlay=document.createElement('div');
  overlay.className='diceOverlay';
  overlay.id='airportDiceOverlay';
  overlay.innerHTML=`<div class="diceStage" id="airportDiceStage">
    <div class="tag" style="background:var(--redLight);color:var(--red)">Risk Roll Choice</div>
    <h3 style="margin:10px 0 4px">You chose a risky option</h3>
    <div class="small" style="margin:6px 0 4px">This is not a normal choice. The die decides whether the risk helps you or hurts your resources.</div>
    <div style="font-size:13px;color:#6b4a00;background:var(--goldLight);border-radius:12px;padding:8px;margin:10px 0 4px"><b>${choice.odds}</b></div>
    <div class="diceBig" id="airportDie">🎲</div>
    <div class="small" style="margin-bottom:14px"><b>1-3 = success</b> · <b>4-6 = fail</b></div>
    <button class="btn primary" style="width:100%" id="airportDiceBtn" onclick="rollAirportDice()">🎲 Roll Now</button>
    <button class="btn ghost" style="width:100%;margin-top:10px" id="airportDiceCancelBtn" onclick="cancelAirportDice()">Back to Options</button>
    <div id="airportDiceResult" style="margin-top:12px"></div>
  </div>`;
  document.body.appendChild(overlay);
}
function cancelAirportDice(){
  const overlay=$('airportDiceOverlay');
  if(overlay)overlay.remove();
  state._pendingAirportDice=null;
  state.lastPlayerAnswer='';
  $('responses').scrollIntoView({behavior:'smooth',block:'nearest'});
}
function rollAirportDice(){
  const btn=$('airportDiceBtn'),cancelBtn=$('airportDiceCancelBtn'),die=$('airportDie');
  if(btn)btn.disabled=true;
  if(cancelBtn)cancelBtn.disabled=true;
  const faces=['⚀','⚁','⚂','⚃','⚄','⚅'];
  if(die)die.classList.add('rolling');
  // Gradually slowing spin for drama
  const delays=[55,55,70,70,90,110,140,175,220,280,350];
  let step=0;
  function spin(){
    if(die)die.textContent=faces[Math.floor(Math.random()*6)];
    if(step<delays.length){setTimeout(spin,delays[step++]);}
    else{
      if(die)die.classList.remove('rolling');
      const roll=Math.ceil(Math.random()*6);
      if(die)die.textContent=faces[roll-1];
      setTimeout(()=>finishAirportDiceRoll(roll),300);
    }
  }
  spin();
}
function finishAirportDiceRoll(roll){
  const config=state._pendingAirportDice;
  const success=config.successRolls.includes(roll);
  const effect=success?config.success:config.failure;
  const reaction=success?config.successReaction:config.failReaction;
  const resultEl=$('airportDiceResult');
  if(resultEl)resultEl.innerHTML=`<div class="diceResult ${success?'good':'bad'}" style="margin-top:8px">
    <b>${success?'✅ Success!':'❌ Fail'} — You rolled ${roll}</b>
    <div class="small" style="margin-top:6px">${reaction}</div>
    ${!effect.gameOver?`<div class="impact" style="margin-top:4px">Impact: ${formatEffect(effect)} · XP +${effect.xp}</div>`:'<div class="impact" style="margin-top:4px;color:var(--red)">⚠️ You missed your flight.</div>'}
  </div>`;
  const stage=$('airportDiceStage');
  if(stage)stage.insertAdjacentHTML('beforeend',`<button class="btn primary" style="width:100%;margin-top:12px" onclick="resolveAirportDice(${roll})">Continue</button>`);
}
function resolveAirportDice(roll){
  const config=state._pendingAirportDice;
  if(!config)return;
  const success=config.successRolls.includes(roll);
  const effect=success?config.success:config.failure;
  const text=(REAL_CHOICES[state.level.id]?.[state.turn-1]||[])[2]||'I tried my luck.';
  const overlay=$('airportDiceOverlay');
  if(overlay)overlay.remove();
  logStudyEvent('scenario_dice_roll',{level:state.level?.id,turn:state.turn,roll,success,odds:config.odds,effect});
  if(!success&&effect.gameOver){
    addXP(0);
    applyDelta({stress:effect.stress||0});
    addTurnPage({kind:'result',turn:state.turn,title:'Gate Closed',previousChoice:text,scenario:`<b>The gate is now closed.</b> ${config.failReaction} You have missed your flight and will need to rebook.`,danger:true});
    state.crossedDanger=true;
    $('responses').innerHTML=`<div class="note dangerNote"><b>You missed your flight.</b><br>The dice roll did not go your way and the gate closed. This happens sometimes when you take a big risk under pressure. You can replay this level or stop the study here.</div>
    <button class="btn primary" style="width:100%;margin-top:10px" onclick="replay()">Replay Level</button>
    <button class="btn ghost" style="width:100%;margin-top:8px" onclick="showMap()">Back to Level Map</button>`;
    return;
  }
  addXP(effect.xp||0);
  const danger=applyDelta(effect);
  const resultLine=`<b>Dice result:</b> ${success?'Success':'Fail'} — you rolled ${roll}. ${esc(success?config.successReaction:config.failReaction)}<br><span class="impact">Impact: ${formatEffect(effect)} · XP +${effect.xp||0}</span>${danger?`<br><b>Danger crossed:</b> ${dangerMessage(danger)}`:''}`;
  continueAfterAnswer(text,resultLine,danger,2,Object.assign({},effect,{risky:false,wasRisky:true,randomResult:success?'success':'failure',diceRoll:roll,diceReaction:success?config.successReaction:config.failReaction,text}));
}
function evaluateFreeAnswer(text){
  const lower=text.toLowerCase();
  const rude=/\b(bitch|fuck|shit|stupid|idiot|shut up|go away|hate you)\b/i.test(lower);
  const polite=/\b(please|sorry|excuse me|could you|can you|thank you|i understand)\b/i.test(lower);
  const efficient=/\b(pay|now|quick|quickly|fast|fastest|priority|direct|confirm|ready|here is|i have|scan|show|help me|fix it)\b/i.test(lower);
  if(rude)return {effect:{money:0,time:-14,stress:+30},xp:5,label:'Rude/unhelpful answer'};
  if(polite&&efficient)return {effect:{money:0,time:+10,stress:-12},xp:35,label:'Efficient custom answer'};
  if(efficient)return {effect:{money:0,time:+8,stress:-4},xp:30,label:'Efficient custom answer'};
  if(polite)return {effect:{money:0,time:+6,stress:-10},xp:30,label:'Polite custom answer'};
  return {effect:{money:0,time:0,stress:+4},xp:25,label:'Custom answer'};
}
function vocabHelpWord(text){
  const lower=text.toLowerCase();
  const asksMeaning=/\b(what does|what is|meaning|mean|translate|vietnamese|how do you say)\b/.test(lower);
  if(!asksMeaning)return null;
  const candidates=[...state.level.vocab,...Object.keys(VDB)];
  const known=candidates.find(w=>new RegExp('\\b'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(text));
  if(known)return known;
  const direct=lower.match(/what\s+(?:does|is)\s+([a-z][a-z -]{1,30}?)\s+(?:mean|in vietnamese)\??$/i)||lower.match(/meaning\s+of\s+([a-z][a-z -]{1,30})/i);
  return direct?direct[1].trim().replace(/[?!.]+$/,''):null;
}
async function aiDefine(wordKey){
  if(COMMON_DEFS[wordKey]){
    return {definition:COMMON_DEFS[wordKey][0],vietnamese:COMMON_DEFS[wordKey][1],example:COMMON_DEFS[wordKey][2]};
  }
  if(VDB[wordKey]){
    return {definition:VDEF[wordKey]||`${wordKey} is a useful English word.`,vietnamese:VDB[wordKey][0],example:VDB[wordKey][1]};
  }
  try{
    const res=await fetch(DEFINE_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({word:wordKey})
    });
    if(!res.ok)throw new Error('Definition API unavailable');
    const parsed=await res.json();
    return {definition:parsed.definition||`${wordKey} is a useful English word.`,vietnamese:parsed.vietnamese||'',example:parsed.example||`I can use ${wordKey} in a sentence.`};
  }catch(e){
    return {
      definition:`${wordKey} is an English word outside this lesson list. It can still be useful in conversation.`,
      vietnamese:'từ ngoài bài học',
      example:`I can ask, "What does ${wordKey} mean?"`
    };
  }
}
async function handleVocabHelpTurn(text,wordKey){
  const info=VDB[wordKey];
  const known=!!info;
  if(known&&!state.seen.includes(wordKey))state.seen.push(wordKey);
  const effect={money:0,time:-6,stress:-4};
  addXP(15);
  const danger=applyDelta(effect);
  logStudyEvent('vocabulary_support',{method:'typed_clarification',text,word:wordKey,effect,danger});
  const def=known
    ? {definition:VDEF[wordKey]||`${wordKey} is a useful English word.`,vietnamese:info[0],example:info[1]}
    : await aiDefine(wordKey);
  const explanation=`<b>${esc(wordKey)}</b> means: ${esc(def.definition)}.<br>Vietnamese: <b>${esc(def.vietnamese||'')}</b><br>Example: ${esc(def.example||'')}`;
  const feedback=danger?`<div class="note dangerNote"><b>Danger crossed:</b> ${dangerMessage(danger)}</div>`:`<div class="note">Asked for vocabulary help. Impact: ${formatEffect(effect)} · XP +15.</div>`;
  addTurnPage({kind:'support',turn:state.turn,title:'Vocabulary Support',previousChoice:text,supportHtml:`${feedback}<div class="supportPageNote">${explanation}</div>`,scenario:(latestTurnPage()&&latestTurnPage().scenario)||''});
  $('responses').innerHTML=`<div class="small" style="text-align:center;padding:14px;color:var(--muted)">⏳ <em>Moving to the next moment…</em></div>`;
  if(state.turn>=TOTAL_TURNS){finishQuest();return true;}
  state.turn++;
  $('progress').style.width=(state.turn/TOTAL_TURNS*100)+'%';
  state.aiChoices=[];
  const requiredWords=vocabForTurn(state.turn);
  const nextScenario=await apiStory(requiredWords);
  if(!nextScenario)return true;
  rememberBeat(`Player asked vocabulary help: ${text}`);
  rememberBeat(nextScenario);
  addTurnPage({turn:state.turn,scenario:nextScenario,previousChoice:text,feedback:'Asked for vocabulary support before continuing.'});
  $('responses').innerHTML=choicePanelHtml('What do you do next?');
  maybeRecoveryDice();
  return true;
}
function submitFreeAnswer(){
  const box=$('freeAnswer'), text=(box&&box.value.trim())||'';
  if(!text)return alert('Type your answer first.');
  if(state.selectedIdea&&text.split(/\s+/).filter(Boolean).length<4)return alert('Please type a full response in English, not just one or two words.');
  const helpWord=vocabHelpWord(text);
  if(helpWord){handleVocabHelpTurn(text,helpWord);return;}
  state.lastPlayerAnswer=text;
  if(state.selectedIdea){
    const c=state.selectedIdea.choice;
    let appliedChoice=c, randomFeedback='';
    if(state.level?.id==='hotel'&&c.risky){
      const success=Math.random()<0.5;
      const picked=success?c.success:c.failure;
      appliedChoice=Object.assign({},c,picked,{text,randomResult:success?'success':'failure',risky:false,wasRisky:true});
      randomFeedback=`<b>50/50 result:</b> ${success?'Success':'Failure'}. Applied outcome: ${formatEffect(appliedChoice)} · XP +${appliedChoice.xp}. `;
    }
    addXP(appliedChoice.xp||20);
    const danger=applyDelta(appliedChoice);
    logStudyEvent('turn_response',{responseType:'typed_from_strategy',choiceIndex:state.selectedIdea.index,typedText:text,profile:responseProfile(text),choice:appliedChoice,danger});
    const resultLine=(randomFeedback||'')+(danger?'<b>Danger crossed:</b> '+dangerMessage(danger):'');
    const index=state.selectedIdea.index;
    state.selectedIdea=null;
    continueAfterAnswer(text,resultLine,danger,index,appliedChoice);
    return;
  }
  const rating=evaluateFreeAnswer(text);
  addXP(rating.xp);
  const effect=rating.effect;
  const danger=applyDelta(effect);
  logStudyEvent('turn_response',{responseType:'free_text',text,profile:responseProfile(text),rating,effect,danger});
  const resultLine=danger?'<b>Danger crossed:</b> '+dangerMessage(danger):'';
  continueAfterAnswer(text,resultLine,danger);
}
function outcomeLevel(){
  const c=levelRules();
  if(state.crossedDanger||state.money<c.dangerMoney||state.time<c.dangerTime||state.stress>c.dangerStress)return 'failed';
  if(state.money>=c.strongMoney&&state.time>=c.strongTime&&state.stress<=c.strongStress)return 'strong';
  return 'okay';
}
function finishQuest(){
  const outcome=outcomeLevel();let title='Quest complete',msg='You got through the situation, but there were costs.';
  if(outcome==='strong'){title='Strong success';msg='You protected your resources and communicated clearly.'}
  if(outcome==='failed'){title='Difficult ending';msg='A danger condition happened before the end, so the quest became harder.'}
  state.ending=title;$('dice').innerHTML='';
  addTurnPage({kind:'result',turn:state.turn,title,supportHtml:`<div class="card" style="margin:12px 0"><h3>${title}</h3><p class="small">${msg}</p><p class="small">Final: $${Math.round(state.money)} · ${resourceTwoName()} ${Math.round(state.time)}${resourceTwoUnit()} · Stress ${Math.round(state.stress)}/100</p></div>`});
  logStudyEvent('level_end',{level:state.level?.id,outcome,title,resources:resourceSnapshot(),seenWords:state.seen,attemptNumber:state.attempts[state.level?.id]||1});
  if(['airport','hotel'].includes(state.level?.id)&&outcome==='failed'){
    $('responses').innerHTML=`<div class="note dangerNote"><b>Not ready for the quiz yet.</b><br>You did not maintain your resources this time, so the vocabulary quiz stays locked. That is okay: replay the scenario, make a few calmer or more strategic choices, and try to keep Money above the line, ${resourceTwoName()} above the line, and Stress below the line.</div><button class="btn primary" style="width:100%;margin-top:10px" onclick="replay()">Replay Scenario</button><button class="btn ghost" style="width:100%;margin-top:8px" onclick="showMap()">Back to Level Map</button>`;
    return;
  }
  if(['airport','hotel'].includes(state.level?.id)){
    state.successfulAttempts[state.level.id]=state.attempts[state.level.id]||1;
    logStudyEvent('level_successful_attempt',{level:state.level.id,successfulAttemptNumber:state.successfulAttempts[state.level.id],resources:resourceSnapshot()});
    $('responses').innerHTML=`<div class="note"><b>Quiz unlocked.</b><br>Congratulations, ${esc(state.name)}. You managed to maintain your resources through the ${esc(state.level.name)} scenario. Now you can take the vocabulary quiz for this level.</div><div class="card" style="margin-top:12px;text-align:center"><div class="scoreBig" style="font-size:42px;margin:0 0 8px">✓</div><p class="small">Final resources: <b>$${Math.round(state.money)}</b> · <b>${resourceTwoName()} ${Math.round(state.time)}${resourceTwoUnit()}</b> · <b>Stress ${Math.round(state.stress)}/100</b></p><button class="btn primary" style="width:100%;margin-top:8px" onclick="startTest()">Take Vocabulary Quiz</button></div>`;
    return;
  }
  if(outcome==='failed'){
    $('responses').innerHTML='<div class="note dangerNote"><b>No vocabulary test yet.</b><br>You crossed a danger line, so the quest became a failed/difficult ending. Replay the level and manage your resources to unlock the test, or stop the study here.</div><button class="btn primary" style="width:100%;margin-top:10px" onclick="replay()">Replay This Level</button><button class="btn ghost" style="width:100%;margin-top:8px" onclick="stopStudy(\'stopped_after_failed_level\')">Stop Study</button><button class="btn ghost" style="width:100%;margin-top:8px" onclick="showMap()">Back to Level Map</button>';
  } else {
    $('responses').innerHTML='<button class="btn primary" style="width:100%" onclick="startTest()">Take Vocabulary Test</button><button class="btn ghost" style="width:100%;margin-top:8px" onclick="stopStudy(\'stopped_before_vocab_test\')">Stop Study</button>';
  }
}
function startTest(){
  if(state.quizRetryAfterReplay[state.level?.id]){
    state.quizRetryAfterReplay[state.level.id]=false;
    const useAlternate=state.currentAssessment?.form!=='replay_alt';
    if(state.level?.id==='airport'){startAirportTest(useAlternate);return;}
    if(state.level?.id==='hotel'){startHotelTest(useAlternate);return;}
    startAdaptiveRetest();
    return;
  }
  if(state.level?.id==='airport'){startAirportTest();return;}
  if(state.level?.id==='hotel'){startHotelTest();return;}
  const seen=state.seen.filter(w=>state.level.vocab.includes(w));
  const pool=[...seen,...state.level.vocab.filter(w=>!seen.includes(w))].slice(0,10);
  state.testType='standard';
  state.testWords=pool; state.answers=[];
  logStudyEvent('test_start',{level:state.level?.id,testWords:pool,total:7,passingScore:6,useQuestions:'unscored_hand_code_later'});
  const cards=pool.map((w,i)=>{
    if(i<4)return renderMcQuestion(w,i);
    if(i<7)return renderTypeQuestion(w,i);
    return renderUseQuestion(w,i);
  }).join('');
  $('testBox').innerHTML='<div class="note"><b>Part A:</b> choose the word. <b>Part B:</b> type it from memory. <b>Part C:</b> use it in your own sentence. Part C is saved for later hand-coding and is not auto-scored.<br><b>Auto-scored total:</b> 7 points. Passing score: 6/7.</div>'+cards+'<button class="btn primary" style="width:100%" onclick="submitTest()">Submit Test</button>';show('test');
}
function learnedTestPool(){
  const learned=state.seen.filter(w=>VDB[w]&&state.level?.vocab?.includes(w));
  const unique=[...new Set(learned)];
  return unique.slice(0,10);
}
function testVocabPool(){
  const pool=(state.testWords||[]).filter(w=>VDB[w]);
  return pool.length?pool:(state.level?.vocab||[]).filter(w=>VDB[w]);
}
function startAdaptiveRetest(){
  const pool=learnedTestPool();
  if(!pool.length){
    alert('No learned words were recorded yet. Please replay the scenario so the game can build a quiz from the words you see.');
    return;
  }
  state.testType='adaptive_retest';
  state.testWords=pool;
  state.answers=[];
  logStudyEvent('test_start',{level:state.level?.id,testType:'adaptive_retest',testWords:pool,total:Math.min(7,pool.length),passingScore:Math.min(6,pool.length),source:'seen_words_only'});
  const cards=pool.map((w,i)=>{
    if(i<Math.min(4,pool.length))return renderMcQuestion(w,i);
    if(i<Math.min(7,pool.length))return renderTypeQuestion(w,i);
    return renderUseQuestion(w,i);
  }).join('');
  $('testBox').innerHTML=`<div class="note"><b>New Quiz</b><br>This version uses only words you learned or saw in this scenario. Auto-scored total: <b>${Math.min(7,pool.length)}</b> points. Passing score: <b>${Math.min(6,pool.length)}</b>.</div>${cards}<button class="btn primary" style="width:100%" onclick="submitTest()">Submit Test</button>`;
  show('test');
}
function showRetestReview(score,total,passingScore,missed){
  if(state.level?.id)state.quizRetryAfterReplay[state.level.id]=true;
  $('reviewScore').textContent=`You scored ${score}/${total}. Passing score is ${passingScore}/${total}. Review these items, then replay the scenario. After you complete the turns again, the next quiz keeps the same structure but changes the questions and vocabulary.`;
  $('reviewWords').innerHTML=`<div class="card" style="margin:0"><b>Objective Sections</b><div class="small" style="margin-top:6px">These are the vocabulary and reading items to review.</div></div>${sectionedReviewHtml(missed)}${writingReviewHtml()}`;
  const btn=$('reviewActionBtn');
  if(btn){btn.textContent='Replay Scenario';btn.setAttribute('onclick','replay()');}
  show('review');
}
function showFailedQuizInline(score,total,passingScore){
  if(state.level?.id)state.quizRetryAfterReplay[state.level.id]=true;
  showInlineQuizResult(score,total,passingScore,false,'');
}
function renderMcQuestion(w,i){
  const wrong=testVocabPool().filter(x=>x!==w).sort(()=>Math.random()-.5).slice(0,3), opts=[w,...wrong].sort(()=>Math.random()-.5);
  return `<div class="card q" id="q${i}"><b>Question ${i+1}/10 · Choose</b><p>${testSentence(w).replace('___','<u>______</u>')}</p><input type="hidden" id="mc${i}" value="">${opts.map(o=>`<button type="button" class="btn row ans" data-option="${esc(o)}" onclick="selectMcChoice(${i},'${esc(o)}',this)">${esc(o)}</button>`).join('')}<div class="feedback" id="fb${i}" style="display:none"></div></div>`;
}
function selectMcChoice(i,picked,btn){
  const input=$('mc'+i);
  if(input)input.value=picked;
  const q=$('q'+i);
  if(q)q.querySelectorAll('button').forEach(b=>b.classList.remove('correct'));
  btn.classList.add('correct');
}
function renderTypeQuestion(w,i){
  const hint=w.split('').map((ch,idx)=>ch===' '?' / ':idx===0?ch.toUpperCase():'_').join(' ');
  return `<div class="card q" id="q${i}"><b>Question ${i+1}/10 · Type</b><p>${testSentence(w).replace('___','<u>______</u>')}</p><div class="small">Letter hint: ${hint}</div><input id="type${i}" style="margin-top:10px" placeholder="Type the English word"><div class="feedback" id="fb${i}" style="display:none"></div></div>`;
}
function renderUseQuestion(w,i){
  return `<div class="card q" id="q${i}"><b>Question ${i+1}/10 · Write a sentence</b><p>Write one natural sentence or request using the word <b>${esc(w)}</b>. Try to use other words you learned in the game too.</p><div class="small">You will receive AI feedback after you submit.</div><textarea id="use${i}" placeholder="Write your own sentence here using '${esc(w)}'..." style="margin-top:10px"></textarea><div class="feedback" id="fb${i}" style="display:none"></div></div>`;
}
function normalizeAnswer(s){return String(s).trim().toLowerCase().replace(/\s+/g,' ')}
function vietnameseLearnerWritingIssues(response){
  const text=String(response||'');
  const issues=[];
  const add=(type,note)=>issues.push({type,note});
  if(/\bi\s+does\b/i.test(text)||/\bi\s+doesn'?t\b/i.test(text))add('Subject-verb agreement','Use <b>I do / I do not</b>, not <b>I does / I doesn’t</b>.');
  if(/\b(she|he|it)\s+(go|need|want|have|say|ask|travel|arrive|pay|bring|keep)\b/i.test(text))add('Subject-verb agreement','For he/she/it in the present simple, add <b>-s</b>: <b>she needs</b>, <b>he goes</b>, <b>it costs</b>.');
  if(/\b(yesterday|last week|last month|ago)\b/i.test(text)&&/\b(go|arrive|pay|ask|need|travel|bring|take)\b/i.test(text)&&!/\b(went|arrived|paid|asked|needed|traveled|travelled|brought|took)\b/i.test(text))add('Verb tense','Past-time words like <b>yesterday</b> or <b>last week</b> usually need past-tense verbs.');
  if(/\b(next week|tomorrow|next month)\b/i.test(text)&&/\bwhen you are travel|when you travel to\b/i.test(text))add('Verb form','For future travel advice, <b>when you travel</b> or <b>when you are traveling</b> sounds more natural.');
  if(/\b(is|are|was|were|it is|water is|this is|liquid is|bottle is)\s+not\s+allow\b/i.test(text)||/\bnot\s+allow\s+at\b/i.test(text))add('Passive voice','Use <b>is not allowed</b>, not <b>is not allow</b>.');
  if(/\b(a|an)\s+(liquids|items|luggages|informations|advices)\b/i.test(text))add('Nouns and articles','Check singular/plural nouns. Use <b>some liquids</b>, <b>some advice</b>, or <b>some information</b>.');
  if(/\b(luggages|informations|advices)\b/i.test(text))add('Uncountable nouns','Use <b>luggage</b>, <b>information</b>, and <b>advice</b> without plural <b>-s</b>.');
  if(/\bgo\s+to\s+airport\b/i.test(text)||/\bat\s+airport\b/i.test(text))add('Articles','English usually needs an article here: <b>go to the airport</b>, <b>at the airport</b>.');
  if(/\bdepend\s+of\b/i.test(text)||/\bdiscuss\s+about\b/i.test(text)||/\benter\s+to\b/i.test(text)||/\barrive\s+to\s+the\s+(airport|hotel|gate)\b/i.test(text))add('Prepositions','Check prepositions: <b>depend on</b>, <b>discuss</b>, <b>enter</b>, and <b>arrive at</b> a place.');
  if(/\bsecurity check point\b/i.test(text))add('Word choice','Use the travel phrase <b>security checkpoint</b>, not <b>security check point</b>.');
  if(/\bmake\s+attention\b/i.test(text)||/\bpay\s+attention\s+to\s+the\s+boarding\s+pass\b/i.test(text))add('Collocation','Use natural collocations: <b>keep your boarding pass ready</b>, not <b>pay attention to the boarding pass</b>.');
  if(/\bcharged\s+overweight\s+fee\b/i.test(text))add('Word choice','Say <b>you may be charged an overweight fee</b> or <b>you may have to pay an overweight fee</b>.');
  if(/\btravelle|aiarport|secuirty|reciept|confrimation|reserveration\b/i.test(text))add('Spelling','Check spelling of travel words such as <b>travel</b>, <b>airport</b>, <b>security</b>, <b>receipt</b>, and <b>reservation</b>.');
  if(/,[^.!?]+,[^.!?]+,[^.!?]+/.test(text)||/\b(and|but|so)\s+you\b/i.test(text)&&text.length>120&&!/[.!?]/.test(text.slice(0,120)))add('Punctuation','Break long ideas into shorter sentences. Vietnamese learners often need clearer full stops, commas, and sentence boundaries in English.');
  if(!/[.!?]\s*$/.test(text)&&text.trim())add('Punctuation','Add final punctuation at the end of the message.');
  if(/\bcan not\b/i.test(text))add('Word form','In modern English, <b>cannot</b> or <b>can’t</b> is more natural than <b>can not</b>.');
  return issues;
}
function writingRubric(response,levelVocab){
  const text=String(response||'').trim();
  const words=text.split(/\s+/).filter(Boolean);
  const lower=text.toLowerCase();
  const usedWords=levelVocab.filter(w=>new RegExp('\\b'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(text));
  const weird=/\b(asdf|qwer|blah|random|nothing|idk|i don't know|dont know|test test|xxx)\b/i.test(text)||/(.)\1{5,}/.test(text);
  const rude=/\b(bitch|bitches|fuck|shit|stupid|idiot|shut up|go away|hate you)\b/i.test(text);
  const confusingMeaning=/\bpay\s+any\s+attention\s+to\s+the\s+boarding\s+pass\b/i.test(text)||(/\bboarding\s+pass\b/i.test(text)&&/\byou\s+will\s+lose\s+it\b/i.test(text))||/\bthrow\s+away\s+your\s+bottle\s+of\s+water\b/i.test(text);
  const grammarIssues=[];
  const commonIssues=vietnameseLearnerWritingIssues(text);
  if(/\bi\s+does\b/i.test(text))grammarIssues.push('use "I do", not "I does"');
  if(/\bi\s+doesn'?t\b/i.test(text))grammarIssues.push('use "I do not/I don’t", not "I doesn’t"');
  if(/\b(is|are|was|were|it is|water is|this is)\s+not\s+allow\b/i.test(text)||/\bnot\s+allow\s+at\b/i.test(text))grammarIssues.push('use "is not allowed", not "is not allow"');
  if(/\btravelle|travelled?e|aiarport|secuirty|check point\b/i.test(text))grammarIssues.push('check spelling/word form: "travel", "airport", and "security checkpoint"');
  if(/\bshe\s+love\b/i.test(text))grammarIssues.push('use "she loves", not "she love"');
  if(/\botherwise\s+they\s+would\s+ask\b/i.test(text))grammarIssues.push('use "otherwise they may ask", not "otherwise they would ask"');
  if(/\bi\b/.test(text))grammarIssues.push('capitalize "I"');
  if(!/[.!?]\s*$/.test(text))grammarIssues.push('add end punctuation');
  commonIssues.filter(i=>['Subject-verb agreement','Verb tense','Verb form','Passive voice','Articles','Prepositions','Punctuation','Nouns and articles','Uncountable nouns'].includes(i.type)).slice(0,3).forEach(i=>{
    const plain=i.note.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
    if(!grammarIssues.some(g=>plain.includes(g.replace(/"/g,''))||g.includes(plain.slice(0,24))))grammarIssues.push(plain);
  });
  let score=0;
  const rows=[];
  const add=(label,point,reason)=>{score+=point;rows.push({label,point,reason});};
  add('Length',(!weird&&words.length>=35&&words.length<=100)?1:0,words.length>=35&&words.length<=100?'enough detail for the task':`too ${words.length<35?'short':'long'} for a 50-80 word message`);
  add('Topic',(!weird&&!rude&&/\b(airport|flight|gate|security|boarding|hotel|room|front desk|reservation|check|deposit|bill)\b/i.test(text))?1:0,rude?'inappropriate language for a WhatsApp advice message':'message should clearly match the scenario');
  add('Vocabulary',(!weird&&usedWords.length>=3)?1:0,usedWords.length?`used ${usedWords.slice(0,4).join(', ')}`:'no target vocabulary used');
  add('Grammar',(!weird&&grammarIssues.length===0&&/^[A-Z]/.test(text))?1:0,grammarIssues.length?grammarIssues.slice(0,3).join('; '):'capitalization, punctuation, and basic sentence control');
  add('Clarity',(!weird&&!rude&&!confusingMeaning&&words.length>=20&&text.split(/[.!?]+/).filter(s=>s.trim()).length>=2)?1:0,rude?'tone is not appropriate for a friend advice message':confusingMeaning?'one sentence gives confusing or inaccurate advice':'clear message with more than one complete idea');
  return {score,rows,usedWords,wordCount:words.length,max:5};
}
function writingRubricHtml(rubric){
  return `<div class="note" style="margin-top:10px"><b>Writing rubric: ${rubric.score}/${rubric.max}</b><br>${rubric.rows.map(r=>`${r.point?'✓':'✗'} <b>${esc(r.label)}</b>: ${esc(r.reason)} (${r.point}/1)`).join('<br>')}</div>`;
}
function fallbackWritingFeedback(response,levelVocab,levelId){
  const text=String(response||'');
  const usedWords=levelVocab.filter(w=>new RegExp('\\b'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(text));
  const lower=text.toLowerCase();
  const commonIssues=vietnameseLearnerWritingIssues(text);
  const meaningProblems=[];
  if(/\bwater\b/i.test(text)&&/\bsecurity check ?point\b/i.test(text)){
    meaningProblems.push('At security, the main issue is <b>liquids</b>, not all water or all bottles. Clearer advice: <b>Do not bring large liquids through the security checkpoint. Empty your bottle first, then refill it after security.</b>');
  }
  if(/\bsecurity check point\b/i.test(text)){
    meaningProblems.push('Word choice: write <b>security checkpoint</b> as one phrase, not "security check point".');
  }
  if(/\borganize your stuff\b/i.test(text)||/\borganise your stuff\b/i.test(text)){
    meaningProblems.push('Word choice: "organize your stuff" is understandable, but the airport word is more precise: <b>reorganize your luggage</b> or <b>move items into your carry-on</b>.');
  }
  if(/\bcharged overweight fee\b/i.test(text)){
    meaningProblems.push('Grammar/word choice: say <b>you will be charged an overweight fee</b> or <b>you may have to pay an overweight fee</b>.');
  }
  if(/\bdoes not have any water with you\b/i.test(text)||/\bdo not have any water with you\b/i.test(text)){
    meaningProblems.push('Meaning/word choice: instead of "do not have any water with you," say <b>do not bring large liquids through security</b>. Empty bottles are usually allowed.');
  }
  if(/\botherwise\s+they\s+would\s+ask\b/i.test(text)){
    meaningProblems.push('Grammar: for advice, <b>otherwise they may ask you to remove it</b> is more natural than "otherwise they would ask".');
  }
  if(/\bbye girl\b/i.test(text)){
    meaningProblems.push('Tone: "Bye girl" is friendly, but for a study writing task it may sound too casual. A clearer WhatsApp ending is <b>Hope this helps!</b>');
  }
  if(/\bpay\s+any\s+attention\s+to\s+the\s+boarding\s+pass\b/i.test(text)||/\bboarding\s+pass\b/i.test(text)&&/\byou\s+will\s+lose\s+it\b/i.test(text)){
    meaningProblems.push('Meaning: "we cannot pay attention to the boarding pass because you will lose it" is confusing. Better: <b>Keep your boarding pass safe and ready because you need it at the gate.</b>');
  }
  if(/\bthrow\s+away\s+your\s+bottle\s+of\s+water\b/i.test(text)){
    meaningProblems.push('Meaning: at airport security, the problem is usually the liquid, not the empty bottle. Better: <b>Empty your water bottle before security, then refill it after security.</b>');
  }
  const suggestions=levelId==='hotel'
    ? ['reservation','deposit','receipt','front desk','late check-out']
    : ['boarding pass','gate','security checkpoint','carry-on','final boarding call'];
  const available=suggestions.filter(w=>levelVocab.includes(w)).slice(0,3);
  const grammar=[];
  if(/\b(bitch|bitches|fuck|shit|stupid|idiot|shut up|go away|hate you)\b/i.test(text))grammar.push('avoid rude or inappropriate words in this study task');
  if(/\bi\s+does\b/i.test(text))grammar.push('write <b>I do</b>, not <b>I does</b>');
  if(/\bi\s+doesn'?t\b/i.test(text))grammar.push('write <b>I don’t</b>, not <b>I doesn’t</b>');
  if(/\b(is|are|was|were|it is|water is|this is)\s+not\s+allow\b/i.test(text)||/\bnot\s+allow\s+at\b/i.test(text))grammar.push('write <b>is not allowed</b>, not <b>is not allow</b>');
  if(/\btravelle|travelled?e|aiarport|secuirty\b/i.test(text))grammar.push('check spelling: <b>travel</b>, <b>airport</b>, and <b>security</b>');
  if(/\bshe\s+love\b/i.test(text))grammar.push('write <b>she loves</b>, not <b>she love</b>');
  if(/\bi\b/.test(text))grammar.push('capitalize <b>I</b>');
  if(!/[.!?]\s*$/.test(text))grammar.push('add end punctuation');
  commonIssues.filter(i=>['Subject-verb agreement','Verb tense','Verb form','Passive voice','Articles','Prepositions','Punctuation','Nouns and articles','Uncountable nouns'].includes(i.type)).slice(0,4).forEach(i=>grammar.push(i.note));
  const grammarLine=grammar.length?`Grammar: ${grammar.slice(0,3).join('; ')}.`:'Grammar: your basic sentence grammar is understandable, but check meaning and word choice.';
  const vocabLine=usedWords.length
    ? `Vocabulary: you used ${usedWords.map(w=>`<b>${w}</b>`).join(', ')}.`
    : `Vocabulary: you used no target words yet. Add words like ${available.map(w=>`<b>${w}</b>`).join(', ')}.`;
  const missing=available.filter(w=>!usedWords.includes(w)).slice(0,2);
  const topicLine=levelId==='hotel'
    ? 'Topic: your message should give practical hotel check-in advice to a friend.'
    : 'Topic: your message should give practical airport advice to a friend.';
  const example=levelId==='hotel'
    ? 'Example: <b>Hey! At the hotel, keep your reservation and credit card ready. Ask the front desk about the deposit and keep your receipt.</b>'
    : 'Better version: <b>Hi sister, when you travel next week, remember that large liquids cannot go through the security checkpoint. Keep your boarding pass ready, and if your bag is too heavy, reorganize your luggage or move items into your carry-on so you do not pay an overweight fee. Hope this helps!</b>';
  const meaningLine=meaningProblems.length?meaningProblems.join(' '):'Meaning: make sure each sentence gives useful advice for the real travel situation.';
  const commonIssueLine=commonIssues.length?`<br><b>Common Vietnamese learner patterns to check:</b> ${commonIssues.slice(0,4).map(i=>`<b>${i.type}</b>: ${i.note}`).join(' ')}`:'';
  const nextStep=missing.length?`Next time, try adding ${missing.map(w=>`<b>${w}</b>`).join(' and ')} if it fits your message.`:'You included several useful target words.';
  return `<b>Vocabulary:</b> ${vocabLine}<br><b>Meaning and clarity:</b> ${meaningLine}<br><b>Grammar:</b> ${grammarLine}${commonIssueLine}<br><b>Audience:</b> ${topicLine} ${nextStep}<br>${example}`;
}
function writingSafetyCorrections(response){
  const text=String(response||'');
  const notes=[];
  vietnameseLearnerWritingIssues(text).slice(0,5).forEach(i=>notes.push(`<b>${i.type}:</b> ${i.note}`));
  if(/\bi\s+does\b/i.test(text))notes.push('Grammar: write <b>I do not know</b>, not <b>I does not know</b>.');
  if(/\b(is|are|was|were|it is|water is|this is)\s+not\s+allow\b/i.test(text)||/\bnot\s+allow\s+at\b/i.test(text))notes.push('Grammar: use the passive form <b>is not allowed</b>. Better: <b>Water is not allowed through airport security.</b>');
  if(/\btravelle\b/i.test(text))notes.push('Spelling/word form: write <b>travel</b> or <b>traveling</b>, not <b>travelle</b>.');
  if(/\baiarport\b/i.test(text))notes.push('Spelling: write <b>airport</b>, not <b>aiarport</b>.');
  if(/\bsecuirty\b/i.test(text))notes.push('Spelling: write <b>security</b>, not <b>secuirty</b>.');
  if(/\bsecurity check point\b/i.test(text))notes.push('Word choice: write <b>security checkpoint</b> as one phrase.');
  if(/\botherwise\s+they\s+would\s+ask\b/i.test(text))notes.push('Grammar: for advice, <b>otherwise they may ask you to remove it</b> is more natural.');
  if(/\bby girl\b/i.test(text))notes.push('Tone/spelling: write <b>Bye</b>, not <b>By</b>, but for advice <b>Hope this helps!</b> sounds better.');
  if(/\bdo not bring water\b/i.test(text)||/\bwater\b/i.test(text)&&/\bnot allowed?\b/i.test(text)){
    notes.push('Meaning: the airport rule is about <b>large liquids before security</b>. Clearer advice: <b>Do not bring large liquids through the security checkpoint. You can refill or buy water after security.</b>');
  }
  if(!notes.length)return '';
  return `<div class="note dangerNote" style="margin-top:10px"><b>Important corrections</b><br>${notes.join('<br>')}</div>`;
}
function showInlineQuizResult(score,total,passingScore,passed,onContinue){
  sound(passed?'quizPass':'quizFail');
  let panel=$('quizResultPanel');
  if(!panel){
    panel=document.createElement('div');
    panel.id='quizResultPanel';
    panel.className='card';
    panel.style.marginTop='14px';
    $('testBox').appendChild(panel);
  }
  panel.innerHTML=`<div class="scoreBig" style="font-size:42px;margin:0 0 8px">${score}/${total}</div><div class="note ${passed?'':'dangerNote'}"><b>${passed?'Passed':'Not passed yet'}.</b><br>${passed?'Review the feedback above, then continue.':'Review the correct answers and writing feedback above. Then replay the scenario. The next quiz keeps the same structure, but uses different questions and vocabulary from the level.'}</div><button class="btn primary" style="width:100%;margin-top:8px" onclick="${passed?onContinue:'replay()'}">${passed?'Continue':'Replay Scenario'}</button>`;
  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function finishPassedTest(score,total,extra=''){
  state.unlocked=Math.max(state.unlocked,state.level.num+1);
  renderCompletionMoment();
  $('finalScore').textContent=score+'/'+total;
  $('finalText').textContent=studyCompletionText(true);
  $('finalResources').innerHTML=`Final resources: <b>$${Math.round(state.money)}</b> · <b>${Math.round(state.time)} min</b> · <b>Stress ${Math.round(state.stress)}/100</b><br>${extra}Study data events saved: <b>${state.eventCount}</b>`;
  show('end');
}
function renderCompletionMoment(){
  const bothComplete=levelPassed('airport')&&levelPassed('hotel');
  const hero=$('completionHero');
  if(hero)hero.innerHTML=bothComplete
    ?`<div class="journeyComplete"><div class="journeyCompleteIcon">🌏</div><h3>Journey Complete</h3><p>You completed the Airport and Hotel missions and finished your English travel journey.</p></div>`
    :`<div class="journeyComplete"><div class="journeyCompleteIcon">🛂</div><h3>Passport Stamped</h3><p>${esc(state.level?.name||'This level')} is complete. Your next destination is ready on the level map.</p></div>`;
  renderPassportStamps('passportStamps');
}
const AIRPORT_MATCH_ITEMS=[
  {word:'overweight fee',answer:'a'},
  {word:'boarding pass',answer:'b'},
  {word:'priority boarding',answer:'c'},
  {word:'carry-on',answer:'d'},
  {word:'gate',answer:'e'},
  {word:'security checkpoint',answer:'f'}
];
const AIRPORT_DEFS=[
  ['a','extra charge for heavy luggage'],
  ['b','document that lets you board the plane'],
  ['c','permission to board early'],
  ['d','small bag you keep with you on the plane'],
  ['e','the door where you board your plane'],
  ['f','the area where bags and passengers are screened'],
  ['k','a paid ride inside the airport'],
  ['l','a small meal before boarding'],
  ['m','a paper showing what you paid']
];
const AIRPORT_FILL_ITEMS=[
  {answer:'liquids',sentence:'Bottles of water and shampoo are examples of __________.'},
  {answer:'water station',sentence:'After security, you can refill your bottle at a free __________.'},
  {answer:'final boarding call',sentence:'The __________ is the last announcement before the plane doors close.'},
  {answer:['overhead bin','flight attendant'],sentence:'If the __________ near your seat is full, ask a __________ for help.'}
];
const AIRPORT_READING_TF=[
  {statement:'The passenger had a large water bottle before security.',answer:'true',explain:'The passage says the passenger arrived with a large water bottle that was full.'},
  {statement:'The security officer said large liquids were not allowed.',answer:'true',explain:'The officer says liquids over 100ml are not allowed.'},
  {statement:'The passenger threw away the empty bottle.',answer:'false',explain:'The passenger emptied the water, but kept the empty bottle because empty bottles were allowed.'},
  {statement:'The passenger refilled the bottle after security.',answer:'true',explain:'After security, the passenger found a water station and refilled the bottle.'},
  {statement:'The passenger missed the final boarding call.',answer:'false',explain:'The passenger arrived just before the final boarding call and boarded on time.'}
];
const AIRPORT_MATCH_ITEMS_ALT=[
  {word:'reprint fee',answer:'a'},
  {word:'barcode',answer:'b'},
  {word:'airline app',answer:'c'},
  {word:'overhead bin',answer:'d'},
  {word:'shuttle',answer:'e'},
  {word:'food court',answer:'f'}
];
const AIRPORT_DEFS_ALT=[
  ['a','money paid to print a new boarding pass'],
  ['b','the code staff scan on a ticket or phone'],
  ['c','a phone app from the airline'],
  ['d','the storage space above passenger seats'],
  ['e','a bus or vehicle that moves passengers between airport areas'],
  ['f','an airport area with several places to buy food'],
  ['k','a passport stamp'],
  ['l','a person who cleans the plane'],
  ['m','a small hotel room']
];
const AIRPORT_FILL_ITEMS_ALT=[
  {answer:'electronics',sentence:'At security, laptops and phones are examples of __________.'},
  {answer:'tray',sentence:'Put your laptop and small items in a __________ before the scanner.'},
  {answer:'travel-size',sentence:'A small 100ml bottle for flights is called __________.'},
  {answer:['personal item','purchase'],sentence:'A small bag under your seat is a __________, and snacks are available for __________ after takeoff.'}
];
const AIRPORT_READING_TF_ALT=[
  {statement:'The passenger could not find the boarding pass on paper.',answer:'true',explain:'The passage says she could not find the paper boarding pass and opened the airline app.'},
  {statement:'The barcode in the airline app helped the officer scan the ticket.',answer:'true',explain:'The officer scanned the barcode from the airline app.'},
  {statement:'The passenger put a laptop in a tray at security.',answer:'true',explain:'The passage says she put her laptop and phone in a tray.'},
  {statement:'The passenger carried a 500ml shampoo bottle through security.',answer:'false',explain:'The bottle was travel-size, so it was allowed. The passage does not say it was 500ml.'},
  {statement:'The passenger used the overhead bin for a small bag after boarding.',answer:'true',explain:'On the plane, she put her small bag in the overhead bin.'}
];
const AIRPORT_READING_PASSAGE_ALT='A passenger cannot find the paper boarding pass, so she opens the airline app on her phone. The check-in officer scans the barcode and lets her continue. At the security checkpoint, she puts her laptop and phone in a tray because electronics must be checked separately. She has one travel-size shampoo bottle, so the officer says it is allowed. After security, she buys a snack at the food court. On the plane, she puts her small bag in the overhead bin and keeps her passport in her personal item.';
function airportAssessmentForm(useAlternate=false){
  return useAlternate
    ? {form:'replay_alt',matchItems:AIRPORT_MATCH_ITEMS_ALT,defs:AIRPORT_DEFS_ALT,fillItems:AIRPORT_FILL_ITEMS_ALT,readingItems:AIRPORT_READING_TF_ALT,passage:AIRPORT_READING_PASSAGE_ALT,wordBox:['electronics','tray','travel-size','personal item','purchase','gate check'],notice:'Replay quiz: same structure, new airport words from the scenario.'}
    : {form:'original',matchItems:AIRPORT_MATCH_ITEMS,defs:AIRPORT_DEFS,fillItems:AIRPORT_FILL_ITEMS,readingItems:AIRPORT_READING_TF,passage:'A passenger arrives at the airport with a large water bottle. The bottle is full, and he wants to drink water before his flight. At the security checkpoint, an officer looks at the bottle and says, “Liquids over 100ml are not allowed.” The passenger empties the water into a bin, but he keeps the empty bottle because empty bottles are allowed. He puts the bottle in his bag and goes through security. After security, he finds a water station and refills his bottle. Then he walks to his gate. He arrives just before the final boarding call and boards the plane on time.',wordBox:['liquids','water station','final boarding call','overhead bin','flight attendant','passport'],notice:'This test covers only the 10 core Airport words.'};
}
function meaningOptions(defs,correctLetter,index,count=3){
  const correct=defs.find(d=>d[0]===correctLetter);
  const wrong=defs.filter(d=>d[0]!==correctLetter);
  const picked=[correct];
  for(let step=0;picked.length<count&&step<wrong.length*2;step++){
    const candidate=wrong[(index+step*3)%wrong.length];
    if(candidate&&!picked.some(d=>d[0]===candidate[0]))picked.push(candidate);
  }
  for(let j=picked.length-1;j>0;j--){
    const k=Math.floor(Math.random()*(j+1));
    [picked[j],picked[k]]=[picked[k],picked[j]];
  }
  return picked
    .map((def,optionIndex)=>({letter:['a','b','c'][optionIndex],value:def[0],definition:def[1]}));
}
function fixedMatchOptions(prefix,item,index,defs){
  if(prefix==='hotel'&&HOTEL_MATCH_OPTIONS[item.word]){
    const opts=HOTEL_MATCH_OPTIONS[item.word].map(([value,definition])=>({value,definition}));
    return opts.map((opt,optionIndex)=>Object.assign({letter:['a','b','c'][optionIndex]},opt));
  }
  return meaningOptions(defs,item.answer,index);
}
function matchChoiceCards(prefix,items,defs){
  return items.map((item,i)=>{
    const opts=fixedMatchOptions(prefix,item,i,defs);
    return `<div style="border:2px solid var(--line);border-radius:14px;background:#fff;padding:12px;display:grid;gap:9px;align-content:start">
      <div class="small" style="font-weight:900;color:var(--green)">Word ${i+1}</div>
      <div style="font-size:18px;font-weight:900">${esc(item.word)}</div>
      <input type="hidden" id="${prefix}Match${i}" value="">
      ${opts.map(o=>`<button type="button" class="btn row ans" data-value="${esc(o.value)}" style="margin:0;padding:9px 10px;font-size:13px" onclick="selectMatchChoice('${prefix}',${i},'${o.value}',this)"><b>${o.letter}.</b> ${esc(o.definition)}</button>`).join('')}
    </div>`;
  }).join('');
}
function selectMatchChoice(prefix,index,value,btn){
  const input=$(prefix+'Match'+index);
  if(input)input.value=value;
  const card=btn.closest('div');
  if(card)card.querySelectorAll('button').forEach(b=>b.classList.remove('correct'));
  btn.classList.add('correct');
}
function revealMatchResults(prefix,items){
  items.forEach((item,i)=>{
    const input=$(prefix+'Match'+i);
    const picked=(input&&input.value)||'';
    const card=input&&input.parentElement;
    if(!card)return;
    card.querySelectorAll('button').forEach(btn=>{
      btn.disabled=true;
      const value=btn.dataset.value||'';
      if(value===item.answer)btn.classList.add('correct');
      else if(value===picked)btn.classList.add('wrong');
    });
    card.insertAdjacentHTML('beforeend',`<div class="feedback" style="display:block">${picked===item.answer?'Correct.':'Correct answer highlighted above.'}</div>`);
  });
}
function startAirportTest(useAlternate=false){
  const form=airportAssessmentForm(useAlternate);
  state.currentAssessment=form;
  state.testType='airport_short';
  state.testWords=form.matchItems.map(i=>i.word).concat(form.fillItems.map(i=>i.answer));
  state.answers=[];
  logStudyEvent('test_start',{level:state.level?.id,testType:'airport_short',testForm:form.form,total:20,passingScore:16,attemptNumber:state.attempts[state.level.id],testWords:state.testWords});
  const matchCards=matchChoiceCards('airport',form.matchItems,form.defs);
  const fillRows=form.fillItems.map((item,i)=>{
    if(Array.isArray(item.answer)){
      return `<div class="q" style="margin:12px 0"><p style="margin-bottom:8px">${i+1}. ${esc(item.sentence).replace(/__________/g,'<u>__________</u>')}</p><input id="airportFill${i}_0" placeholder="First answer"><input id="airportFill${i}_1" placeholder="Second answer" style="margin-top:8px"></div>`;
    }
    return `<div class="q" style="margin:12px 0"><p style="margin-bottom:8px">${i+1}. ${esc(item.sentence).replace('__________','<u>__________</u>')}</p><input id="airportFill${i}" placeholder="Type the answer"></div>`;
  }).join('');
  const tfRows=form.readingItems.map((item,i)=>`<div id="airportTfCard${i}" style="border:2px solid var(--line);border-radius:14px;background:#fff;padding:12px;margin-top:10px">
      <div style="font-weight:900;margin-bottom:9px">${i+1}. ${esc(item.statement)}</div>
      <select id="airportTf${i}" style="width:100%;padding:9px;border:2px solid var(--line);border-radius:10px;font-size:15px;background:#fff">
        <option value="">Choose True or False...</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <div id="airportTfFb${i}"></div>
    </div>`).join('');
  $('testBox').innerHTML=`
    <div class="note"><b>Airport Vocabulary Test</b><br>20 points total. Passing score: <b>16/20</b>. ${esc(form.notice)}</div>
    <div class="card q"><b>Part 1: Matching · 6 points</b>
      <div class="small" style="margin:7px 0 12px">Choose the best meaning from the options shown. Some meanings from the full list are not used here.</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px">${matchCards}</div>
    </div>
    <div class="card q"><b>Part 2: Cloze · 4 points</b>
      <div class="small" style="margin:7px 0 10px">Complete each sentence with a word from the box. One word is not used.</div>
      <div class="chips" style="margin-bottom:10px">${form.wordBox.map(w=>`<span class="chip">${esc(w)}</span>`).join('')}</div>
      ${fillRows}
    </div>
    <div class="card q"><b>Part 3: True / False · 5 points</b>
      <div class="small" style="margin:7px 0 10px">Read the passage. Then choose True or False for each sentence.</div>
      <div class="note" style="margin-top:10px">${esc(form.passage)}</div>
      ${tfRows}
    </div>
    <div class="card q"><b>Part 4: Writing Task · unscored</b>
      <div class="note helperText" style="margin-top:10px"><b>📱 WhatsApp message to a friend · 5 points</b><br><br>Your friend is travelling abroad alone for the first time next month. Write them a short WhatsApp message (50–80 words) explaining what to expect at the airport and which English words they should know before they go.<br><br><b>Requirements:</b> use at least three airport words from this level, stay on the airport topic, write clearly and politely, use correct grammar, and avoid rude or unrelated language. This writing task is graded with a 5-point rubric and you will receive feedback on vocabulary, grammar, word choice, and clarity.</div>
      <textarea id="airportProduction" onpaste="blockPaste(event)" placeholder="Write your WhatsApp message here. For example: Hey! Before your trip, here are some words you need to know at the airport..." style="min-height:130px"></textarea>
      <div class="impact">Rubric: length 1 · topic 1 · vocabulary 1 · grammar 1 · clarity/tone 1. Use words like: boarding pass, check-in, carry-on, gate, security checkpoint, overweight fee.</div>
    </div>
    <button class="btn primary" style="width:100%" onclick="submitTest()">Submit Test</button>`;
  show('test');
}
async function aiFeedbackForProduction(response,levelVocab,levelId){
  const learnedVocab=state.seen.filter(w=>levelVocab.includes(w));
  const vocabList=(learnedVocab.length?learnedVocab:levelVocab).slice(0,20).join(', ');
  const location=levelId==='hotel'?'hotel':'airport';
  const wordCount=response.trim().split(/\s+/).filter(Boolean).length;
  const rubric=writingRubric(response,levelVocab);
  const usedWords=levelVocab.filter(w=>new RegExp('\\b'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i').test(response));
  const safety=writingSafetyCorrections(response);
  const cleanAiField=(value,label)=>esc(String(value||'').replace(new RegExp('^\\s*'+label+'\\s*:\\s*','i'),'').trim());
  const fallbackNote='<div class="note dangerNote" style="margin-top:10px"><b>AI feedback is temporarily unavailable.</b><br>The game has provided basic feedback instead. Please let the researcher know after completing this page.</div>';
  try{
    const res=await fetch(WRITING_FEEDBACK_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        response,
        levelId,
        prompt:`Write a 50-80 word WhatsApp message to a friend explaining what to expect at the ${location} and which English words they should know.`,
        levelVocab:(learnedVocab.length?learnedVocab:levelVocab).slice(0,30),
        usedWords,
        rubric,
        wordCount
      })
    });
    if(!res.ok)throw new Error();
    const data=await res.json();
    if(data.meaning||data.revised){
      const provider=data.provider?`<div class="small" style="margin-bottom:8px;color:var(--green);font-weight:900">AI feedback generated by ${esc(data.provider)}</div>`:'';
      return `${provider}<b>Vocabulary:</b> ${cleanAiField(data.vocabulary,'Vocabulary')||'No vocabulary comment returned.'}<br>
      <b>Meaning:</b> ${cleanAiField(data.meaning,'Meaning')||'No meaning problem found.'}<br>
      <b>Grammar:</b> ${cleanAiField(data.grammar,'Grammar')||'Grammar is mostly understandable.'}<br>
      <b>Word choice:</b> ${cleanAiField(data.wordChoice,'Word choice')||'No word-choice comment returned.'}<br>
      <b>Better version:</b> ${cleanAiField(data.revised,'Better version')||''}<br>
      <b>Keep going:</b> ${cleanAiField(data.encouragement,'Keep going')||'Good effort. Keep improving your message step by step.'}${safety}`;
    }
    return fallbackWritingFeedback(response,levelVocab,levelId)+safety+fallbackNote;
  }catch(e){
    return fallbackWritingFeedback(response,levelVocab,levelId)+safety+fallbackNote;
  }
}
function revealTrueFalseResults(prefix,items){
  items.forEach((item,i)=>{
    const select=$(prefix+'Tf'+i);
    const card=$(prefix+'TfCard'+i);
    const fb=$(prefix+'TfFb'+i);
    if(!select||!fb)return;
    const picked=select.value||'not answered';
    const ok=picked===item.answer;
    select.disabled=true;
    if(card){
      card.style.borderColor=ok?'#27ae60':'var(--red)';
      card.style.background=ok?'#f7fff9':'#fff8f8';
    }
    const correctLabel=item.answer==='true'?'True':'False';
    const pickedLabel=picked==='true'?'True':picked==='false'?'False':'not answered';
    fb.className='tfFeedback '+(ok?'good':'bad');
    fb.innerHTML=ok
      ? `<b>Good.</b> ${esc(item.explain||'This answer matches the passage.')}`
      : `<b>Not quite.</b> You chose <b>${esc(pickedLabel)}</b>, but the answer is <b>${correctLabel}</b>. ${esc(item.explain||'Check the passage again for the evidence.')}`;
  });
}
async function submitAirportTest(){
  const form=state.currentAssessment||airportAssessmentForm(false);
  const submitBtn=document.querySelector('#testBox .btn.primary');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent='Scoring and getting feedback…';}
  const details=[];
  let score=0;
  form.matchItems.forEach((item,i)=>{
    const picked=($('airportMatch'+i)||{}).value||'';
    const ok=picked===item.answer;
    if(ok)score++;
    details.push({part:'match',word:item.word,picked,correct:item.answer,points:ok?1:0});
  });
  revealMatchResults('airport',form.matchItems);
  form.fillItems.forEach((item,i)=>{
    if(Array.isArray(item.answer)){
      const picked=[normalizeAnswer(($('airportFill'+i+'_0')||{}).value||''),normalizeAnswer(($('airportFill'+i+'_1')||{}).value||'')];
      const ok=picked[0]===normalizeAnswer(item.answer[0])&&picked[1]===normalizeAnswer(item.answer[1]);
      if(ok)score++;
      details.push({part:'fill_blank',word:item.answer.join(' + '),picked:picked.join(' + '),correct:item.answer.join(' + '),points:ok?1:0});
      return;
    }
    const picked=normalizeAnswer(($('airportFill'+i)||{}).value||'');
    const ok=picked===normalizeAnswer(item.answer);
    if(ok)score++;
    details.push({part:'fill_blank',word:item.answer,picked,correct:item.answer,points:ok?1:0});
  });
  form.readingItems.forEach((item,i)=>{
    const picked=($('airportTf'+i)||{}).value||'';
    const ok=picked===item.answer;
    if(ok)score++;
    details.push({part:'reading_true_false',question:item.statement,picked,correct:item.answer,explanation:item.explain,points:ok?1:0});
  });
  revealTrueFalseResults('airport',form.readingItems);
  const production=($('airportProduction')||{}).value||'';
  const productionPrompt='WhatsApp message: explain airport experience and vocabulary to a friend (50-80 words)';
  const wordCount=production.trim().split(/\s+/).filter(Boolean).length;
  // Show feedback loading state
  const prodCard=($('airportProduction')||{}).closest&&($('airportProduction')).closest('.card.q');
  let feedbackEl=null;
  if(prodCard){
    feedbackEl=document.createElement('div');
    feedbackEl.className='feedback';
    feedbackEl.style.display='block';
    feedbackEl.innerHTML='<span class="small" style="color:var(--muted)">Getting AI feedback on your writing…</span>';
    prodCard.appendChild(feedbackEl);
  }
  let productionFeedback='';
  const writingRubricResult=writingRubric(production,state.level.vocab);
  if(production.trim()){
    productionFeedback=await aiFeedbackForProduction(production,state.level.vocab,'airport')||'';
    if(feedbackEl&&productionFeedback)feedbackEl.innerHTML=`<div style="margin-top:4px"><b>Writing Feedback</b><br>${productionFeedback}</div>${writingRubricHtml(writingRubricResult)}`;
  }else if(feedbackEl){
    feedbackEl.innerHTML='No writing submitted for this task.'+writingRubricHtml(writingRubricResult);
  }
  state.lastWritingReview={section:'Writing Task',response:production,feedback:productionFeedback,rubric:writingRubricResult,wordCount};
  details.push({part:'production_rubric',prompt:productionPrompt,picked:production,wordCount,aiFeedback:productionFeedback,points:writingRubricResult.score,maxPoints:5,rubric:writingRubricResult});
  state.answers=details;
  const totalScore=score+writingRubricResult.score;
  const total=20;
  const passingScore=16;
  const passed=totalScore>=passingScore;
  state.scores[state.level.id]=Math.max(state.scores[state.level.id]||0,totalScore);
  addXP(totalScore*5);
  logStudyEvent('test_submit',{level:state.level?.id,testType:'airport_short',testForm:form.form,score:totalScore,objectiveScore:score,writingScore:writingRubricResult.score,total,passingScore,passed,attemptNumber:state.attempts[state.level.id],successfulAttemptNumber:state.successfulAttempts[state.level.id],answers:details});
  if(passed){
    state.successfulAttempts[state.level.id]=state.attempts[state.level.id];
    showInlineQuizResult(totalScore,total,passingScore,true,`finishPassedTest(${totalScore},${total},'Writing rubric: ${writingRubricResult.score}/5.<br>')`);
    return;
  }
  showFailedQuizInline(totalScore,total,passingScore);
}
const HOTEL_MATCH_ITEMS=[
  {word:'reservation',answer:'c'},
  {word:'upgrade',answer:'e'},
  {word:'deposit',answer:'f'},
  {word:'bellhop',answer:'i'},
  {word:'late check-out',answer:'d'},
  {word:'complimentary',answer:'a'},
  {word:'mini-bar',answer:'g'},
  {word:'receipt',answer:'h'},
  {word:'refund',answer:'b'},
  {word:'noise complaint',answer:'j'}
];
const HOTEL_DEFS=[
  ['a','a free item or service from a hotel'],
  ['b','money returned to you'],
  ['c','a booking for a room'],
  ['d','leaving after the normal check-out time'],
  ['e','to move to a better room or service'],
  ['f','money the hotel keeps temporarily for extra charges or damages'],
  ['g','a small fridge with drinks and snacks'],
  ['h','a paper showing you have paid'],
  ['i','a hotel employee who carries luggage'],
  ['j','a report about loud noise from another room'],
  ['k','a person who cleans hotel rooms'],
  ['l','a hotel manager'],
  ['m','food delivered to your room'],
  ['n','a room key card']
];
const HOTEL_FILL_ITEMS=[
  {answer:'reservation',sentence:'I have a __________ for a double room for two nights.'},
  {answer:'deposit',sentence:'The hotel asks for a $100 __________ in case something is damaged in the room.'},
  {answer:'upgrade',sentence:'Because the hotel made a mistake, they gave me a free __________ to a suite.'},
  {answer:'receipt',sentence:'I paid my bill and received a __________ at the front desk.'},
  {answer:'late check-out',sentence:'I left at 1 PM, so I had to pay for __________.'}
];
const HOTEL_READING_TF=[
  {statement:'The receptionist found Mark’s reservation immediately.',answer:'false',explain:'At first, the receptionist could not find it. She found it only after Mark gave his confirmation number.'},
  {statement:'Mark received a free upgrade because the hotel made a mistake.',answer:'true',explain:'The passage says the receptionist gave him a free upgrade because of the hotel’s mistake.'},
  {statement:'The hotel asked for a deposit for possible extra charges.',answer:'true',explain:'The hotel asked for a $100 deposit for possible extra charges like room service or the mini-bar.'},
  {statement:'Mark used the mini-bar and paid the charge.',answer:'false',explain:'Mark did not use the mini-bar, and the receptionist removed the mistaken charge.'},
  {statement:'Mark thought the late check-out fee was expensive.',answer:'true',explain:'The passage directly says he thought the late check-out fee was expensive.'}
];
const HOTEL_MATCH_OPTIONS={
  reservation:[
    ['c','a booking for a room'],
    ['r1','a request to change your room after arrival'],
    ['r2','a list of hotel rules for guests']
  ],
  upgrade:[
    ['e','to move to a better room or service'],
    ['u1','to leave the room later than the normal time'],
    ['u2','to pay a temporary hold on a credit card']
  ],
  deposit:[
    ['f','money the hotel keeps temporarily for extra charges or damages'],
    ['d1','money returned after a wrong charge'],
    ['d2','the full price of the room paid at check-out']
  ],
  bellhop:[
    ['i','a hotel employee who carries luggage'],
    ['b1','a hotel worker who checks final bills'],
    ['b2','a guest who asks for a room change']
  ],
  'late check-out':[
    ['d','leaving after the normal check-out time'],
    ['l1','entering the room before the normal check-in time'],
    ['l2','waiting in the lobby until a room is ready']
  ],
  complimentary:[
    ['a','a free item or service from a hotel'],
    ['c1','a service added to the final bill'],
    ['c2','a paid upgrade to a better room']
  ],
  'mini-bar':[
    ['g','a small fridge with drinks and snacks'],
    ['m1','a breakfast area in the hotel lobby'],
    ['m2','a cart used to move luggage']
  ],
  receipt:[
    ['h','a paper showing you have paid'],
    ['rc1','a form used to reserve a room'],
    ['rc2','a list of hotel rules']
  ],
  refund:[
    ['b','money returned to you'],
    ['rf1','money held temporarily on a card'],
    ['rf2','money added for a late service']
  ],
  'noise complaint':[
    ['j','a report about loud noise from another room'],
    ['n1','a request for a larger bed'],
    ['n2','a note that breakfast is included']
  ]
};
const HOTEL_MATCH_ITEMS_ALT=[
  {word:'confirmation number',answer:'a'},
  {word:'front desk',answer:'b'},
  {word:'early check-in',answer:'c'},
  {word:'incidental charges',answer:'d'},
  {word:'credit card',answer:'e'},
  {word:'luggage cart',answer:'f'},
  {word:'premium Wi-Fi',answer:'g'},
  {word:'room change',answer:'h'},
  {word:'breakfast buffet',answer:'i'},
  {word:'final bill',answer:'j'}
];
const HOTEL_DEFS_ALT=[
  ['a','a code that proves your booking'],
  ['b','the hotel desk where guests ask for help'],
  ['c','entering the room before the normal check-in time'],
  ['d','extra costs such as room service or mini-bar items'],
  ['e','a payment card used for a hold or charge'],
  ['f','a small cart used to move bags'],
  ['g','faster paid internet service'],
  ['h','moving from one hotel room to another'],
  ['i','breakfast where guests choose from many foods'],
  ['j','the last list of hotel charges before payment'],
  ['k','a hotel swimming pool'],
  ['l','a person who boards an airplane'],
  ['m','a city map'],
  ['n','a free airport bus']
];
const HOTEL_FILL_ITEMS_ALT=[
  {answer:'confirmation number',sentence:'The receptionist found my booking after I showed my __________.'},
  {answer:'front desk',sentence:'If you need help, ask at the __________.'},
  {answer:'early check-in',sentence:'Entering the room before 3 PM is called __________.'},
  {answer:'premium Wi-Fi',sentence:'For an important video call, I paid for __________.'},
  {answer:'final bill',sentence:'Before leaving the hotel, always check the __________.'}
];
const HOTEL_READING_TF_ALT=[
  {statement:'Lina arrived before the normal check-in time.',answer:'true',explain:'She arrived at noon, but normal check-in starts at 3 PM.'},
  {statement:'The front desk refused to help her find the booking.',answer:'false',explain:'The receptionist helped her and found the booking after Lina gave her confirmation number.'},
  {statement:'The hotel used her credit card for a temporary hold.',answer:'true',explain:'The receptionist asked for a credit card for incidental charges, and the passage says it was a temporary hold.'},
  {statement:'Lina paid for premium Wi-Fi because she had a video call.',answer:'true',explain:'She had trouble with free internet, so she paid for premium Wi-Fi.'},
  {statement:'The final bill included no mistakes.',answer:'false',explain:'The final bill had a breakfast buffet charge, and Lina did not eat breakfast at the hotel.'}
];
const HOTEL_READING_PASSAGE_ALT='<b>An Early Arrival</b><br><br>Lina arrives at the hotel at noon, but normal check-in starts at 3 PM. At the front desk, she gives her confirmation number, and the receptionist finds her booking. Lina asks about early check-in because she has a video call soon. The hotel has one room ready, so she pays a small early check-in fee. The receptionist also asks for a credit card for incidental charges. This is only a temporary hold. Lina has trouble with the free internet, so she pays for premium Wi-Fi. The next morning, she checks the final bill and notices a breakfast buffet charge. She did not eat breakfast at the hotel, so the receptionist removes the mistake.';
function hotelAssessmentForm(useAlternate=false){
  return useAlternate
    ? {form:'replay_alt',matchItems:HOTEL_MATCH_ITEMS_ALT,defs:HOTEL_DEFS_ALT,fillItems:HOTEL_FILL_ITEMS_ALT,readingItems:HOTEL_READING_TF_ALT,passage:HOTEL_READING_PASSAGE_ALT,wordBox:['confirmation number','front desk','early check-in','premium Wi-Fi','final bill','credit card','room change'],notice:'Replay assessment: same structure, new hotel words from the scenario.'}
    : {form:'original',matchItems:HOTEL_MATCH_ITEMS,defs:HOTEL_DEFS,fillItems:HOTEL_FILL_ITEMS,readingItems:HOTEL_READING_TF,passage:'<b>A Problem at Check-In</b><br><br>Mark arrives at a hotel late in the evening for a business trip.<br><br>At first, the receptionist cannot find his reservation. Mark gives his confirmation number, and she quickly finds his booking. She apologizes for the mistake.<br><br>Mark reserved a single room, but he asks if he can change to a double room. Because of the hotel’s mistake, the receptionist gives him a free upgrade.<br><br>Before he goes upstairs, the receptionist explains that the hotel needs a $100 deposit for possible extra charges like room service or the mini-bar.<br><br>In the room, Mark is tired, but he checks the mini-bar carefully. He does not take any drinks or snacks. He also keeps his receipt because he wants to check the final bill in the morning.<br><br>The next morning, Mark checks his bill and sees a $15 mini-bar charge. He never used the mini-bar, so he asks for a refund. The receptionist checks the record and removes the charge.<br><br>Mark also asks for a late check-out until 1 PM. The hotel charges an extra $30. Mark agrees because his flight leaves late.<br><br>He pays, gets a receipt, and leaves satisfied, although he thinks the late check-out fee is expensive.',wordBox:['reservation','upgrade','deposit','late check-out','receipt','refund','complimentary'],notice:'The meanings use simple A2/B1 English.'};
}
function startHotelTest(useAlternate=false){
  const form=hotelAssessmentForm(useAlternate);
  state.currentAssessment=form;
  state.testType='hotel_assessment';
  state.testWords=form.matchItems.map(i=>i.word).concat(form.fillItems.map(i=>i.answer));
  state.answers=[];
  logStudyEvent('test_start',{level:state.level?.id,testType:'hotel_assessment',testForm:form.form,total:25,passingScore:20,testWords:state.testWords});
  const matchCards=matchChoiceCards('hotel',form.matchItems,form.defs);
  const fillRows=form.fillItems.map((item,i)=>`<div class="q" style="margin:12px 0"><p style="margin-bottom:8px">${i+1}. ${esc(item.sentence).replace('__________','<u>__________</u>')}</p><input id="hotelFill${i}" placeholder="Type the answer"></div>`).join('');
  const tfRows=form.readingItems.map((item,i)=>`<div id="hotelTfCard${i}" style="border:2px solid var(--line);border-radius:14px;background:#fff;padding:12px;margin-top:10px">
      <div style="font-weight:900;margin-bottom:9px">${i+1}. ${esc(item.statement)}</div>
      <select id="hotelTf${i}" style="width:100%;padding:9px;border:2px solid var(--line);border-radius:10px;font-size:15px;background:#fff">
        <option value="">Choose True or False...</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <div id="hotelTfFb${i}"></div>
    </div>`).join('');
  $('testBox').innerHTML=`
    <div class="note"><b>Hotel Assessment</b><br>25 points total. Passing score: <b>20/25</b>. ${esc(form.notice)}</div>
    <div class="card q"><b>Part 1: Vocabulary Matching · 10 points</b>
      <div class="small" style="margin:7px 0 12px">Choose the best meaning under each word. Some meanings are not used.</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px">${matchCards}</div>
    </div>
    <div class="card q"><b>Part 2: Fill in the blank · 5 points</b>
      <div class="small" style="margin:7px 0 10px">Complete each sentence with a word from the box. Two words are not used.</div>
      <div class="chips" style="margin-bottom:10px">${form.wordBox.map(w=>`<span class="chip">${esc(w)}</span>`).join('')}</div>
      ${fillRows}
    </div>
    <div class="card q"><b>Part 3: Reading Passage · 5 points</b>
      <div class="small" style="margin:7px 0 10px">Read the passage. Then choose True or False for each sentence.</div>
      <div class="note" style="margin-top:10px">${form.passage}</div>
      ${tfRows}
    </div>
    <div class="card q"><b>Part 4: Writing Task · unscored</b>
      <div class="note helperText" style="margin-top:10px"><b>📱 WhatsApp message to a friend · 5 points</b><br><br>Your friend is checking into a hotel in an English-speaking country for the first time next month. Write them a short WhatsApp message (50–80 words) explaining what to expect at the front desk and which English words they should know before they arrive.<br><br><b>Requirements:</b> use at least three hotel words from this level, stay on the hotel check-in topic, write clearly and politely, use correct grammar, and avoid rude or unrelated language. This writing task is graded with a 5-point rubric and you will receive feedback on vocabulary, grammar, word choice, and clarity.</div>
      <textarea id="hotelProduction" onpaste="blockPaste(event)" placeholder="Write your WhatsApp message here. For example: Hey! When you arrive at the hotel, here are some words you need to know..." style="min-height:130px"></textarea>
      <div class="impact">Rubric: length 1 · topic 1 · vocabulary 1 · grammar 1 · clarity/tone 1. Use words like: reservation, check-in, deposit, upgrade, receipt, front desk, late check-out.</div>
    </div>
    <button class="btn primary" style="width:100%" onclick="submitTest()">Submit Test</button>`;
  show('test');
}
async function submitHotelTest(){
  const form=state.currentAssessment||hotelAssessmentForm(false);
  const submitBtn=document.querySelector('#testBox .btn.primary');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent='Scoring and getting feedback…';}
  const details=[];
  let score=0;
  form.matchItems.forEach((item,i)=>{
    const picked=($('hotelMatch'+i)||{}).value||'';
    const ok=picked===item.answer;
    if(ok)score++;
    details.push({part:'match',word:item.word,picked,correct:item.answer,points:ok?1:0});
  });
  revealMatchResults('hotel',form.matchItems);
  form.fillItems.forEach((item,i)=>{
    const picked=normalizeAnswer(($('hotelFill'+i)||{}).value||'');
    const ok=picked===normalizeAnswer(item.answer);
    if(ok)score++;
    details.push({part:'fill_blank',word:item.answer,picked,correct:item.answer,points:ok?1:0});
  });
  form.readingItems.forEach((item,i)=>{
    const picked=($('hotelTf'+i)||{}).value||'';
    const ok=picked===item.answer;
    if(ok)score++;
    details.push({part:'reading_true_false',question:item.statement,picked,correct:item.answer,explanation:item.explain,points:ok?1:0});
  });
  revealTrueFalseResults('hotel',form.readingItems);
  const production=($('hotelProduction')||{}).value||'';
  const productionPrompt='WhatsApp message: explain hotel check-in experience and vocabulary to a friend (50-80 words)';
  const wordCount=production.trim().split(/\s+/).filter(Boolean).length;
  const prodCard=$('hotelProduction')&&$('hotelProduction').closest('.card.q');
  let feedbackEl=null;
  if(prodCard){
    feedbackEl=document.createElement('div');
    feedbackEl.className='feedback';
    feedbackEl.style.display='block';
    feedbackEl.innerHTML='<span class="small" style="color:var(--muted)">Getting AI feedback on your writing…</span>';
    prodCard.appendChild(feedbackEl);
  }
  let productionFeedback='';
  const writingRubricResult=writingRubric(production,state.level.vocab);
  if(production.trim()){
    productionFeedback=await aiFeedbackForProduction(production,state.level.vocab,'hotel')||'';
    if(feedbackEl&&productionFeedback)feedbackEl.innerHTML=`<div style="margin-top:4px"><b>Writing Feedback</b><br>${productionFeedback}</div>${writingRubricHtml(writingRubricResult)}`;
  }else if(feedbackEl){
    feedbackEl.innerHTML='No writing submitted for this task.'+writingRubricHtml(writingRubricResult);
  }
  state.lastWritingReview={section:'Writing Task',response:production,feedback:productionFeedback,rubric:writingRubricResult,wordCount};
  details.push({part:'production_rubric',prompt:productionPrompt,picked:production,wordCount,aiFeedback:productionFeedback,points:writingRubricResult.score,maxPoints:5,rubric:writingRubricResult});
  state.answers=details;
  const resourcesPassed=outcomeLevel()!=='failed';
  const totalScore=score+writingRubricResult.score;
  const total=25;
  const passingScore=20;
  const passed=totalScore>=passingScore;
  state.scores[state.level.id]=Math.max(state.scores[state.level.id]||0,totalScore);
  addXP(totalScore*5);
  logStudyEvent('test_submit',{level:state.level?.id,testType:'hotel_assessment',testForm:form.form,score:totalScore,objectiveScore:score,writingScore:writingRubricResult.score,total,passingScore,passed,resourcesPassed,successfulAttemptNumber:state.successfulAttempts[state.level.id],answers:details});
  if(!passed){
    showFailedQuizInline(totalScore,total,passingScore);
    return;
  }
  state.unlocked=Math.max(state.unlocked,state.level.num+1);
  showInlineQuizResult(totalScore,total,passingScore,true,`finishPassedTest(${totalScore},${total},'Success conditions: Money ≥ $200 · Time ≥ 20 min · Stress ≤ 80<br>Writing rubric: ${writingRubricResult.score}/5.<br>')`);
}
function markQuestion(i,word,ok,picked,type){
  state.answers[i]={word,ok,picked,type};
  const q=$('q'+i), fb=$('fb'+i);
  if(q){
    q.classList.add(ok?'correct':'wrong');
    q.querySelectorAll('button').forEach(b=>{
      b.disabled=true;
      const option=(b.dataset.option||b.textContent||'').trim();
      if(normalizeAnswer(option)===normalizeAnswer(word))b.classList.add('correct');
      else if(normalizeAnswer(option)===normalizeAnswer(picked)&&!ok)b.classList.add('wrong');
    });
  }
  if(fb){fb.style.display='block';fb.innerHTML=ok?`Correct. Answer: <b>${word}</b>`:`Answer: <b>${word}</b><br>Vietnamese: ${VDB[word]?.[0]||''}<br>Example: ${VDB[word]?.[1]||''}`;}
  if(ok)addXP(type==='use'?30:type==='type'?25:20);
}
function check(i,correct,picked,btn){
  const q=$('q'+i);if(q.dataset.done)return;q.dataset.done=1;q.querySelectorAll('button').forEach(b=>b.disabled=true);
  const ok=correct===picked;btn.classList.add(ok?'correct':'wrong');markQuestion(i,correct,ok,picked,'mc');
}
async function aiFeedbackForUseQuestion(word,response,learnedVocab){
  const vdbEntry=VDB[word];
  const targetDef=vdbEntry?`${word} (Vietnamese: ${vdbEntry[0]}; example: ${vdbEntry[1]})`:word;
  try{
    const res=await fetch(USE_QUESTION_FEEDBACK_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        word,
        response,
        targetDefinition:targetDef,
        learnedVocab
      })
    });
    if(!res.ok)throw new Error();
    const data=await res.json();
    return data.feedback||null;
  }catch(e){
    const usedTarget=new RegExp('\\b'+word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(response);
    return usedTarget
      ?`Good — you used <b>${word}</b> in your sentence. Try to also include other words you learned, like <b>${learnedVocab.find(w=>w!==word)||'reservation'}</b>.`
      :`Your sentence did not include the word <b>${word}</b>. Try rewriting it so that word appears clearly. Example: ${vdbEntry?vdbEntry[1]:'use the word in a real situation.'}`;
  }
}
async function submitTest(){
  if(state.testType==='airport_short'){submitAirportTest();return;}
  if(state.testType==='hotel_assessment'){submitHotelTest();return;}
  // Disable submit button while scoring
  const submitBtn=document.querySelector('#testBox .btn.primary');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent='Scoring and getting feedback…';}
  // Process MC and Type questions
  const autoTotal=Math.min(7,state.testWords.length);
  const passingScore=Math.min(6,autoTotal);
  state.testWords.forEach((w,i)=>{
    if(state.answers[i])return;
    if(i<4){
      const picked=($('mc'+i)||{}).value||'not answered';
      markQuestion(i,w,picked===w,picked,'mc');
      return;
    }
    if(i<autoTotal){
      const typed=normalizeAnswer(($('type'+i)||{}).value||'');
      markQuestion(i,w,typed===normalizeAnswer(w),typed||'not answered','type');
    }
  });
  // Process Use questions — get AI feedback before transitioning
  const useTasks=[];
  for(let i=autoTotal;i<state.testWords.length;i++){
    if(state.answers[i])continue;
    const w=state.testWords[i]||'';
    const response=($('use'+i)||{}).value||'';
    const normalized=normalizeAnswer(response);
    state.answers[i]={word:w,ok:null,picked:normalized||'not answered',type:'use_unscored'};
    const q=$('q'+i),fb=$('fb'+i);
    if(q)q.classList.add('correct');
    if(fb){fb.style.display='block';fb.innerHTML='<span class="small" style="color:var(--muted)">Getting AI feedback on your sentence…</span>';}
    if(response.trim()){
      useTasks.push({i,w,response,fb});
    }else if(fb){
      fb.innerHTML='No sentence submitted for this question.';
    }
  }
  // Fetch all use-question feedback in parallel
  if(useTasks.length){
    await Promise.all(useTasks.map(async({i,w,response,fb})=>{
      const feedback=await aiFeedbackForUseQuestion(w,response,state.seen);
      if(fb)fb.innerHTML=feedback
        ?`<div style="margin-top:4px"><b>📝 Feedback:</b> ${feedback}</div>`
        :'Your response was saved.';
      logStudyEvent('use_question_feedback',{word:w,response,feedback,turn:state.turn});
    }));
  }
  // Score and transition
  const scoredAnswers=state.answers.filter(a=>a.type!=='use_unscored');
  const right=scoredAnswers.filter(a=>a.ok).length;
  const total=autoTotal;
  state.scores[state.level.id]=Math.max(state.scores[state.level.id]||0,right);
  logStudyEvent('test_submit',{level:state.level?.id,score:right,total,passingScore,passed:right>=passingScore,answers:state.answers,useQuestions:'ai_feedback_given'});
  if(right>=passingScore)showInlineQuizResult(right,total,passingScore,true,`finishPassedTest(${right},${total},'Essay sentences received AI feedback.<br>')`);
  else showFailedQuizInline(right,total,passingScore);
}
function replay(){pickLevel(state.level.id);begin()}
function resetAll(){location.reload()}
$('soundToggle').addEventListener('click',toggleSound);
updateSoundToggle();
</script>
</body>
</html>
