<template>
  <h3>{{ counter }}</h3>
  <p>We do more in here...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters({
      counter: 'normalizedCounter',
    }),
  },
};
</script>
