<template>
  <div class="works-list" :class="viewTypeClass">
    <div v-for="category in workCategories" class="wrapper">
      <h3>{{ category }}</h3>
      <WorkCard
        v-for="(work, index) in categorizedWorks[category]"
        :key="index"
        :work="work"
        class="work-card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useViewStore } from '~/stores/useViewStore'
import works from '@/assets/data.json'
import { workCategories, categorizedWorks } from '@/utils/data'
import WorkCard from '@/components/WorkCard.vue'

interface Props {
  selectedIndex?: number
}

const props = defineProps<Props>()
const viewStore = useViewStore()

const viewTypeClass = computed(() => viewStore.viewTypeClass)
</script>

<style lang="scss" scoped>
.works-list {
  padding-top: 0.2rem;
  height: 100%;
  &.is-mobile {
    margin: auto;
    width: 95%;
    max-width: 22rem;
    .work-card {
      height: 12rem;
    }
  }
  &.is-desktop {
    overflow-y: auto;
    width: 16rem;
    padding-right: 1rem;
    .work-card {
      height: 10rem;
    }
  }
}
.wrapper {
  width: 100%;
  h3,
  .work-card {
    width: 100%;
  }
  h3 {
    margin-top: 0;
    padding: 0.5rem 0.7rem;
    border-bottom: 2px dashed $point-red;
    box-sizing: border-box;
  }
}
</style>
