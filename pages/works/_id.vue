<template lang="pug">
  div.works-id
    div.works-list-wrapper
      WorksList(:selectedIndex="id" v-if="$store.state.viewType === 'desktop'")
    //- div.work-details
      //- img()
      h4
        | {{ work.name }}
      div.description(v-html="work.description")

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { works } from '@/utils/data'
import WorksList from '@/components/WorksList.vue'

@Component({
  components: {
    WorksList
  },
  validate({ params }) {
    return /^\d+$/.test(params.id) && Number(params.id) < works.length
  }
})
export default class WorksId extends Vue {
  get id(): number {
    return Number(this.$route.params.id)
  }

  get work() {
    return works[this.id]
  }
}
</script>

<style lang="scss" scoped>
.works-list-wrapper {
  height: 100%;
  width: min-content;
  padding-right: 0.2rem;
  border-right: 3px solid $main-blue;
}
</style>
