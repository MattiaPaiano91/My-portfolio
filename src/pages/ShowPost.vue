<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { gsap } from "gsap";
import { useUiStore } from "@/stores/ui.js";
import { posts } from "@/data/posts.js";
import type { Post } from "@/types/index.ts";

const route = useRoute();
const router = useRouter();
const uiStore = useUiStore();

const post = computed<Post | undefined>(() =>
  (posts as Post[]).find((p) => p.slug === route.params.slug)
);

const formattedDate = computed(() => {
  if (!post.value) return "";
  return new Date(post.value.date).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});

function goBack() {
  router.push({ name: "blog" });
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "auto" });

  if (!post.value) return;

  gsap.fromTo(
    ".post-animate",
    { autoAlpha: 0, y: 24 },
    { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
  );
});
</script>

<template>
  <div class="show-post-page" :class="uiStore.themeFlag ? 'post-light' : 'post-dark'">

    <div v-if="post" class="post-container">
      <button type="button" class="back-btn post-animate" @click="goBack">
        &larr; Blog
      </button>

      <header class="post-header">
        <div class="post-meta post-animate">
          <span class="post-date">{{ formattedDate }}</span>
          <span class="post-read-time">{{ post.readTime }} min di lettura</span>
        </div>

        <h1 class="post-title post-animate">{{ post.title }}</h1>
        <p class="post-excerpt post-animate">{{ post.excerpt }}</p>

        <div class="post-tags post-animate">
          <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
        </div>
      </header>

      <div class="post-divider post-animate"></div>

      <!-- I contenuti sono statici e controllati, non input utente -->
      <article class="post-body post-animate" v-html="post.content"></article>
    </div>

    <div v-else class="post-not-found">
      <p class="section-eyebrow">404</p>
      <h1>Post non trovato.</h1>
      <button type="button" class="back-btn" @click="goBack">&larr; Torna al blog</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.show-post-page {
  min-height: calc(100vh - 96px);
  padding: 3rem 1rem 5rem;
}

.post-light {
  background:
    radial-gradient(circle at 50% 0%, rgba(152, 158, 221, 0.2), transparent 38%),
    linear-gradient(180deg, #f8f9ff 0%, #ffffff 55%);
}

.post-dark {
  background:
    radial-gradient(circle at 50% 0%, rgba(152, 158, 221, 0.18), transparent 32%),
    linear-gradient(180deg, #101828 0%, #172033 55%);
}

.post-container {
  width: min(760px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

/* ── Back button ── */
.back-btn {
  align-self: flex-start;
  font-size: 0.88rem;
  font-weight: 600;
  color: #989edd;
  background: transparent;
  border: 1px solid rgba(152, 158, 221, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  transition: transform 0.18s ease, background-color 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(152, 158, 221, 0.1);
  }
}

/* ── Header ── */
.post-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  font-weight: 600;
  color: #989edd;
  margin: 0;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.post-date {
  font-size: 0.82rem;
  opacity: 0.55;
  font-weight: 500;
}

.post-read-time {
  font-size: 0.78rem;
  font-weight: 600;
  color: #989edd;
  background: rgba(152, 158, 221, 0.12);
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
}

.post-title {
  font-size: clamp(1.9rem, 5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
}

.post-excerpt {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.7;
  margin: 0;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.post-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(152, 158, 221, 0.3);
  opacity: 0.7;
}

.post-divider {
  height: 1px;
  background: rgba(152, 158, 221, 0.18);
}

/* ── Body ── */
.post-body {
  font-size: 1rem;
  line-height: 1.85;
  opacity: 0.88;

  :deep(h2) {
    font-size: 1.35rem;
    font-weight: 700;
    margin: 2rem 0 0.75rem;
    letter-spacing: -0.01em;
  }

  :deep(p) {
    margin: 0 0 1.25rem;
  }

  :deep(pre) {
    background: rgba(152, 158, 221, 0.08);
    border: 1px solid rgba(152, 158, 221, 0.18);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    overflow-x: auto;
    margin: 1.25rem 0;
    font-size: 0.88rem;
    line-height: 1.7;
  }

  :deep(code) {
    font-family: "Fira Code", "Cascadia Code", monospace;
    font-size: 0.9em;
    background: rgba(152, 158, 221, 0.1);
    padding: 0.1em 0.35em;
    border-radius: 4px;
  }

  :deep(pre code) {
    background: transparent;
    padding: 0;
  }
}

/* ── Not found ── */
.post-not-found {
  width: min(560px, 100%);
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin: 0;
  }
}

/* ── Responsive ── */
@media screen and (max-width: 600px) {
  .show-post-page {
    padding-top: 2rem;
  }
}
</style>
