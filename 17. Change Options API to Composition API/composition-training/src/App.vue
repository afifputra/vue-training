<template>
  <section class="container">
    <user-data
      v-if="!hide"
      :first-name="firstName"
      :last-name="lastName"
      @add-age="setAge"
    />
    <br />
    <div>
      <input type="text" v-model="firstName" />
      <input type="text" ref="lastNameInput" />
      <button @click="setLastName">Set Name</button>
    </div>
    <div>
      <button @click="onChangeHide">Hide</button>
    </div>
  </section>
</template>

<script>
import { reactive, computed, ref, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    const user = reactive({
      name: 'Ling',
      age: 30,
    });

    const firstName = ref('');
    const lastName = ref('');
    const hide = ref(false);

    // templating ref
    const lastNameInput = ref(null);

    const setAge = () => {
      user.age += 1;
    };

    // templating ref
    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    };

    const userName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    const age = computed(() => {
      return user.age;
    });

    const onChangeHide = () => {
      return (hide.value = !hide.value);
    };

    provide('userAge', age);

    return {
      user,
      hide,
      userName,
      firstName,
      lastName,
      lastNameInput,
      setAge,
      setLastName,
      onChangeHide,
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