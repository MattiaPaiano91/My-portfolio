<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  align: {
    type: String,
    default: "left",
  },
});
</script>

<template>
  <div class="section-title" :class="`align-${align}`">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.section-title {
  margin-bottom: 1.6rem;
}

.align-center {
  text-align: center;
}

.eyebrow {
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  color: #989edd;
}

h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
}

.description {
  margin: 0.85rem 0 0;
  max-width: 62ch;
  line-height: 1.75;
  opacity: 0.8;
}

.align-center .description {
  margin-left: auto;
  margin-right: auto;
}
</style>
