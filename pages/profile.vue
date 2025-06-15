<template>
  <div id="profile">
    <div class="about-wrapper wrapper" :class="viewTypeClass">
      <div class="about">
        <img :src="profileImageUrl" alt="yto" class="avatar" />
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
          <a :href="`mailto:${email}`"> {{ email }} </a>
        </div>
      </div>
    </div>
    <div class="information-wrapper wrapper" :class="viewTypeClass">
      <div class="information">
        <h3>自己紹介</h3>
        <div>
          東京工業大学情報理工学院学部卒。フロントエンドを中心にweb開発をやっています。
        </div>
        <h3>所属</h3>
        <div>ピクシブ株式会社（2021.4 - 現在）</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { md5 } from 'js-md5'
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

const email = 'mail@yto60.dev'
const profileImageUrl = computed(() => {
  return `https://www.gravatar.com/avatar/${md5(email)}?s=200`
})
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
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid $base-lightgray;
  }
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
