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
    setRequests(state, requests) {
      state.requests = requests;
    },
  },
  actions: {
    async sendContactCoach(context, request) {
      const newRequest = {
        userEmail: request.email,
        message: request.message,
      };

      const response = await fetch(
        `https://vue-http-5a0cc-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${request.coachId}.json`,
        {
          method: 'POST',
          body: JSON.stringify(newRequest),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const error = new Error(
          response.message || 'Failed to send contact coach'
        );
        throw error;
      }

      newRequest.id = data.name;
      newRequest.coachId = request.coachId;

      context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
      const coachId = context.rootGetters.userId;
      const token = context.rootGetters.token;
      const response = await fetch(
        `https://vue-http-5a0cc-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`
      );
      const data = await response.json();

      if (!response.ok) {
        const error = new Error(response.message || 'Failed to fetch requests');
        throw error;
      }

      const requests = [];
      for (const key in data) {
        const request = {
          id: key,
          coachId: coachId,
          userEmail: data[key].userEmail,
          message: data[key].message,
        };
        requests.push(request);
      }
      context.commit('setRequests', requests);
    },
  },
};
