export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters: {
    requests: (state) => state.requests,
    hasRequests: (state) => state.requests.length > 0,
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
