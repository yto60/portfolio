<template lang="pug">
  div(:class="$store.getters.getViewTypeClass").is-fullheight
    TopBar(v-show="showTopBar")
    nuxt.page-wrapper
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopBar from '@/components/TopBar.vue'

@Component({
  components: {
    TopBar
  }
})
export default class DefaultLayout extends Vue {
  readonly mobileThreshould = 700

  get showTopBar() {
    return this.$route.fullPath !== '/'
  }

  private handleResizeWindow() {
    const width = window.innerWidth

    let viewType
    if (width <= this.mobileThreshould) {
      viewType = 'mobile'
    } else {
      viewType = 'desktop'
    }
    if (this.$store.state.viewType !== viewType) {
      this.$store.commit('setViewType', viewType)
    }
  }

  created() {
    this.handleResizeWindow()
    window.addEventListener('resize', this.handleResizeWindow)
    window.addEventListener('orientationchange', this.handleResizeWindow)
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: calc(100% - 3rem); // トップバーの高さを引いた
  padding: 1.5rem;
}
</style>
