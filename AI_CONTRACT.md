# Frontend & Vue.js Best Practices

## Ogni volta

Se la modifica richiede aggiorna il README.md

## Obiettivo

Il codice deve essere leggibile, tipizzato, manutenibile e coerente con l’architettura esistente del progetto.

Quando generi o modifichi codice frontend, dai priorità a:

* semplicità
* leggibilità
* separazione delle responsabilità
* type safety
* riutilizzo controllato
* accessibilità
* performance
* coerenza con lo stile già presente nella codebase

Non introdurre pattern, librerie o astrazioni inutili se il problema può essere risolto in modo più semplice.

---

# Vue.js Best Practices

## Usa Composition API e `<script setup>`

Preferisci sempre componenti Vue 3 con:

```vue
<script setup lang="ts">
```

Evita Options API, salvo file legacy già scritti così.

La logica deve essere organizzata per responsabilità, non per tipo di opzione. Quindi meglio raggruppare stato, computed, funzioni e side effect legati allo stesso comportamento.

---

## Usa TypeScript in modo rigoroso

Ogni componente deve usare TypeScript.

Definisci sempre tipi espliciti per:

* props
* emits
* dati ricevuti da API
* oggetti complessi
* composables
* store
* payload degli eventi
* parametri e return value delle funzioni non banali

Evita `any`, salvo casi davvero inevitabili e motivati.

Preferisci:

```ts
type User = {
  id: string
  name: string
}
```

oppure `interface` quando ha senso estendere il tipo.

---

## Props ed emits devono essere espliciti

Le props devono essere dichiarate con tipo chiaro:

```ts
const props = defineProps<{
  userId: string
  readonly?: boolean
}>()
```

Gli eventi devono essere dichiarati con `defineEmits`:

```ts
const emit = defineEmits<{
  save: [payload: SavePayload]
  cancel: []
}>()
```

Non usare eventi impliciti o nomi vaghi tipo `update`, `change`, `click` se il significato reale è più specifico.

Meglio:

```ts
emit('save-user', payload)
emit('delete-area', id)
emit('select-item', item)
```

---

## Non mutare direttamente le props

Le props sono input del componente.

Non fare:

```ts
props.user.name = 'Mario'
```

Se serve modificare un valore:

* crea uno stato locale
* emetti un evento al parent
* usa `v-model` solo quando ha davvero senso
* aggiorna lo store se il dato è globale

---

## Componenti piccoli e con una responsabilità chiara

Un componente dovrebbe fare una cosa principale.

Se un componente diventa troppo grande, separa:

* componenti UI puri
* componenti container
* composables
* funzioni helper
* tipi TypeScript
* chiamate API

Indicativamente, se un componente supera molta logica non legata direttamente al template, valuta un refactor.

---

## Naming dei componenti

Usa nomi espliciti e descrittivi.

Buono:

```txt
UserForm.vue
AreaMap.vue
TreeFiltersPanel.vue
ConfirmDeleteDialog.vue
```

Scarso:

```txt
Form.vue
Panel.vue
Modal.vue
Component.vue
```

I componenti riutilizzabili generici possono stare in cartelle tipo:

```txt
components/ui
components/common
```

I componenti specifici di una feature devono stare vicino alla feature.

---

## Struttura consigliata

Quando possibile, organizza il codice per feature, non solo per tipo tecnico.

Esempio:

```txt
src/
  features/
    users/
      components/
      composables/
      services/
      types.ts
    map/
      components/
      composables/
      services/
      types.ts
  components/
    ui/
  stores/
  utils/
  api/
```

Evita cartelle globali enormi dove finisce tutto.

---

## Usa composables per logica riutilizzabile

Se una logica viene usata in più componenti, spostala in un composable.

Esempio:

```ts
export function useUsers() {
  const users = ref<User[]>([])
  const loading = ref(false)

  async function fetchUsers() {
    loading.value = true
    try {
      users.value = await usersService.getUsers()
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    loading,
    fetchUsers,
  }
}
```

Un composable deve gestire logica, non markup.

---

## Computed invece di stato duplicato

Se un valore può essere derivato da altri dati, usa `computed`.

Non fare:

