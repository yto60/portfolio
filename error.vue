<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    statusMessage: string
  }
}

const props = defineProps<Props>()

const message = computed(() => {
  return props.error.statusCode === 404 ? 'Not Found' : 'Error'
})
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
