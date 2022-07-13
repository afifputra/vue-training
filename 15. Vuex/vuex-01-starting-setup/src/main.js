import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  getters: {
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
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      userIsAuthenticate: false,
    };
  },
  mutations: {
    setUserAuthenticate(state) {
      state.userIsAuthenticate = true;
    },
    detachUserAuthenticate(state) {
      state.userIsAuthenticate = false;
    },
  },
  actions: {
    setUserAuthenticate(context) {
      setTimeout(() => {
        context.commit('setUserAuthenticate');
        alert('Welcome!');
      }, 1000);
    },
    detachUserAuthenticate(context) {
      setTimeout(() => {
        context.commit('detachUserAuthenticate');
      }, 1000);
    },
  },
  getters: {
    userAuthenticate(state) {
      return state.userIsAuthenticate;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
