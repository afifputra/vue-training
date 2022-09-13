<template>
  <section class="container">
    <h3>{{ userName }}</h3>
    <h3>{{ user.age }}</h3>
    <!-- <button @click="setNewData">Change Age</button> -->
    <div>
      <input type="text" v-model="firstName" />
      <input type="text" ref="lastNameInput" />
      <button @click="setLastName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
  setup() {
    const user = reactive({
      name: 'Ling',
      age: 30,
    });

    const firstName = ref('');
    const lastName = ref('');

    // templating ref
    const lastNameInput = ref(null);

    const setNewData = () => {
      user.age += 1;
    };

    // templating ref
    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    };

    const userName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    return {
      user,
      userName,
      firstName,
      lastName,
      lastNameInput,
      setNewData,
      setLastName,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>