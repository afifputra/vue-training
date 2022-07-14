export default {
  testAuth(state, getters, rootState, rootGetters) {
    console.log(rootState.userIsAuthenticate);
    console.log(rootGetters);
  },
  finalCounter(state) {
    return state.counter * 3;
  },
  normalizedCounter(state, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) return 0;
    if (finalCounter > 100) return 100;
    return finalCounter;
  },
};
