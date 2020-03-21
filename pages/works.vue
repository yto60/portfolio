<template lang="pug">
  div#works(:class="$store.getters.getViewTypeClass")
    div.works-list-wrapper(v-if="showWorksList")
      WorksList(:selectedIndex="id")
    div.work-details-wrapper(v-if="showWorkDetails")
      nuxt-child(:key="id")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import WorksList from '@/components/WorksList.vue'

@Component({
  components: {
    WorksList
  }
})
export default class Works extends Vue {
  get id(): number | undefined {
    return this.$route.params.id ? Number(this.$route.params.id) : undefined
  }

  get showWorksList() {
    return (
      this.$store.state.viewType === 'desktop' || this.$route.name === 'works'
    )
  }

  get showWorkDetails() {
    return (
      this.$store.state.viewType === 'desktop' || this.$route.name !== 'works'
    )
  }
}
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
