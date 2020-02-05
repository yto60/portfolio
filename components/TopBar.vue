<template lang="pug">
  div#top-bar
    nuxt-link(to="/").home
      ion-icon(name="home")
    div.links
      nuxt-link(
        v-for="(link, index) in links"
        :key="index"
        :to="link.fullPath"
        :class="{'is-selected': isSelected(index)}"
        ).link
        | {{ link.name }}

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type LinkName = 'profile' | 'works'
type Link = {
  name: LinkName
  fullPath: string
}

@Component({
  components: {}
})
export default class TopBar extends Vue {
  readonly links: Link[] = [
    {
      name: 'profile',
      fullPath: '/profile'
    },
    {
      name: 'works',
      fullPath: '/works'
    }
  ]

  isSelected(index: number): boolean {
    return this.$route.fullPath === this.links[index].fullPath
  }
}
</script>

<style lang="scss" scoped>
#top-bar {
  background: $sky-gradient;
  width: 100%;
  height: 3rem;
  display: flex;
}
.home {
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
  ); // 中央揃えにするためにhomeの幅の半分だけ戻す
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
