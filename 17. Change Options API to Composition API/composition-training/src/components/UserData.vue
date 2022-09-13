<template>
  <div>
    <h3>{{ userName }}</h3>
    <h3>{{ age }}</h3>
    <button @click="setAge">Set Age</button>
  </div>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  props: ['firstName', 'lastName'],
  emits: ['addAge'],
  setup(props, context) {
    const userName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    const age = inject('userAge');
    // console.log(context);
    const setAge = () => {
      context.emit('addAge');
    };

    return {
      userName,
      age,
      setAge,
    };
  },
};
</script>