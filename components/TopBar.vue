<template>
  <div id="top-bar">
    <NuxtLink to="/" v-show="showHomeButton" class="left-top-icon">
      <ion-icon name="home"></ion-icon>
    </NuxtLink>
    <NuxtLink
      v-show="showBackButton"
      :to="parentRoutePath"
      class="left-top-icon"
    >
      <ion-icon name="arrow-back" class="back"></ion-icon>
    </NuxtLink>
    <div class="links" v-show="showHomeButton">
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.path"
        :class="{ 'is-selected': isSelected(index) }"
        class="link"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useViewStore } from '~/stores/useViewStore'

type LinkName = 'profile' | 'works'
type Link = {
  name: LinkName
  path: string
}

const route = useRoute()
const viewStore = useViewStore()

const links: Link[] = [
  {
    name: 'profile',
    path: '/profile'
  },
  {
    name: 'works',
    path: '/works'
  }
]

const parentRoutePath = computed(() => {
  const fullPath = route.fullPath.replace(/\/$/, '') // 末尾に '/' がついていたら取り除く
  return fullPath.slice(0, fullPath.lastIndexOf('/'))
})

const showBackButton = computed(() => {
  return (
    links.map((link) => link.path).includes(parentRoutePath.value) &&
    viewStore.viewType === 'mobile'
  )
})

const showHomeButton = computed(() => {
  return !showBackButton.value
})

const isSelected = (index: number): boolean => {
  const rootPath = '/' + route.path.split('/')[1]
  return rootPath === links[index].path
}
</script>

<style lang="scss" scoped>
#top-bar {
  background: $sky-gradient;
  width: 100%;
  height: 3rem;
  display: flex;
  position: absolute;
  z-index: 100;
}
.left-top-icon {
  font-size: 1.8rem;
  width: 1.8rem;
  margin: auto 1rem;
  ion-icon {
    color: $base-white;
    vertical-align: middle;
  }
}
.links {
  margin: auto;
  margin-bottom: 0;
  transform: translateX(
    calc(-1 * (1.8rem + 1rem * 2) / 2)
  ); // 中央揃えにするために .left-top-icon の幅の半分だけ戻す
  .link {
    padding: 0 0.7rem;
    color: $base-lightgray;
    display: inline-grid;
    &:after {
      content: '';
      height: 4px;
      margin-top: 0.3rem;
      margin-left: -0.7rem;
      width: calc(100% + 1.4rem);
    }
    &.is-selected {
      color: $point-skyblue;
      font-weight: bold;
      &:after {
        background-color: $point-skyblue;
      }
    }
  }
}
</style>
