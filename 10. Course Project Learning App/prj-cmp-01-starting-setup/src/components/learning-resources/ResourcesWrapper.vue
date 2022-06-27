<template>
  <ul>
    <resources-list
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></resources-list>
  </ul>
</template>

<script>
import ResourcesList from './ResourcesList.vue';

export default {
  components: {
    ResourcesList,
  },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>