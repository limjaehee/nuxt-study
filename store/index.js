export default {
  state: {
    count: 1, //11
  },
  getters: {
    getIncreaseCount: (state) => {
      return state.count + 2; //3
    },
    formattedCount: (state, getters) => {
      return getters.getIncreaseCount + 100; //103
    },
  },
  mutations: {
    addCounter(state, payload) {
      return (state.count += payload);
    },
  },
  actions: {
    getCounter(context) {
      setTimeout(() => {
        context.commit("addCounter", 20);
      }, 1000);
    },
  },
};
