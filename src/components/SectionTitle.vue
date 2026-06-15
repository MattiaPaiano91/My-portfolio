<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>(), {
  eyebrow: '',
  description: '',
  align: 'left',
});
</script>

<template>
  <div class="mb-[1.6rem]" :class="{ 'text-center': align === 'center' }">
    <p
      v-if="eyebrow"
      class="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-[#989edd]"
    >
      {{ eyebrow }}
    </p>
    <h2 class="m-0 text-[clamp(1.8rem,3vw,2.8rem)]">{{ title }}</h2>
    <p
      v-if="description"
      class="mt-[0.85rem] max-w-[62ch] leading-[1.75] opacity-80"
      :class="{ 'mx-auto': align === 'center' }"
    >
      {{ description }}
    </p>
  </div>
</template>
