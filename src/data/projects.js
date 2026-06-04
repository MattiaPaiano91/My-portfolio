export const projects = [
  {
    id: 1,
    slug: "multi-tenant-manager",
    title: "Gestionale multi-tenant con autenticazione",
    summary:
      "Gestionale multi-tenant con Keycloak, ruoli applicativi, separazione dati per tenant e backend FastAPI.",
    description:
      "Qui il punto non era solo far funzionare login e CRUD, ma tenere insieme tenant separati, ruoli, flussi autenticati e una struttura backend abbastanza pulita da poter crescere senza diventare un groviglio.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Keycloak", "Docker"],
    image: "/img/m_4457.png",
    url: "",
    accent: "indigo",
    featured: true,
  },
  {
    id: 2,
    slug: "gis-dashboard",
    title: "Dashboard GIS con mappe interattive",
    summary:
      "Dashboard GIS basata su OpenLayers per leggere, filtrare e gestire dati territoriali direttamente su mappa.",
    description:
      "Un progetto nato piu per lavorare bene sui dati che per fare scena: livelli, filtri, navigazione veloce e una mappa che deve restare chiara anche quando le informazioni iniziano a diventare tante.",
    tech: ["React", "OpenLayers", "TypeScript", "PostGIS", "Vector Tiles"],
    image: "/img/foto.jpg",
    url: "",
    accent: "violet",
    featured: true,
  },
  {
    id: 3,
    slug: "geospatial-api",
    title: "Backend API per dati geospaziali",
    summary:
      "Backend FastAPI per dati geospaziali, con query spaziali, endpoint REST e generazione di layer MVT.",
    description:
      "Qui mi sono concentrato soprattutto sulla parte meno visibile ma piu delicata: modeling, query spaziali, performance, serializzazione e un'integrazione frontend che non costringa a continui workaround.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "PostGIS", "MVT"],
    image: "/img/LogoConNomeBianco.svg",
    url: "",
    accent: "slate",
    featured: true,
  },
  {
    id: 4,
    slug: "pdf-editor",
    title: "PDF editor web",
    summary:
      "Tool web per caricare, visualizzare e modificare PDF nel browser, con testo, immagini e strumenti di disegno.",
    description:
      "Mi piace perche mette insieme UI interattiva, gestione file e logica client-side un po piu articolata del solito, restando comunque uno strumento concreto e non una demo fine a se stessa.",
    tech: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS"],
    image: "/img/OndaMattia.svg",
    url: "",
    accent: "sky",
    featured: true,
  },
  {
    id: 5,
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    summary:
      "Il classico Tris in React, lasciato qui piu come nota di percorso che come progetto rappresentativo.",
    description:
      "E uno dei progetti piu vecchi e semplici del portfolio. Lo tengo in fondo perche fa parte del percorso, ma oggi mi raccontano meglio i lavori piu vicini a backend, mappe e applicazioni reali.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/img/tic-tac-toe.jpeg",
    url: "https://tic-tac-toe-react-01.netlify.app/",
    accent: "soft",
    featured: false,
  },
];
