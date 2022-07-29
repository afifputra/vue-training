import { createStore } from 'vuex';

import coachesModules from './modules/coaches';

const store = createStore({
  modules: {
    coaches: coachesModules,
  },
  state() {
    return {};
  },
});

export default store;
