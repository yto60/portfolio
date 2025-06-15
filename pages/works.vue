<template>
  <div id="works" :class="viewTypeClass">
    <div class="works-list-wrapper" v-if="showWorksList">
      <WorksList :selectedIndex="id" />
    </div>
    <div class="work-details-wrapper" v-if="showWorkDetails">
      <NuxtPage :key="id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useViewStore } from '~/stores/useViewStore'

const route = useRoute()
const viewStore = useViewStore()

const id = computed<number | undefined>(() => {
  return route.params.id ? Number(route.params.id) : undefined
})

const viewTypeClass = computed(() => viewStore.viewTypeClass)

const showWorksList = computed(() => {
  return viewStore.viewType === 'desktop' || route.name === 'works'
})

const showWorkDetails = computed(() => {
  return viewStore.viewType === 'desktop' || route.name !== 'works'
})
</script>

<style lang="scss" scoped>
#works {
  width: 100%;
  display: flex;
}

.works-list-wrapper {
  height: 100%;
}

.work-details-wrapper {
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  height: calc(100% - 2rem); // padding-top
}

.is-desktop {
  .works-list-wrapper {
    width: min-content;
    float: left;
    padding-right: 0.2rem;
    border-right: 3px solid $main-blue;
  }
  .work-details-wrapper {
    overflow-y: auto;
    padding-left: 1.5rem; // 右側にpage-wrapperがあるので左右対象になるよ うに
    .work-details {
      width: 90%;
      max-width: 660px;
      margin: auto;
    }
  }
}

.is-mobile {
  .works-list-wrapper {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
