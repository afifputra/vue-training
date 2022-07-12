<template>
  <button @click="setUserAuthenticate">login</button>
  <button @click="detachUserAuthenticate">logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['setUserAuthenticate', 'detachUserAuthenticate']),
  },
};
</script>