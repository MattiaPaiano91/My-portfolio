# Portfolio Mattia Paiano

Portfolio personale sviluppato con Vue 3 e Vite per presentare profilo, stack tecnico, progetti selezionati e contatti.

L'interfaccia e pensata come una single page application semplice e diretta: landing iniziale, sezione about, portfolio, dettaglio progetto, pagina contatti e fallback 404.

## Stack

- Vue 3
- Vite
- Vue Router
- Pinia
- Tailwind CSS
- Sass
- GSAP
- Swiper

## Contenuti principali

- Hero con presentazione personale
- Sezione competenze organizzata per area
- Card progetto con dettaglio dedicato
- Tema chiaro/scuro
- Carousel footer con icone SVG custom dello stack attuale
- Download CV
- Pagina Not Found

## Stack raccontato nel portfolio

- Frontend: TypeScript, React, Next.js, Tailwind CSS, Zustand, OpenLayers
- Backend: Python, FastAPI, SQLAlchemy, REST API, Pydantic
- Database e GIS: PostgreSQL, PostGIS, Row Level Security, MVT / Vector Tiles
- DevOps e tools: Docker, Git, GitLab CI/CD, Keycloak, Linux / WSL

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview produzione

```bash
npm run preview
```

## Struttura dati

I contenuti principali sono separati dai componenti Vue e si trovano in `src/data`:

- `projects.js`: progetti mostrati nel portfolio
- `skills.js`: gruppi di competenze
- `about.js`: testi della sezione about
- `footer.js`: icone e configurazione carousel footer
- `navigation.js`: link di navigazione

## Alias import

Il progetto usa l'alias `@` per puntare a `src`, configurato sia in `vite.config.js` sia in `tsconfig.json`.
