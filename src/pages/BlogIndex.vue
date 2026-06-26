<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useUiStore } from "@/stores/ui.js";
import { posts } from "@/data/posts.js";
import type { Post } from "@/types/index.ts";

const uiStore = useUiStore();

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "auto" });

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".blog-hero-animate",
    { autoAlpha: 0, y: 28 },
    { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.12, ease: "power3.out" }
  );

  gsap.utils.toArray<HTMLElement>(".post-card").forEach((card, i) => {
    gsap.fromTo(
      card,
      { autoAlpha: 0, y: 32 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        delay: i * 0.06,
        scrollTrigger: { trigger: card, start: "top 86%" },
      }
    );
  });
});
</script>

<template>
  <div class="blog-page" :class="uiStore.themeFlag ? 'blog-light' : 'blog-dark'">

    <section class="blog-hero">
      <div class="blog-hero-inner">
        <p class="section-eyebrow blog-hero-animate">Blog</p>
        <h1 class="blog-hero-title blog-hero-animate">Note tecniche e riflessioni.</h1>
        <p class="blog-hero-desc blog-hero-animate">
          Cose che ho imparato, pattern che funzionano, errori da non rifare.
          Scritto per me, utile forse anche per altri.
        </p>
      </div>
    </section>

    <section class="post-grid-section">
      <div class="post-grid-inner">
        <div class="post-grid">
          <router-link
            v-for="post in (posts as Post[])"
            :key="post.id"
            class="post-card"
            :to="{ name: 'show-post', params: { slug: post.slug } }"
          >
            <div class="post-card-meta">
              <span class="post-date">{{ formatDate(post.date) }}</span>
              <span class="post-read-time">{{ post.readTime }} min</span>
            </div>

            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-excerpt">{{ post.excerpt }}</p>

            <div class="post-card-footer">
              <div class="post-tags">
                <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
              </div>
              <span class="post-read-link">Leggi &rarr;</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
.blog-page {
  min-height: calc(100vh - 96px);
}

.blog-light {
  background:
    radial-gradient(circle at 50% 0%, rgba(152, 158, 221, 0.2), transparent 38%),
    linear-gradient(180deg, #f8f9ff 0%, #ffffff 55%);
}

.blog-dark {
  background:
    radial-gradient(circle at 50% 0%, rgba(152, 158, 221, 0.18), transparent 32%),
    linear-gradient(180deg, #101828 0%, #172033 55%);
}

/* ── Hero ── */
.blog-hero {
  padding: 3.5rem 1rem 2rem;
}

.blog-hero-inner {
  max-width: 720px;
  margin: 0 auto;
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

.blog-hero-title {
  font-size: clamp(2.2rem, 5.5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin: 0;
}

.blog-hero-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.72;
  margin: 0;
  max-width: 56ch;
}

/* ── Grid post ── */
.post-grid-section {
  padding: 0 1rem 5rem;
}

.post-grid-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* ── Card ── */
.post-card {
  padding: 1.75rem;
  border-radius: 20px;
  border: 1px solid rgba(152, 158, 221, 0.18);
  background:
    linear-gradient(160deg, rgba(152, 158, 221, 0.08), rgba(152, 158, 221, 0.02)),
    rgba(255, 255, 255, 0.78);
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  .blog-dark & {
    background:
      linear-gradient(160deg, rgba(152, 158, 221, 0.1), rgba(152, 158, 221, 0.03)),
      rgba(16, 24, 40, 0.6);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.1);
  }
}

.post-card-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.post-date {
  font-size: 0.8rem;
  opacity: 0.55;
  font-weight: 500;
}

.post-read-time {
  font-size: 0.78rem;
  font-weight: 600;
  color: #989edd;
  background: rgba(152, 158, 221, 0.12);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.post-title {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
}

.post-excerpt {
  font-size: 0.93rem;
  line-height: 1.75;
  opacity: 0.72;
  margin: 0;
  flex: 1;
}

.post-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(152, 158, 221, 0.14);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.post-tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(152, 158, 221, 0.3);
  opacity: 0.7;
}

.post-read-link {
  font-size: 0.88rem;
  font-weight: 600;
  color: #989edd;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.18s ease;

  &:hover {
    opacity: 0.75;
  }
}

/* ── Responsive ── */
@media screen and (max-width: 600px) {
  .blog-hero {
    padding-top: 2rem;
  }

  .post-grid {
    grid-template-columns: 1fr;
  }
}
</style>
