<template lang="pug">
  div#index
    img#logo(src="@/assets/logo.svg")
    div.links
      span.link-wrapper
        nuxt-link(to="/profile").link.profile
          | profile
      span.link-wrapper
        nuxt-link(to="/works").link.works
          | works
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
#index {
  text-align: center;
}
#logo {
  width: 70%;
  max-width: 380px;
  margin-top: 12rem;
}
.links {
  margin-top: 2.5rem;
  .link-wrapper {
    display: inline-grid;
    margin: 0 2rem;
    cursor: pointer;
    &:after {
      content: '';
      height: 4px;
      background: $sky-gradient;
      width: 0;
      margin-left: auto;
    }
    &:hover:after {
      margin-left: 0;
    }
  }
  .link {
    color: $base-darkgray;
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0 0.8rem 0.5rem 0.8rem;
  }
}

// animation
.link-wrapper:hover:after {
  animation: link_hover 0.2s ease-out 0s forwards;
}
.link-wrapper:after {
  animation: link_hover_off 0.2s ease-in 0s forwards;
}

@keyframes link_hover {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes link_hover_off {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
</style>
