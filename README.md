# Asmita Shelke — Developer Portfolio

A React + Vite portfolio built from resume data. Dark/light mode, responsive, accessible.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are output to `dist/`.

## Before you deploy — fill in the missing info

Open `src/data/portfolioData.js` and replace every `"[ADD INFORMATION]"` placeholder:

- `personalInfo.linkedin` — your LinkedIn profile URL
- Each project's `github` link (and `demo` / `image` if available)
- `experience[].organization` — the company/platform that ran each internship
- `certifications[].issuer` where missing, plus certificate image files (see below)

## Adding certificate images

Drop certificate image files into `public/certificates/`, then reference them in
`src/data/portfolioData.js` under each certification's `file` field, e.g.:

```js
{ name: "AWS Cloud Foundation", issuer: "AWS", file: "/certificates/aws-cloud.png" }
```

## Connecting the Contact form

The form in `src/components/Contact.jsx` is fully built but **not connected to any
backend or email service** — right now, submitting it just shows a notice. Pick one:

### Option A — Formspree (easiest, no backend code)
1. Create a free form at https://formspree.io
2. In `Contact.jsx`, change the `<form>` to point at your Formspree endpoint and use a plain HTML POST:
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Remove the custom `onSubmit` handler (or keep it only for client-side validation).

### Option B — EmailJS (send straight from the browser)
1. Sign up at https://www.emailjs.com and set up an email service + template.
2. `npm install @emailjs/browser`
3. In `handleSubmit`, call `emailjs.send(...)` with your service ID, template ID, and public key instead of `setStatus('not-configured')`.

### Option C — Your own backend
Point the form's `onSubmit` at your own API route (Node/Express, serverless function, etc.) that sends the email server-side.

## Deploying

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# then drag-and-drop the dist/ folder at app.netlify.com/drop
# or: npm i -g netlify-cli && netlify deploy
```

**GitHub Pages**
```bash
npm install --save-dev gh-pages
# add to package.json: "homepage": "https://<username>.github.io/<repo>"
# add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d dist"
npm run deploy
```

## Project structure

```
portfolio/
├── public/
│   ├── profile.jpg
│   ├── resume.pdf
│   └── certificates/
├── src/
│   ├── components/       # one component + its CSS per section
│   ├── data/              # portfolioData.js — single source of truth
│   ├── hooks/              # useReveal.js — scroll animations
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # design tokens + global styles
├── index.html
├── package.json
└── vite.config.js
```
