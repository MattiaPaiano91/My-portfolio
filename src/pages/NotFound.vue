<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "auto" });
});
</script>

<template>
  <section class="not-found-page">
    <div class="not-found-content">
      <p class="eyebrow">Errore 404</p>
      <h1>Pagina non trovata.</h1>
      <p class="description">
        Il link che hai aperto non esiste oppure e stato spostato. Puoi tornare alla home
        o dare un'occhiata ai progetti.
      </p>

      <div class="actions">
        <router-link class="cta-primary" :to="{ name: 'WelcomeApp' }">
          Torna alla home
        </router-link>
        <router-link class="cta-secondary" :to="{ name: 'project-index' }">
          Guarda i progetti
        </router-link>
      </div>
    </div>

    <div class="not-found-visual" aria-hidden="true">
      <span>4</span>
      <span>0</span>
      <span>4</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/partials/variables.scss" as vars;

.not-found-page {
  width: min(1140px, 100% - 2rem);
  margin: 0 auto;
  min-height: vars.$mainHeight;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem 1rem 5rem;
}

.not-found-content {
  flex: 1 1 0;
  max-width: 620px;
}

.eyebrow {
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  color: vars.$violet;
}

h1 {
  margin-bottom: 1rem;
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 1.04;
  font-weight: 700;
}

.description {
  max-width: 58ch;
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.82;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.cta-primary,
.cta-secondary {
  padding: 0.95rem 1.35rem;
  border-radius: 999px;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.cta-primary {
  background: vars.$violet;
  color: #ffffff;
  box-shadow: 0 14px 24px rgba(152, 158, 221, 0.28);
}

.cta-secondary {
  border: 1px solid rgba(152, 158, 221, 0.35);
}

.cta-primary:hover,
.cta-secondary:hover {
  transform: translateY(-2px);
}

.not-found-visual {
  flex: 0 1 420px;
  display: flex;
  justify-content: center;
  gap: 0.35rem;
  padding: 2rem;
  border-radius: 32px;
  background:
    linear-gradient(180deg, rgba(152, 158, 221, 0.18), rgba(152, 158, 221, 0.05)),
    rgba(255, 255, 255, 0.18);
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.12);

  span {
    font-size: clamp(4.5rem, 12vw, 8.5rem);
    line-height: 1;
    font-weight: 800;
    color: vars.$violet;
  }

  span:nth-child(2) {
    color: inherit;
    opacity: 0.32;
  }
}

@media screen and (max-width: 991px) {
  .not-found-page {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .not-found-content,
  .description {
    margin-left: auto;
    margin-right: auto;
  }

  .actions {
    justify-content: center;
  }
}

@media screen and (max-width: 575px) {
  .not-found-page {
    padding-top: 1rem;
  }

  .actions {
    flex-direction: column;
  }
}
</style>
