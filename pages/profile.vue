<template>
  <div id="profile">
    <div class="about-wrapper wrapper" :class="viewTypeClass">
      <div class="about">
        <h2>yto</h2>
        <h4>(60° / 60deg)</h4>
        <div class="link-buttons">
          <a
            v-for="link in personalLinks"
            :key="link.name"
            :class="link.name"
            :href="link.url"
            target="_blank"
          >
            <ion-icon :name="link.iconName"></ion-icon>
            <span class="label">
              {{ link.label }}
            </span>
          </a>
        </div>
        <div class="contact">
          <ion-icon name="mail"></ion-icon>
          <a href="mailto:mail@yto60.dev"> mail@yto60.dev </a>
        </div>
      </div>
    </div>
    <div class="information-wrapper wrapper" :class="viewTypeClass">
      <div class="information">
        <h3>自己紹介</h3>
        <div>
          問題解決や効率化が好きです。
          <br />
          webプログラミング (主にクライアントサイド)
          と、デザインをやっています。
        </div>
        <h3>所属</h3>
        <div>
          東京工業大学 情報理工学院 B3
          <br />
          (2021年3月卒業予定)
        </div>
        <h3>サークル活動</h3>
        <ul>
          <li>
            東工大デジタル創作同好会traP
            <a href="https://trap.jp/" target="_blank">
              <ion-icon name="open"></ion-icon>
            </a>
          </li>
          <li>
            東工大デザイン研究会
            <a href="https://twitter.com/titechdesignlab" target="_blank">
              <ion-icon name="open"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useViewStore } from '~/stores/useViewStore'

interface PersonalLink {
  name: string
  label: string
  iconName: string
  url: string
}

const viewStore = useViewStore()

const viewTypeClass = computed(() => viewStore.viewTypeClass)

const personalLinks: PersonalLink[] = [
  {
    name: 'twitter',
    label: 'twitter',
    iconName: 'logo-twitter',
    url: 'https://twitter.com/piover3_rad'
  },
  {
    name: 'github',
    label: 'GitHub',
    iconName: 'logo-github',
    url: 'https://github.com/yto60'
  },
  {
    name: 'trap-blog',
    label: 'blog',
    iconName: 'list-box',
    url: 'https://trap.jp/author/60/'
  }
]
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
      font-size: 2rem;
      display: inline-flex;
      flex-direction: column;
      margin: 0.5rem;
      border-color: $point-red;
      &:hover {
        border-color: $base-lightgray;
      }
      ion-icon {
        border: 4px solid;
        border-color: inherit;
        padding: 0.3rem;
        margin: auto;
      }
      .label {
        font-size: 0.8rem;
        margin-top: 0.3rem;
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
