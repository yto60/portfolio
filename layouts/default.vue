<template>
  <div :class="viewTypeClass" class="is-fullheight">
    <TopBar v-show="showTopBar" />
    <slot class="page-wrapper" />
  </div>
</template>

<script setup lang="ts">
import { useViewStore } from '~/stores/useViewStore'

const route = useRoute()
const viewStore = useViewStore()

const mobileThreshold = 700

const viewTypeClass = computed(() => viewStore.viewTypeClass)

const showTopBar = computed(() => {
  return route.fullPath !== '/'
})

const handleResizeWindow = () => {
  const width = window.innerWidth

  let viewType: 'mobile' | 'desktop'
  if (width <= mobileThreshold) {
    viewType = 'mobile'
  } else {
    viewType = 'desktop'
  }
  if (viewStore.viewType !== viewType) {
    viewStore.setViewType(viewType)
  }
}

onMounted(() => {
  handleResizeWindow()
  window.addEventListener('resize', handleResizeWindow)
  window.addEventListener('orientationchange', handleResizeWindow)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResizeWindow)
  window.removeEventListener('orientationchange', handleResizeWindow)
})
</script>

<style lang="scss" scoped>
.page-wrapper {
  position: absolute;
  top: 3rem; // トップバーの分
  height: calc(100% - 3rem); // トップバーの高さを引いた
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box; // paddingを含める
  overflow-y: auto;
}
</style>
