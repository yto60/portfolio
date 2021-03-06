<template lang="pug">
  div#top-bar
    nuxt-link(to="/" v-show="showHomeButton").left-top-icon
      ion-icon(name="home")
    nuxt-link(v-show="showBackButton" :to="parentRoutePath").left-top-icon
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

  get showBackButton() {
    return (
      this.links.map(link => link.path).includes(this.parentRoutePath) &&
      this.$store.state.viewType === 'mobile'
    )
  }

  get showHomeButton() {
    return !this.showBackButton
  }

  get parentRoutePath() {
    const fullPath = this.$route.fullPath.replace(/\/$/, '') // 末尾に '/' がついていたら取り除く
    return fullPath.slice(0, fullPath.lastIndexOf('/'))
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
