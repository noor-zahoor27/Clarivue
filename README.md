# Clarivue

A health-management dashboard: upload a lab report (PDF or photo) and get a plain-language
breakdown, track appointments and medications, manage multiple family profiles, and ask a
built-in assistant about common lab markers — all running locally in your browser.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Sections

- **Overview** — stats, recent reports, next appointment, today's medications, health tip
- **Reports** — upload PDF/JPG/PNG, get a plain-language breakdown with causes/symptoms,
  specialist suggestions, and a PDF export
- **Appointments** — book/cancel mock appointments with a specialist directory
- **Medications** — add medicines, mark daily doses taken, track 7-day adherence
- **Family** — add multiple profiles (e.g. spouse, kids); Reports/Appointments/Medications
  are scoped to whichever profile is active, switchable from the top bar
- **Notifications** — a unified feed of flagged findings, upcoming visits, and pending doses
- **Ask Clarivue** — a local, rule-based chat assistant for common health questions

## How it works

- **Auth** — Sign up / log in is handled entirely in the browser with `localStorage`.
  There's no backend; accounts and sessions live only on your machine. Fine for a demo, but
  **not** secure enough for a real production app.
- **File reading** — PDFs are parsed with `pdfjs-dist`. If a PDF has no embedded text (i.e.
  it's scanned), or you upload a JPG/PNG directly, OCR runs in-browser via `tesseract.js`.
- **Analysis** — `src/utils/analyzeReport.js` is a rule-based engine: it looks for common
  lab markers in the extracted text and compares them to typical reference ranges. This is
  a heuristic demo, **not** a real diagnostic AI model.
- **Assistant** — `src/data/knowledgeBase.js` + `src/utils/chatEngine.js`-style keyword
  matching in `getAssistantAnswer`. No external API call — every answer is pre-written.
- **PDF export** — `jspdf` generates a downloadable summary of any analyzed report.
- **Charts** — `recharts` renders a normal-vs-flagged trend across report history.

## Important

This project is a portfolio/demo app. It is **not a medical device and does not provide
real diagnoses**. Every analysis and chat response carries a disclaimer for this reason —
please keep it there if you extend the project, and always point real users toward
licensed medical professionals.

## Project structure

```
src/
  components/   Sidebar, AppShell, ProfileSwitcher, UploadZone, FindingCard, TrendChart, ...
  context/      Auth, Reports, Family, Appointments, Medications
  data/         knowledgeBase.js (assistant Q&A)
  pages/        Landing, Login, Signup, Overview, Reports, Appointments, Medications,
                Family, Notifications, Assistant, Profile
  utils/        extractText.js (PDF/OCR), analyzeReport.js (rule engine),
                exportPdf.js, notifications.js
```

## Extending this into a real product

To make this production-ready you'd want a real backend: a server with proper
authentication (hashed + salted passwords, sessions/JWTs), a real database instead of
`localStorage`, a real appointment-booking integration, push notifications, and either a
licensed medical-NLP service or a partnership with an actual clinical review process
before showing any health guidance to real users.

