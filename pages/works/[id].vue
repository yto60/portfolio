<template>
  <div class="work-details">
    <img v-if="work.logo" :src="`/img/${work.logo}`" class="logo" />
    <h3>
      {{ work.name }}
    </h3>
    <div class="description" v-html="work.description"></div>
    <ul class="labels" v-if="work.labels">
      <li v-for="label in work.labels">
        <b>
          {{ label.name }}
        </b>
        : {{ label.value }}
      </li>
    </ul>
    <div class="links" v-if="work.links">
      <div v-for="link in work.links" class="link">
        <a :href="link.url" target="_blank">
          {{ link.summary }}
          <ion-icon name="open"></ion-icon>
        </a>
      </div>
    </div>
    <div class="sub-images" v-if="work.images">
      <div class="image" v-for="image in work.images">
        <video
          v-if="image.type === 'video'"
          :src="`/img/${image.url}`"
          controls
        ></video>
        <img
          v-else
          :src="`/img/${image.url}`"
          :style="`width: ${image.width ? image.width : ''}; height: ${
            image.height ? image.height : ''
          };`"
        />
        <div
          v-if="image.description"
          v-html="image.description"
          class="image-description"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import works from '@/assets/data.json'

const route = useRoute()

const id = computed(() => {
  return Number(route.params.id)
})

const work = computed(() => {
  return works[id.value]
})

definePageMeta({
  validate: async (route) => {
    return (
      /^\d+$/.test(route.params.id as string) &&
      Number(route.params.id) < works.length
    )
  }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.work-details {
  img.logo {
    width: 50%;
    max-height: 8rem;
  }
  .description,
  .labels {
    text-align: left;
  }
  .labels {
    margin: 1rem 0;
    font-size: 0.9rem;
  }
  .links {
    margin-top: 1rem;
    text-align: right;
    .link {
      color: $base-darkgray;
    }
  }
  .sub-images {
    margin-top: 1.5rem;
    .image {
      margin: 1.8rem auto;
      width: 90%;
      max-width: 430px;
      img,
      video {
        width: 100%;
      }
      .image-description {
        font-size: 0.8rem;
        color: $base-darkgray;
        margin-top: 0.3rem;
      }
    }
  }
}
</style>