```ts
const fullName = ref(`${user.value.name} ${user.value.surname}`)
```

Meglio:

```ts
const fullName = computed(() => `${user.value.name} ${user.value.surname}`)
```

Evita stati duplicati che possono andare fuori sync.

---

## Watch solo quando serve davvero

Usa `watch` per side effect reali:

* chiamate API
* sync con URL/query params
* salvataggi
* effetti non derivabili con `computed`

Non usare `watch` per calcolare valori derivati: in quel caso usa `computed`.

Evita watcher troppo larghi su oggetti interi se puoi osservare proprietà specifiche.

---

## Gestione API separata dai componenti

I componenti non dovrebbero contenere direttamente troppa logica HTTP.

Meglio creare service dedicati:

```ts
export async function getUsers(): Promise<User[]> {
  const response = await apiClient.get<User[]>('/users')
  return response.data
}
```

Il componente chiama il service o un composable che usa il service.

---

## Gestione errori e loading state

Ogni chiamata asincrona rilevante deve gestire:

* loading
* errore
* stato vuoto
* successo

Non lasciare errori silenziosi.

Esempio minimo:

```ts
const loading = ref(false)
const error = ref<string | null>(null)

async function loadData() {
  loading.value = true
  error.value = null

  try {
    data.value = await service.getData()
  } catch {
    error.value = 'Errore durante il caricamento dei dati'
  } finally {
    loading.value = false
  }
}
```

---

## Store globale solo per stato realmente globale

Non mettere tutto nello store.

Usa lo store per:

* utente autenticato
* permessi
* configurazioni globali
* stato condiviso tra molte pagine/componenti
* dati che devono sopravvivere al cambio componente

Non usare lo store per stato locale di form, modali o UI temporanea se serve solo a un componente.

---

## Template leggibili

Mantieni i template semplici.

Evita troppa logica inline:

```vue
<div v-if="user && user.roles && user.roles.includes('admin') && !loading">
```

Meglio:

```ts
const canShowAdminPanel = computed(() => {
  return user.value?.roles.includes('admin') && !loading.value
})
```

```vue
<div v-if="canShowAdminPanel">
```

---

## Usa `key` corrette nei loop

In `v-for`, usa sempre una chiave stabile.

Buono:

```vue
<li v-for="user in users" :key="user.id">
```

Da evitare:

```vue
<li v-for="(user, index) in users" :key="index">
```

Usa l’indice solo se la lista è statica e non viene mai riordinata, filtrata o modificata.

---

## Evita side effect nel template

Il template non deve chiamare funzioni che modificano stato.

Da evitare:

```vue
<div>{{ updateAndReturnValue() }}</div>
```

Le funzioni nel template devono essere pure o leggere.

---

## Accessibilità nei componenti Vue

Usa HTML semantico prima di inventare componenti custom.

Preferisci:

```html
<button>
```

invece di:

```html
<div role="button">
```

Ogni input deve avere una label associata.

Le modali devono gestire:

* focus
* chiusura da tastiera
* aria attributes
* scroll lock quando necessario

Non rimuovere outline/focus ring senza fornire un’alternativa visibile.

---

# Frontend Best Practices Generali

## Semantic HTML prima di tutto

Usa il tag corretto per il lavoro corretto:

* `button` per azioni
* `a` per navigazione
* `form` per form
* `label` per input
* `nav`, `main`, `section`, `article`, `header`, `footer` quando appropriato

Non usare `div` e `span` per tutto.

---

## CSS mantenibile

Evita CSS fragile e troppo accoppiato alla struttura HTML.

Preferisci classi chiare, componenti isolati e naming coerente.

Evita:

* selettori troppo profondi
* `!important` salvo casi estremi
* stili duplicati
* magic numbers senza motivo
* layout basati su hack

---

## Responsive design

Ogni nuova UI deve funzionare almeno su:

* desktop
* tablet
* mobile

Non fissare larghezze rigide se non necessario.

Preferisci layout fluidi con:

* flex
* grid
* max-width
* min-width
* clamp
* breakpoint coerenti

---

## Performance

Evita JavaScript inutile.

Prima di aggiungere una libreria, chiediti se serve davvero.

Best practice:

