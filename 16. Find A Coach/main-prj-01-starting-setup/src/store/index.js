import { createStore } from 'vuex';

import coachesModules from './modules/coaches';

const store = createStore({
  modules: {
    coaches: coachesModules,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId: (state) => state.userId,
  },
});

export default store;
