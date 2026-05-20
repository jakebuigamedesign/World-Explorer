# Word Explorer

Word Explorer is a vocabulary learning role-play prototype for English learners.

## Local Run

1. Create a `.env` file from `.env.example`.
2. Add your Gemini API key:

```text
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.0-flash
```

3. Run:

```bash
npm start
```

4. Open:

```text
http://127.0.0.1:8787/
```

## Render Settings

- Runtime: Node
- Build command: `npm install`
- Start command: `npm start`

## Render Environment Variables

Add these in Render, not in GitHub:

```text
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.0-flash
```

Do not upload `.env`.