* lazy load per componenti pesanti
* immagini ottimizzate
* debounce/throttle per input frequenti
* virtualizzazione per liste molto lunghe
* evitare render inutili
* evitare watcher profondi non necessari
* evitare dati duplicati nello stato
* dividere bundle quando ha senso

---

## Form

I form devono avere:

* validazione lato frontend
* messaggi di errore chiari
* stato loading durante submit
* prevenzione del doppio submit
* gestione errore backend
* valori iniziali chiari
* reset controllato quando serve

Non nascondere errori generici dietro un semplice `console.log`.

---

## Error handling

Ogni errore deve essere gestito in modo utile.

In sviluppo puoi usare `console.error`, ma nell’interfaccia l’utente deve ricevere un messaggio comprensibile.

Non mostrare dettagli tecnici sensibili all’utente finale.

---

## Naming

Usa nomi espliciti.

Buono:

```ts
fetchUserPermissions()
selectedAreaId
isDeleteDialogOpen
```

Scarso:

```ts
handleClick()
data
flag
temp
res
obj
```

`handleClick` va bene solo se il componente è minuscolo e il contesto è ovvio.

---

## Funzioni piccole

Una funzione dovrebbe fare una cosa sola.

Se una funzione:

* valida dati
* chiama API
* trasforma risposta
* aggiorna UI
* gestisce errori

probabilmente va spezzata.

---

## Separazione responsabilità

Mantieni separati:

* UI
* business logic
* API calls
* mapping dati
* validazione
* stato globale
* helper generici

Non mettere tutto nel componente.

---

## Evita astrazioni premature

Non creare hook/composable/helper generici se vengono usati una sola volta e non semplificano davvero il codice.

Prima scrivi codice chiaro, poi estrai astrazioni quando emerge una ripetizione reale.

---

## Commenti

Scrivi commenti solo quando spiegano il perché, non il cosa.

Scarso:

```ts
// incrementa counter
counter++
```

Buono:

```ts
// Il backend si aspetta coordinate in EPSG:4326 anche se la mappa lavora in EPSG:3857
```

---

## Import ordinati

Mantieni gli import puliti e coerenti:

1. librerie esterne
2. alias interni
3. import relativi
4. tipi

Rimuovi import inutilizzati.

---

## No codice morto

Rimuovi:

* funzioni inutilizzate
* variabili inutilizzate
* commenti vecchi
* console.log lasciati per debug
* componenti non più usati
* branch condizionali impossibili

---

## Sicurezza frontend

Non fidarti mai solo del frontend.

Il frontend può validare per UX, ma la validazione vera deve stare anche nel backend.

Evita di:

* salvare token sensibili in posti non sicuri
* esporre segreti nel bundle
* fidarti di ruoli/permessi solo lato client
* renderizzare HTML non sanitizzato

---

## Accessibilità minima obbligatoria

Ogni nuova feature dovrebbe rispettare almeno:

* navigazione da tastiera
* focus visibile
* label sugli input
* testi alternativi per immagini informative
* contrasto leggibile
* bottoni e link semanticamente corretti
* messaggi di errore associati ai campi

---

## Pull request e modifiche

Quando modifichi codice esistente:

* mantieni lo stile già presente
* non fare refactor enormi non richiesti
* non cambiare API pubbliche senza motivo
* non rinominare file/componenti se non necessario
* limita la modifica al problema richiesto
* segnala eventuali problemi separati senza mischiarli alla modifica principale

---

# Regole pratiche per Codex

Quando lavori su questo progetto:

1. Leggi prima i file vicini a quello da modificare.
2. Segui lo stile già presente nella codebase.
3. Non introdurre nuove librerie senza motivo forte.
4. Usa TypeScript in modo esplicito.
5. Mantieni i componenti piccoli.
6. Estrai composables solo quando la logica è davvero riutilizzabile o troppo complessa.
7. Non duplicare stato derivabile.
8. Gestisci loading, error e empty state.
9. Mantieni accessibilità e semantic HTML.
10. Non fare refactor massivi se la richiesta è puntuale.
11. Non rompere compatibilità con componenti o API già esistenti.
12. Prima di concludere, controlla import inutilizzati, tipi, naming e possibili stati non gestiti.



