<template>
  <div class="card-container" @click="$emit('cardClick')">
    <div v-if="show.name" class="card">
      <div v-if="show.image" class="card-image">
        <img :src="show.image.original" alt="the movie cover">
      </div>

      <div v-else class="card-image">
        <img src="../../assets/images/no-image-icon-23494.png" alt="the movie cover">
      </div>

      <div class="card-title">
        {{ show.name }}
      </div>

      <div v-if="score.average" class="card-score">
        {{ (score.average) }}
      </div>

      <div v-else class="card-score">
        <b>N/A</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { ShowInterface } from './Interfaces'

export default defineComponent({
  name: 'CardComponent',
  components: {
  },
  props: {
    show: {
      type: Object as PropType<ShowInterface>,
      required: true,
      default() {
        return {}
      }
    },
    score: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  }
})
</script>

<style lang="scss" src="./Card.scss">

</style>