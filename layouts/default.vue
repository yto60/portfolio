<template lang="pug">
  div(:class="$store.getters.getViewTypeClass")
    TopBar(v-show="showTopBar")
    nuxt
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
  readonly mobileThreshould = 768

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

<style></style>
