export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters: {
    requests: (state, getters, rootState, rootGetters) => {
      const coachId = rootGetters.userId;
      return state.requests.filter((request) => request.coachId === coachId);
    },
    hasRequests: (state, getters) => getters.requests.length > 0,
  },
  mutations: {
    addRequest(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    sendContactCoach(context, request) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId: request.coachId,
        userEmail: request.email,
        message: request.message,
      };
      context.commit('addRequest', newRequest);
    },
  },
};
