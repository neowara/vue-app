<template>
  <div class="search-content">
    <div class="search">
      <label class="visually-hidden" for="search-bar">Sök</label>
      <input v-model="query" type="text" name="search-bar" placeholder="ex: Mission Impossible"
        @keydown.enter="searchData()" />
    </div>
    <button @click="searchData()">
      Search
    </button>
  </div>
</template>

<script lang="ts">
import { store } from "@//store";
import { Component, Vue } from "vue-property-decorator";


@Component
export default class Search extends Vue {

  sorting: Array<Object> = [
    { label: "Äldst stigande", value: "asc" },
    { label: "Senaste inkomna", value: "desc" },
  ];

  value = "";
  selectedTag = "";
  query = '';
  results: Array<Object> = [];

  public get resultsData(): number {
    return store.state.shows.length;
  }

  /**
   * Uses the v-model query to perform a PUT request using @param
   * this will dispatch an action in the vue store
   * which searches for assets on the "header" OR "description" field of the assets
   * @param param defines the data that will be sent in the Body
   */
  public async searchData() {
    this.selectedTag = "";
    this.$store.dispatch("emptyData", null);
    if (this.$route.name !== 'Home') {
      this.$router.push({ name: 'Home' }).catch((err) => { console.log(err) });
    }
    await this.$store.dispatch("getShows", this.query);
    this.results = this.$store.state.data;
  }
}
</script>

<style scoped lang="scss" src="./Search.scss">

</style>
