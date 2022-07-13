<template>
  <button @click="setUserAuthenticate" v-if="!userIsAuthenticated">
    login
  </button>
  <button @click="detachUserAuthenticate" v-else>logout</button>
  <p>{{ testAuth }}</p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['setUserAuthenticate', 'detachUserAuthenticate']),
  },
  computed: {
    userIsAuthenticated() {
      return this.$store.getters.userAuthenticate;
    },
    testAuth() {
      return this.$store.getters['numbers/testAuth'];
    },
  },
};
</script>