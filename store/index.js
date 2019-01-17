import Vuex from "vuex";

const createStore = () =>
  new Vuex.Store({
    strict: true,

    state: {
      page: 0,
      color: "#ff0000"
    },

    getters: {
      page: state => state.page,
      color: state => state.color
    },

    actions: {
      async change({ state, commit }, { color }) {
        return commit("change", { color });
      }
    },

    mutations: {
      change(state, { color }) {
        state.color = color;
        state.page = state.page + 1;
        console.log("store.mutations", color, state.page);
      }
    }
  });

export default createStore;
