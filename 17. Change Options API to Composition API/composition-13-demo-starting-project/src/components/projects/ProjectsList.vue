<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { ref, computed, watch, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableProjects = computed(() => {
      if (activeSearchTerm.value.length === 0) {
        return props.user.projects;
      } else {
        return props.user.projects.filter((prj) =>
          prj.title.toLowerCase().includes(activeSearchTerm.value.toLowerCase())
        );
      }
    });

    const hasProjects = computed(() => {
      return props.user.projects && availableProjects.value.length > 0;
    });

    const updateSearch = (searchTerm) => {
      enteredSearchTerm.value = searchTerm;
    };

    watch(enteredSearchTerm, (newValue) => {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 500);
    });

    const { user } = toRefs(props);

    watch(user, () => {
      enteredSearchTerm.value = '';
      activeSearchTerm.value = '';
    });

    return {
      enteredSearchTerm,
      activeSearchTerm,
      availableProjects,
      hasProjects,
      updateSearch,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>