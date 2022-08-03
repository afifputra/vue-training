export default {
  namespaced: true,
  state() {
    return {
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
  },
  actions: {
    addCoach(context, coach) {
      const { firstName, lastName, areas, description, rate } = coach;
      const coachData = {
        id: context.rootGetters.userId,
        firstName,
        lastName,
        areas,
        description,
        hourlyRate: rate,
      };
      context.commit('addCoach', coachData);
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
  },
};
