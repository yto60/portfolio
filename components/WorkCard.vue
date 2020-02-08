<template lang="pug">
  nuxt-link(:to="`/works/${work.id}`" :class="{ 'is-selected': isSelected }").work-card.is-clickable
    img(v-lazy="`/img/${work.cardImage}`").image
    div.card-footer
      div.name
        | {{ work.name }}
      div.summary(v-if="work.summary")
        | {{ work.summary }}

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Product } from '@/utils/data.d'

@Component({
  components: {}
})
export default class WorkCard extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  readonly work!: Product

  get isSelected() {
    return this.work.id === Number(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.work-card {
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  position: relative;
  color: $base-black;
  font-weight: normal;
  &:hover {
    box-shadow: $base-lightgray 5px 5px 10px;
  }
  &.is-selected {
    border: 3px solid $main-blue;
    box-sizing: border-box;
  }
}
.image,
.card-footer {
  width: 100%;
  height: 35%;
}
.image {
  z-index: 0;
}
.card-footer {
  z-index: 1;
  left: 0;
  bottom: 0;
  position: absolute;
  padding: 0.5rem 1rem;
  box-sizing: border-box; // paddingも含める
  height: fit-content;
  background-color: rgba(200, 239, 251, 0.9);
  .name {
    font-weight: bold;
    font-size: 1rem;
    color: $main-blue;
  }
  .summary {
    margin-top: 0.1rem;
    margin-left: 1.5rem;
    font-size: 0.8rem;
  }
}
</style>
