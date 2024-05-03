<script setup>
const props = defineProps(['user'])

console.log(props)
</script>

<template>

    <div>
       Mi chiamo {{ user.name }} e ho {{ user.age }} anni
    </div>

</template>