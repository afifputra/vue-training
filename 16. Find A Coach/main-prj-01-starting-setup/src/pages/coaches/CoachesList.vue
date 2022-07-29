<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register A Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in coaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No Coaches Found</h3>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.coaches);
  },
  computed: {
    coaches() {
      return this.$store.getters['coaches/all'];
    },
    filteredCoaches() {
      return this.$store.getters['coaches/all'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>