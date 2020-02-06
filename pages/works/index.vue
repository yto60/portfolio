<template lang="pug">
  div#works
    WorksList
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import WorksList from '@/components/WorksList.vue'

@Component({
  components: {
    WorksList
  }
})
export default class WorksIndex extends Vue {
  created() {
    if (this.$store.state.viewType === 'desktop') {
      this.$router.push('/works/0')
    }
  }
}
</script>

<style lang="scss" scoped></style>
