export const posts = [
  {
    id: 1,
    slug: "vue3-composition-api-patterns",
    title: "Pattern pratici con la Composition API di Vue 3",
    date: "2026-04-10",
    readTime: 6,
    tags: ["Vue.js", "TypeScript", "Frontend"],
    excerpt:
      "Come organizzare la logica nei composable senza creare astrazioni inutili. Tre pattern che uso ogni giorno e uno da evitare.",
    content: `
      <p>La Composition API è il cuore di Vue 3, ma è facile cadere nella trappola di creare composable per tutto, anche dove non serve.</p>
      <h2>1. Stato locale prima di tutto</h2>
      <p>Il primo istinto è estrarre logica in un composable. Ma se lo stato serve solo a un componente, tenerlo inline è quasi sempre la scelta migliore. La leggibilità batte la riusabilità quando quella riusabilità non esiste ancora.</p>
      <h2>2. Composable per logica asincrona</h2>
      <p>Dove i composable brillano davvero è nella gestione di fetch, loading state ed errori. Un <code>usePost(slug)</code> che espone <code>{ post, loading, error }</code> è pulito, testabile e riutilizzabile senza essere prematuro.</p>
      <pre><code>export function usePost(slug: string) {
  const post = ref&lt;Post | null&gt;(null)
  const loading = ref(false)
  const error = ref&lt;string | null&gt;(null)

  async function fetchPost() {
    loading.value = true
    error.value = null
    try {
      post.value = await postsService.getBySlug(slug)
    } catch {
      error.value = 'Post non trovato'
    } finally {
      loading.value = false
    }
  }

  return { post, loading, error, fetchPost }
}</code></pre>
      <h2>3. Evita composable wrapper banali</h2>
      <p>Un composable che fa solo <code>return { value: ref(false) }</code> non aggiunge nulla. Se non c'è logica da incapsulare, non c'è motivo di estrarre.</p>
      <h2>Il pattern da evitare</h2>
      <p>I mega-composable che gestiscono dieci cose diverse. Meglio uno small e focused che uno grande e ambiguo. Se un composable ha più di tre responsabilità, probabilmente va spezzato.</p>
    `,
  },
  {
    id: 2,
    slug: "typescript-tipi-espliciti",
    title: "TypeScript: quando essere espliciti vale la pena",
    date: "2026-03-18",
    readTime: 5,
    tags: ["TypeScript", "Best Practice"],
    excerpt:
      "Non tutti i tipi vanno scritti a mano — ma quelli che contano devono essere chiari. Come trovare il giusto equilibrio senza impazzire.",
    content: `
      <p>TypeScript può diventare rumore se esagerato, o una trappola silenziosa se usato male. La chiave è sapere dove l'inferenza è sufficiente e dove no.</p>
      <h2>Lascia inferire TypeScript quando può</h2>
      <p>Non serve scrivere <code>const name: string = 'Mattia'</code>. TypeScript lo sa già. L'inferenza funziona bene per variabili locali semplici, return di funzioni ovvie e costanti.</p>
      <h2>Sii esplicito ai confini del sistema</h2>
      <p>Props, emit, API response, parametri di funzione non banali: questi sono i posti dove un tipo esplicito fa la differenza. Non per TypeScript, ma per chi legge il codice.</p>
      <pre><code>type CreatePostPayload = {
  title: string
  content: string
  tags: string[]
}

async function createPost(payload: CreatePostPayload): Promise&lt;Post&gt; {
  const response = await apiClient.post&lt;Post&gt;('/posts', payload)
  return response.data
}</code></pre>
      <h2>Evita <code>any</code> per pigrizia</h2>
      <p><code>any</code> disattiva TypeScript. Se non sai il tipo, usa <code>unknown</code> e narrowing. Se hai una risposta API non tipizzata, crea un tipo anche se rudimentale — puoi raffinarlo dopo.</p>
      <h2>I type guard valgono l'investimento</h2>
      <p>Un semplice <code>isPost(value: unknown): value is Post</code> può salvare da decine di casting espliciti sparsi nel codice. Scrivilo una volta, usalo ovunque.</p>
    `,
  },
  {
    id: 3,
    slug: "css-grid-layout-moderni",
    title: "Layout moderni con CSS Grid senza framework",
    date: "2026-02-05",
    readTime: 7,
    tags: ["CSS", "Frontend", "Layout"],
    excerpt:
      "Grid risolve la maggior parte dei layout complessi senza toccare un framework. Qualche pattern che uso spesso e perché evito le colonne a 12.",
    content: `
      <p>Il grid a 12 colonne era la soluzione al tempo in cui il browser non aveva strumenti decenti. Oggi Grid nativo risolve gli stessi problemi con meno classi e più intenzione.</p>
      <h2>Il pattern che uso di più</h2>
      <p>Per layout di card responsive senza media query specifiche:</p>
      <pre><code>.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}</code></pre>
      <p>Si adatta da solo a qualsiasi viewport. Niente classi <code>col-sm-6 col-md-4</code>.</p>
      <h2>Grid per layout a due colonne asimmetriche</h2>
      <p>Sidebar + contenuto principale senza float o position hacks:</p>
      <pre><code>.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}</code></pre>
      <h2>Subgrid: il futuro è già qui</h2>
      <p>Con il supporto di subgrid nei browser moderni, allineare elementi di card in righe diverse senza JavaScript è finalmente possibile in modo nativo. Vale la pena conoscerlo anche se il supporto legacy non lo permette ancora ovunque.</p>
      <h2>Quando uso Flexbox invece</h2>
      <p>Quando il layout è monodimensionale: navigazioni, gruppi di badge, azioni in una toolbar. Grid per due dimensioni, Flex per una. La regola è semplice e funziona quasi sempre.</p>
    `,
  },
]
