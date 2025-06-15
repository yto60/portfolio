<template>
  <NuxtLink
    :to="`/works/${work.id}/`"
    :class="{ 'is-selected': isSelected }"
    class="work-card is-clickable"
  >
    <img :src="`/img/${work.cardImage}`" class="image" />
    <div class="card-footer">
      <div class="name">
        {{ work.name }}
      </div>
      <div class="summary" v-if="work.summary">
        {{ work.summary }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from '@/utils/data'

interface Props {
  work: Product
}

const props = defineProps<Props>()
const route = useRoute()

const isSelected = computed(() => {
  return props.work.id === Number(route.params.id)
})
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
}
.image {
  z-index: 0;
  object-fit: cover;
  object-position: top;
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
