<template>
  <h3>{{ counter }}</h3>
  <p>We do more in here...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
