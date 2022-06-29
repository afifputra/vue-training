<template>
  <base-card>
    <base-button
      @click="setSelectedTab('resources-wrapper')"
      :classes="setListActive"
      >List Resources</base-button
    >
    <base-button
      @click="setSelectedTab('resources-add')"
      :classes="setAddActive"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import ResourcesWrapper from './ResourcesWrapper.vue';
import ResourcesAdd from './ResourcesAdd.vue';

export default {
  components: {
    ResourcesWrapper,
    ResourcesAdd,
  },
  data() {
    return {
      selectedTab: 'resources-wrapper',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'A guide to the official Vue.js documentation',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'You need to know google',
          link: 'https://google.com/',
        },
      ],
    };
  },
  provide() {
    return {
      selectedTab: this.selectedTab,
      resources: this.storedResources,
      onAddResource: this.setNewResource,
      onDeleteResource: this.deleteResource,
    };
  },
  computed: {
    setListActive() {
      return this.selectedTab === 'resources-wrapper' ? '' : 'flat';
    },
    setAddActive() {
      return this.selectedTab === 'resources-add' ? '' : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    setNewResource(resource) {
      this.storedResources.unshift(resource);
      this.selectedTab = 'resources-wrapper';
    },
    deleteResource(resourceId) {
      const resIndex = this.storedResources.findIndex(
        (resource) => resource.id === resourceId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>

<style>
</style>