<template lang="pug">
  div#top-bar
    nuxt-link(to="/" v-if="showHomeButton").left-top-icon
      ion-icon(name="home")
    div(v-else @click="$router.go(-1)").left-top-icon
      ion-icon(name="arrow-back").back
    div.links(v-show="showHomeButton")
      nuxt-link(
        v-for="(link, index) in links"
        :key="index"
        :to="link.path"
        :class="{'is-selected': isSelected(index)}"
        ).link
        | {{ link.name }}

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type LinkName = 'profile' | 'works'
type Link = {
  name: LinkName
  path: string
}

@Component({
  components: {}
})
export default class TopBar extends Vue {
  readonly links: Link[] = [
    {
      name: 'profile',
      path: '/profile'
    },
    {
      name: 'works',
      path: '/works'
    }
  ]

  get showHomeButton() {
    const path = this.$route.path
    return (
      this.$store.state.viewType === 'desktop' ||
      this.links.map(link => link.path).includes(path)
    )
  }

  isSelected(index: number): boolean {
    const rootPath = '/' + this.$route.path.split('/')[1]
    return rootPath === this.links[index].path
  }
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
    -(1.8rem + 1rem * 2) / 2
  ); // 中央揃えにするために .left-top-icon の幅の半分だけ戻す
  .link {
    padding: 0 0.7rem;
    color: $base-lightgray;
    display: inline-grid;
    &.is-selected {
      color: $point-skyblue;
      font-weight: bold;
      &:after {
        content: '';
        background-color: $point-skyblue;
        height: 4px;
        margin-top: 0.3rem;
        margin-left: -0.7rem;
        width: calc(100% + 1.4rem);
      }
    }
  }
}
</style>
