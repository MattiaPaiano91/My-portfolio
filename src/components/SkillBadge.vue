<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  tone: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <span class="skill-badge" :class="`tone-${tone}`">{{ label }}</span>
</template>

<style lang="scss" scoped>
.skill-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.58rem 0.92rem;
  border-radius: 999px;
  border: 1px solid rgba(152, 158, 221, 0.18);
  background: rgba(152, 158, 221, 0.12);
  color: #1f2937;
  font-size: 0.9rem;
  line-height: 1;
  white-space: nowrap;
}

.tone-subtle {
  background: rgba(16, 24, 40, 0.08);
}

.tone-strong {
  background: #989edd;
  color: #ffffff;
}
</style>
