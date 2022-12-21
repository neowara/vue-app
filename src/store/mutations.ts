import { MutationTree } from 'vuex';

import { state } from "./state"

const mutations: MutationTree<state> = {

  setShows(state: state, data: Array<object>) {
    state.shows = data;
  },

  setCast(state: state, data: Array<object>) {
    state.cast = data;
  },

  emptyData(state: state) {
    state.shows = new Array(0);
    state.cast = new Array(0);
  }
}

export default mutations;