<template>
  <div class="show-details-container">
    <a class="back-to-results row" @click="$router.push({ name: 'Home' }).catch((err) => { })">
      &#x2190; Back to search results
    </a>
    <div class="column column-1">
      <h1 class="show-details-name">
        {{ selectedShow.name }}
      </h1>

      <div v-if="selectedShow.rating && selectedShow.rating.average !== null" class="show-details-rating">
        <b>Score:</b>
        <p>{{ "&nbsp;" + selectedShow.rating.average }}</p>
      </div>

      <div v-else class="show-details-rating">
        <b>Score: </b>
        <p>&nbsp;N/A</p>
      </div>

      <div class="show-details-genre">
        <b class="pre"> Genres: </b>

        <div class="genre-container">
          <div v-if="selectedShow.genres && selectedShow.genres.length" class="genre-found">
            <p v-for="(genre, index) in selectedShow.genres" :key="index" class="genre">
              {{ genre + "&nbsp;" }}
            </p>
          </div>

          <div v-else class="no-genre">
            <b>N/A</b>
          </div>
        </div>
      </div>

      <div v-if="selectedShow.summary" class="show-details-summary" v-html="selectedShow.summary"></div>

      <div v-else class="show-details-summary">
        No description could be found at the moment.
      </div>
    </div>

    <div v-if="selectedShow.image" class="column column-2">
      <img :src="selectedShow.image.original" class="show-details-image" alt="the show cover" />
    </div>

    <div v-if="cast.length" class="column row-2">
      <h1>Cast</h1>

      <div class="cast-wrapper">
        <div v-for="(char, index) in cast" :key="index" class="cast-member">
          <div v-if="char.person.image">
            <img :src="char.person.image.original" alt="cast member picture" />
          </div>

          <div v-else-if="!char.person.image && char.character.image">
            <img :src="char.character.image.original" alt="cast member picture" />
          </div>

          <div v-else class="no-image-found">
            <img src="../assets/images/no-image-icon-23494.png" alt="cast member picture" />
          </div>

          <div class="cast-member-text">
            <h3>{{ char.person.name }}</h3>
            <h4>{{ " as " + char.character.name }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="column row-2 no-cast">
      <h1>Cast</h1>
      <p>No cast information could be found at the moment.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { ShowInterface } from "../components/Card/Interfaces";

export interface Item {
  score: number;
  show: ShowInterface;
}

export default defineComponent({
  name: "ShowDetails",
  components: {},
  data() {
    return {
      selectedShowId: this.$route.params.showId,
      selectedShow: {} as ShowInterface,
      cast: [] as Array<any>,
    };
  },
  methods: {
    filterObject(arr: Array<Item>, filterBy: string) {
      const arrayObject = [];

      for (let index = 0; index < arr.length; index++) {
        const object = arr[index].show;
        arrayObject.push(object);
      }

      const selectedShow = arrayObject.find(({ id }) => id === filterBy);
      return selectedShow;
    },
    async getCast() {
      await this.$store.dispatch("getCast", this.selectedShowId + "/cast");
      this.cast = this.$store.state.cast;
    },
  },
  computed: {
    getResults(): Array<Item> {
      return this.$store.state.shows;
    },
  },
  watch: {
    getResults(oldCount, newCount) {
      oldCount = newCount;
    },
  },
  mounted() {
    if (this.getResults.length) {
      const filteredShow = new Object(
        this.filterObject(this.getResults, this.selectedShowId)
      );
      this.selectedShow = filteredShow as ShowInterface;
    }
    this.getCast();
  },
});
</script>

<style lang="scss">
@import "../assets/scss/base";

.show-details-container {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  color: white;
  padding: 5px 5px;

  .back-to-results {
    grid-column: 1 / span 2;
    grid-row: 1;
    background: #161616;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    width: 95%;
    place-self: center;
    cursor: pointer;
  }

  .column-1 {
    grid-column: 1;
    grid-row: 2;

    .show-details-rating {
      display: flex;

      p {
        margin: 0;
      }
    }

    .show-details-genre {
      display: flex;
      width: 100%;
      min-width: 190px;
      flex-direction: row;
      align-items: center;
      font-size: 12px;
      align-items: flex-start;

      .genre-container {
        .genre-found {
          display: flex;
          flex-wrap: wrap;

          .genre,
          .no-genre {
            padding: 0px 3px;
            margin: 0;
            color: #bebebe;
          }

          p::after {
            content: " |";
          }

          p:last-child:after {
            content: "";
          }
        }
      }
    }

    .show-details-summary {
      font-size: 14px;
      color: #bebebe;
      margin: 10px 0;
    }
  }

  .column-2 {
    grid-column: 2;
    grid-row: 2;
    justify-self: center;

    .show-details-image {
      margin-top: 10px;
      width: 140px;
    }
  }

  .row-2 {
    grid-column: span 2;
    grid-row: 3;

    h1 {
      padding: 10px 0;
    }

    .cast-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .cast-member {
        display: flex;
        align-items: center;
        padding: 5px;

        img {
          max-width: 70px;
          min-width: 60px;
        }

        .cast-member-text {
          padding: 10px;
          font-size: 12px;
          display: flex;
          flex-direction: column;

          h4 {
            white-space: normal;
            color: #bebebe;
          }
        }
      }
    }
  }

  .no-cast {
    p {
      margin: 0;
    }
  }
}

@media only screen and (min-width: $small) {
  .show-details-container {
    max-width: 1200px;
    margin: 20px auto;

    .back-to-results {
      grid-column: 1 / span 2;
      grid-row: 1;
      width: 100%;
      padding: 10px;
    }

    .column-1 {
      grid-column: 2;
      grid-row: 2;

      .show-details-summary {
        font-size: 14px;
        color: #bebebe;
        margin: 10px 0;
      }
    }

    .column-2 {
      grid-column: 1;
      grid-row: span 3;
      margin-right: 20px;

      img {
        width: 300px !important;
        margin: 0 !important;
      }
    }

    .row-2 {
      grid-column: 2;
      grid-row: 3;
    }
  }
}
</style>
