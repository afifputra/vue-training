<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favourite-value></favourite-value>
    <button @click="addOne({ value: 10 })">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import { mapActions } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
  },
  methods: {
    // addOne() {
    //   // this.$store.commit('increase', {
    //   //   value: 10,
    //   // });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    ...mapActions({
      addOne: 'increase',
    }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>