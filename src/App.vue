<template>
  <div class="app">
    <div class="search-container" :class="{ 'slide-top': showsData && showsData.length }">
      <router-link to="/">
        <img src="./assets/images/tvm-header-logo.png" alt="">
      </router-link>
      <Search v-if="showsData" />
    </div>

    <transition name="scale">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Search from "./components/Search/Search.vue";

export default defineComponent({
  name: "App",
  components: {
    Search,
  },
  data() {
    return {
      shows: [] as Array<object>,
      cast: [] as Array<object>
    }
  },
  methods: {
    onRefresh() {
      if (this.$route.name !== 'Home') {
        this.$router.push({ name: 'Home' }).catch((err) => { console.log(err) });
      }
    }
  },
  computed: {
    showsData(): Array<object> {
      return this.$store.getters.getShows;
    },
    castData(): Array<object> {
      return this.$store.getters.getCast;
    },
  },
  mounted() {
    this.onRefresh();
  },
  updated() {
    this.shows = this.showsData;
    this.cast = this.castData;
  }
})
</script>

<style lang="scss">
@import "assets/scss/_base.scss";

.app {
  .search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 40vh;
    position: relative;
    transition: all 0.1s ease;
    padding: 15px;

    a {
      padding-bottom: 100px;
    }
  }

  .slide-top {
    top: 0;
    position: sticky;
    background-color: $gray;
    box-shadow: -1px 1px 10px 0px #00000094;
    z-index: 100;

    a {
      padding: 20px 100px;
    }
  }
}

@media only screen and (min-width: $medium) {
  .app {
    .search-container {
      a {
        margin: auto 100px;
        padding-bottom: 100px;

        img {
          padding: 0;
          width: 300x;
        }
      }
    }

    .slide-top {
      display: flex;
      flex-direction: row;
      top: 0;
      position: sticky;
      background-color: $gray;
      box-shadow: -1px 1px 10px 0px #00000094;

      a {
        padding: 0;

        img {
          padding: 0;
        }
      }
    }
  }
}
</style>
