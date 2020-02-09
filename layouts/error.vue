<template lang="pug">
  h2
    | {{ message }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Error extends Vue {
  @Prop({
    type: Object,
    default: null
  })
  error!: {
    statusCode: number
    message: string
  }

  get message() {
    return this.error.statusCode === 404 ? 'Not Found' : 'Error'
  }
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
