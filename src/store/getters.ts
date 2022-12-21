import { state } from "./state";

export default {
  getShows: (state: state) => {
    return state.shows;
  },

  getCast: (state: state) => {
    return state.cast;
  }
}