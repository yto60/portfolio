<template lang="pug">
  div.works-list(:class="$store.getters.getViewTypeClass")
    div(v-for="category in workCategories").wrapper
      h3 {{ category }}
      WorkCard(v-for="(work, index) in categorizedWorks[category]" :key="index" :work="work").work-card
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import works from '@/assets/data.json'
import { workCategories, categorizedWorks } from '@/utils/data'
import WorkCard from '@/components/WorkCard.vue'

@Component({
  components: {
    WorkCard
  }
})
export default class WorksList extends Vue {
  @Prop({
    type: Number
  })
  readonly selectedIndex: number | undefined

  get works() {
    return works
  }

  get workCategories() {
    return workCategories
  }

  get categorizedWorks() {
    return categorizedWorks
  }
}
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
