<template>
  <section>
    <coach-filter @filter-changed="setSelectedFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" :link="false" @click="loadCoaches"
          >Refresh</base-button
        >
        <base-button v-if="!isCoach" link to="/register"
          >Register A Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      selectedFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/all'];
      const filteredData = coaches.filter((coach) => {
        const { frontend, backend, career } = this.selectedFilters;
        return (
          (frontend && coach.areas.includes('frontend')) ||
          (backend && coach.areas.includes('backend')) ||
          (career && coach.areas.includes('career'))
        );
      });
      return filteredData;
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    setSelectedFilters(filters) {
      this.selectedFilters = filters;
    },
    loadCoaches() {
      this.$store.dispatch('coaches/fetchCoaches');
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>