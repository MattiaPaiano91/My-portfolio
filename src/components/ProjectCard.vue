<script setup>
import SkillBadge from "@/components/SkillBadge.vue";
import { projectAccentClasses } from "@/data/project-card.js";

const emit = defineEmits(["open"]);

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <article
    class="h-full overflow-hidden rounded-[28px] border border-[rgba(152,158,221,0.18)] bg-white/85 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_55px_rgba(15,23,42,0.12)]"
    :class="projectAccentClasses[project.accent] || 'accent-indigo'"
  >
    <router-link
      class="flex h-full flex-col text-inherit no-underline"
      :to="{ name: 'show-project' }"
      @click="emit('open', project.id)"
    >
      <div class="project-cover relative aspect-[16/10] overflow-hidden">
        <img class="h-full w-full object-cover" :src="project.image" :alt="project.title" />
      </div>

      <div class="flex flex-1 flex-col p-[1.3rem]">
        <div class="project-topline">
          <span class="inline-flex rounded-full bg-white/70 px-[0.65rem] py-[0.35rem] text-[0.72rem] uppercase tracking-[0.08em]">
            {{ project.featured ? "Progetto principale" : "Progetto minore" }}
          </span>
        </div>

        <h3 class="mb-[0.7rem] mt-[0.9rem] text-[1.2rem]">{{ project.title }}</h3>
        <p class="m-0 leading-[1.7] opacity-[0.82]">{{ project.summary }}</p>

        <div class="mt-[1.1rem] flex flex-wrap gap-[0.6rem]">
          <SkillBadge
            v-for="item in project.tech"
            :key="item"
            :label="item"
            tone="subtle"
          />
        </div>

        <div class="mt-auto flex items-center justify-between pt-[1.2rem] font-medium">
          <span>Apri dettaglio</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </router-link>
  </article>
</template>

<style lang="scss" scoped>
.accent-indigo .project-cover {
  background: linear-gradient(135deg, #dbe2ff, #eef2ff);
}

.accent-violet .project-cover {
  background: linear-gradient(135deg, #eadcff, #f4eeff);
}

.accent-slate .project-cover {
  background: linear-gradient(135deg, #dfe7f4, #edf2f7);
}

.accent-sky .project-cover {
  background: linear-gradient(135deg, #dcf2ff, #eef9ff);
}

.accent-soft .project-cover {
  background: linear-gradient(135deg, #f5f5f7, #ffffff);
}
</style>
