<template lang="pug">
  div.work-details
    img(v-if="work.logo" v-lazy="`/img/${work.logo}`").logo
    h3
      | {{ work.name }}
    div.description(v-html="work.description")
    ul.labels(v-if="work.labels")
      li(v-for="label in work.labels")
        b
          | {{ label.name }}
        | : {{ label.value }}
    div.links(v-if="work.links")
      span(v-for="link in work.links").link
        a(:href="link.url" target="_blank")
          | {{ link.summary }}
          ion-icon(name="open")
    div.sub-images(v-if="work.images")
      div.image(v-for="image in work.images")
        video(v-if="image.type === 'video'" :src="`/img/${image.url}`" controls)
        img(
          v-else v-lazy="`/img/${image.url}`"
          :style="`width: ${image.width ? image.width : ''}; height: ${image.height ? image.height : ''};`"
          )
        div(v-if="image.description" v-html="image.description").image-description

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { works } from '@/utils/data'
import WorksList from '@/components/WorksList.vue'

@Component({
  components: {
    WorksList
  },
  validate({ params }) {
    return /^\d+$/.test(params.id) && Number(params.id) < works.length
  }
})
export default class WorksId extends Vue {
  get id(): number {
    return Number(this.$route.params.id)
  }

  get work() {
    return works[this.id]
  }
}
</script>

<style lang="scss" scoped>
.work-details {
  img.logo {
    width: 50%;
  }
  .description,
  .labels {
    text-align: left;
  }
  .labels {
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
