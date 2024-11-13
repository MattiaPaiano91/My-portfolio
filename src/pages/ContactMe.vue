<script setup>
import { onMounted, ref } from "vue";
import { data } from "../store";
onMounted(()=> {
  window.scroll({
        top: 0,
        behavior: "instant",
      });
})
</script>

<template>
  <div class="contact-container text-center">
    <h1>Contattami</h1>
    <div class="contact-content" :class="data.themeFlag ? '' : 'bg-dark'">
      <div class="contact-info">
        <p id="title">Non esitare a contattarmi per qualsiasi domanda o collaborazione.</p>
        <ul class="text-center">
          <li>
            <strong>Email:</strong>
            <a href="mailto:mattia.paiano@example.com"
              >paianomattia.dev@gmail.com</a
            >
          </li>
          <li><strong>Località:</strong> Lecce, Italia</li>
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
    <div class="img-box">
      <img
        :class="data.themeFlag ? '' : 'inverted'"
        src="/public/img/LogoConNomeBianco.svg"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables.scss";
.inverted {
  filter: invert(1);
}
.contact-container {
  .img-box {
    width: 60%;
    margin: 0 auto;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  min-height: $mainHeight;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Poppins", sans-serif;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: $violet;
    font-weight: 600;
  }

  .contact-content {
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .contact-info {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: $violet;
      font-weight: 500;
    }

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

        strong {
          min-width: 80px;
          display: inline-block;
          margin-right: 0.5rem;
        }

        a {
          color: $violet;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: darken($violet, 15%);
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
