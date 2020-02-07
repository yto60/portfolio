<template lang="pug">
  div#profile
    div.about-wrapper.wrapper(:class="$store.getters.getViewTypeClass")
      div.about
        h2
          | yto
        h4
          | (60° / 60deg)
        div.link-buttons
          a(href="https://twitter.com/piover3_rad").twitter
            ion-icon(name="logo-twitter")
          a(href="https://github.com/yto60").github
            ion-icon(name="logo-github")
          a(href="https://trap.jp/author/60/").trap-blog
            ion-icon(name="list-box")
        div.contact
          ion-icon(name="mail")
          a(href="mailto:mail@yto60.dev")
            | mail@yto60.dev
    div.information-wrapper.wrapper(:class="$store.getters.getViewTypeClass")
      div.information
        h3
          | 自己紹介
        div
            | 問題解決や効率化が好きです。
            br
            | webプログラミング (主にクライアントサイド) と、デザインをやっています。
            nuxt-link(to="/works").nuxt-link
              ion-icon(name="arrow-forward")
              | 作ったもの
        h3
          | 所属
        div
          | 東京工業大学 情報理工学院 B3
          br
          | (2021年3月卒業予定)
        h3
          | サークル活動
        ul
          li
            | 東工大デジタル創作同好会traP
            a(href="https://trap.jp/")
              ion-icon(name="open")
          li
            | 東工大デザイン研究会
            a(href="https://twitter.com/titechdesignlab")
              ion-icon(name="open")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>
.wrapper.is-desktop {
  width: 50%;
  display: inline-flex;
}
.about,
.information {
  width: fit-content;
  margin: 0 auto 3rem auto;
}
.about {
  text-align: center;
  margin-top: 3rem;
  .contact {
    margin-top: 1rem;
    display: inline-flex;
    ion-icon {
      color: $base-darkgray;
      margin: auto 0.3rem auto 0;
      font-size: 1.3rem;
    }
    a {
      font-weight: normal;
    }
  }
  .link-buttons {
    margin-top: 2rem;
    a {
      width: 3rem;
      height: 3rem;
      font-size: 2rem;
      box-sizing: border-box;
      display: inline-flex;
      margin: 0.5rem;
      border: 4px solid $point-red;
      &:hover {
        border-color: $base-lightgray;
      }
      ion-icon {
        margin: auto;
      }
    }
  }
}
.information {
  h3 {
    color: $main-blue;
    margin-bottom: 0.5rem;
  }
  > div,
  > ul {
    padding-left: 1rem;
  }
}
</style>
