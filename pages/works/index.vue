<template lang="pug"></template>

<script setup lang="ts">
import { useViewStore } from '~/stores/useViewStore'

const viewStore = useViewStore()
const router = useRouter()

onMounted(() => {
  if (viewStore.viewType === 'desktop') {
    router.push('/works/0/')
  }
})
</script>

<style lang="scss" scoped></style>
