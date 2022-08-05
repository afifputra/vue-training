export default {
  namespaced: true,
  state() {
    return {
      lastFecth: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: {
    addCoach(state, coach) {
      state.coaches.push(coach);
    },
    setCoaches(state, coaches) {
      state.coaches = coaches;
    },
    setLastFetchTimestamps(state) {
      state.lastFecth = new Date().getTime();
    },
  },
  actions: {
    async addCoach(context, coach) {
      const { firstName, lastName, areas, description, rate } = coach;
      const userId = context.rootGetters.userId;
      const coachData = {
        firstName,
        lastName,
        areas,
        description,
        hourlyRate: rate,
      };

      const response = await fetch(
        `https://vue-http-5a0cc-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,
        {
          method: 'PUT', // or 'PUT'
          body: JSON.stringify(coachData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // const data = await response.json();

      if (!response.ok) {
        // error
      }

      context.commit('addCoach', {
        ...coachData,
        id: userId,
      });
    },

    async fetchCoaches(context, refreshFromButton) {
      const shouldUpdate = context.getters.shouldFetchCoaches;
      if (!shouldUpdate && !refreshFromButton) {
        return;
      }

      const response = await fetch(
        `https://vue-http-5a0cc-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
      );
      const data = await response.json();

      if (!response.ok) {
        const error = new Error(response.message || 'Failed to fetch coaches');
        throw error;
      }

      const coaches = [];
      for (const key in data) {
        const coach = {
          id: key,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          areas: data[key].areas,
          description: data[key].description,
          hourlyRate: data[key].hourlyRate,
        };
        coaches.push(coach);
      }

      context.commit('setCoaches', coaches);
      context.commit('setLastFetchTimestamps');
    },
  },
  getters: {
    all: (state) => state.coaches,
    hasCoaches: (state) => state.coaches.length > 0,
    isCoach: (state, rootState, getters, rootGetters) => {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;
      return coaches.coaches.some((coach) => coach.id === userId);
    },
    shouldFetchCoaches: (state) => {
      const lastFetch = state.lastFecth;
      const now = new Date().getTime();
      return (now - lastFetch) / 1000 > 60;
    },
  },
};
