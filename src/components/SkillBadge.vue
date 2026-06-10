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
  <span
    class="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[rgba(152,158,221,0.18)] bg-[rgba(152,158,221,0.12)] px-[0.92rem] py-[0.58rem] text-[0.9rem] leading-none text-[#1f2937]"
    :class="`tone-${tone}`"
  >
    {{ label }}
  </span>
</template>

<style lang="scss" scoped>
.tone-subtle {
  background: rgba(16, 24, 40, 0.08);
}

.tone-strong {
  background: #989edd;
  color: #ffffff;
}
</style>
