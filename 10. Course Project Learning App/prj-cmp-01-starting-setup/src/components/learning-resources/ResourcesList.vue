<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button type="button" classes="flat" @click="deleteResource(id)">
          Delete
        </base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
import BaseButton from '../base/BaseButton.vue';
export default {
  components: { BaseButton },
  props: ['id', 'title', 'description', 'link'],
  inject: ['onDeleteResource'],
  methods: {
    deleteResource(resourceId) {
      // console.log(resourceId);
      this.onDeleteResource(resourceId);
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>