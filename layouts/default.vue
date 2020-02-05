<template>
  <div>
    <nuxt />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class DefaultLayout extends Vue {
  readonly mobileThreshould = 768

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
