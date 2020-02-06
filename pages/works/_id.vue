<template lang="pug">
  div.works-id(:class="$store.getters.getViewTypeClass")
    div.works-list-wrapper
      WorksList(:selectedIndex="id" v-if="$store.state.viewType === 'desktop'")
    div.work-details-wrapper
      div.work-details
        img(v-if="work.logo" :src="`/img/${work.logo}`").logo
        h3
          | {{ work.name }}
        div.description(v-html="work.description")
        div.links(v-if="work.links")
          span(v-for="link in work.links").link
            | {{ link.summary }}
            a(:href="link.url" target="_blank")
              ion-icon(name="open")
        div.sub-images(v-if="work.images")
          div.image(v-for="image in work.images")
            video(v-if="image.type === 'video'" :src="`/img/${image.url}`" controls)
            img(v-else :src="`/img/${image.url}`")
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
.works-id {
  width: 100%;
  display: flex;
}
.works-list-wrapper {
  height: 100%;
  width: min-content;
  float: left;
}
.work-details-wrapper {
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  height: calc(100% - 2rem); // padding-top
  .work-details {
    img.logo {
      width: 50%;
    }
    .description {
      text-align: left;
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
        margin: 1.3rem auto;
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
}
.is-desktop {
  .works-list-wrapper {
    padding-right: 0.2rem;
    border-right: 3px solid $main-blue;
  }
  .work-details-wrapper {
    overflow-y: auto;
    padding-left: 1.5rem; // 右側にpage-wrapperがあるので左右対象になるよ うに
    .work-details {
      width: 62%;
      max-width: calc(100% - 276px - 3rem);
      margin: auto;
    }
  }
}
</style>
