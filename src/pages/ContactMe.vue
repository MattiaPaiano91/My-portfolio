<script setup>
import { onMounted } from "vue";
import { useUiStore } from "@/stores/ui.js";

const uiStore = useUiStore();

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "auto" });
});

function downloadCV() {
  const link = document.createElement("a");
  link.href = "/cv/Mattia Paiano CV.pdf";
  link.download = "Mattia-Paiano-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<template>
  <div class="contact-container">
    <p class="eyebrow">Contatti</p>
    <h1>Parliamone.</h1>

    <div class="contact-content" :class="{ 'contact-content-dark': !uiStore.themeFlag }">
      <div class="contact-info">
        <p id="title">
          Per lavoro, collaborazioni o due chiacchiere tecniche, trovi tutto qui.
        </p>
        <ul>
          <li>
            <strong>Email:</strong>
            <a href="mailto:paianomattia.dev@gmail.com">paianomattia.dev@gmail.com</a>
          </li>
          <li><strong>Localita:</strong> Lecce, Italia</li>
          <li>
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/mattia-paiano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/mattia-paiano
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/MattiaPaiano91"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/MattiaPaiano91
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="p-4">
      <button @click="downloadCV()" class="download-cv" :class="{ 'download-cv-dark': !uiStore.themeFlag }">
        Scarica CV <i class="fa-solid fa-circle-down"></i>
      </button>
    </div>

    <div class="img-box">
      <img
        :class="uiStore.themeFlag ? '' : 'inverted'"
        src="/img/LogoConNomeBianco.svg"
        alt="Logo Mattia Paiano"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/partials/variables.scss" as vars;

.inverted {
  filter: invert(1);
}

.contact-container {
  min-height: vars.$mainHeight;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  font-family: "Poppins", sans-serif;
  text-align: center;

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.78rem;
    color: vars.$violet;
    margin-bottom: 0.8rem;
  }

  h1 {
    font-size: clamp(2.4rem, 6vw, 4rem);
    margin-bottom: 1.4rem;
    font-weight: 700;
  }

  .contact-content {
    background:
      linear-gradient(180deg, rgba(152, 158, 221, 0.14), rgba(152, 158, 221, 0.04)),
      #f8f8f8;
    border-radius: 24px;
    padding: 2rem;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  }

  .contact-content-dark {
    background:
      linear-gradient(180deg, rgba(152, 158, 221, 0.12), rgba(152, 158, 221, 0.04)),
      rgba(255, 255, 255, 0.82);
    color: #101828;
  }

  .contact-info {
    p {
      margin-bottom: 1.5rem;
      color: inherit;
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin-bottom: 1rem;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;

        strong {
          min-width: 90px;
          display: inline-block;
          margin-right: 0.5rem;
        }

        a {
          color: vars.$violet;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .img-box {
    width: min(460px, 100%);
    margin: 0 auto;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
}

.download-cv {
  padding: 0.95rem 1.35rem;
  border-radius: 999px;
  border: 1px solid rgba(152, 158, 221, 0.3);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 24px rgba(15, 23, 42, 0.12);
  }
}

.download-cv-dark {
  background: rgba(255, 255, 255, 0.82);
  color: #101828;
  box-shadow:
    0 10px 22px rgba(15, 23, 42, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.18);

  &:hover {
    box-shadow:
      0 16px 30px rgba(15, 23, 42, 0.28),
      0 0 22px rgba(152, 158, 221, 0.18);
  }
}
</style>
