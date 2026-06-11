export const projects = [
  {
    id: 1,
    slug: "multi-tenant-manager",
    title: "Gestionale multi-tenant con autenticazione",
    summary:
      "Gestionale multi-tenant con Keycloak, ruoli applicativi, separazione dati per tenant e backend FastAPI.",
    description:
      "Login, ruoli, tenant separati e backend FastAPI. La parte interessante era far crescere tutto senza trasformarlo in un nodo di cavi.",
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
      "Livelli, filtri e navigazione su mappa. Il punto era tenere i dati leggibili anche quando iniziano a diventare tanti.",
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
      "Modeling, query spaziali, performance e layer MVT. Poco glamour, parecchia sostanza.",
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
      "UI interattiva, file nel browser e logica client-side un po' piu vivace del solito.",
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
      "Un progetto vecchio e semplice. Sta qui per onesta storica, non per fare il fenomeno.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/img/tic-tac-toe.jpeg",
    url: "https://tic-tac-toe-react-01.netlify.app/",
    accent: "soft",
    featured: false,
  },
];
