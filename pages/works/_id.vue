<template lang="pug">
  div.works-id(:class="$store.getters.getViewTypeClass")
    div.works-list-wrapper
      WorksList(:selectedIndex="id" v-if="$store.state.viewType === 'desktop'")
    div.work-details-wrapper
      div.work-details
        img(:src="`/img/${work.logo}`").logo
        h3
          | {{ work.name }}
        div.description(v-html="work.description")
        div.links
          span(v-for="link in work.links").link
            | {{ link.summary }}
            a(:href="link.url" target="_blank")
              ion-icon(name="open")
        div.sub-images
          div.image(v-for="image in work.images")
            img(:src="`/img/${image.url}`")
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
}
.works-list-wrapper {
  height: 100%;
  width: min-content;
  float: left;
}
.work-details-wrapper {
  float: right;
  width: 95%;
  text-align: center;
  margin-top: 2rem;
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
      margin-top: 1rem;
      .image {
        margin: 1rem auto;
        width: 90%;
        max-width: 430px;
        img {
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
    width: 62%;
    max-width: calc(100% - 276px - 3rem);
    .work-details {
      width: 90%;
      margin: auto;
    }
  }
}
</style>
