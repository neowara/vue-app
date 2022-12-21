<template>
  <div class="home-container">
    <div v-if="showsData" class="home-content">
      <div v-for="item, index in showsData" :key="index" class="card-wrapper">
        <Card :show="item.show" :score="item.show.rating" @cardClick="goToShowDetails(item.show.id)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Card from "../components/Card/CardComponent.vue";
import { ShowInterface } from "../components/Card/Interfaces";

export interface Item {
  score: number,
  show: ShowInterface,
}

export default defineComponent({
  name: 'HomePage',
  components: {
    Card
  },
  data() {
    return {
    }
  },
  methods: {
    goToShowDetails(id: string) {
      this.$router.push({ name: 'ShowDetails', params: { showId: id } });
    }
  },
  computed: {
    showsData() {
      return this.$store.getters.getShows;
    },
  },
})
</script>

<style lang="scss">
@import "../assets/scss/base";

.home-container {
  .home-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media only screen and (max-width: $tiny) {
  .home-container {
    .home-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
}

@media only screen and (min-width: $mobile) {
  .home-container {
    .home-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
}

@media only screen and (min-width: $large) {
  .home-container {
    padding: 50px 100px;

    .home-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
}
</style>
