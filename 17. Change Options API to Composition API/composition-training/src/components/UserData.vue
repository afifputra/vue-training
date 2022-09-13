<template>
  <div>
    <h3>{{ userName }}</h3>
    <h3>{{ age }}</h3>
    <button @click="setAge">Set Age</button>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['firstName', 'lastName', 'age'],
  emits: ['addAge'],
  setup(props, context) {
    const userName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    console.log(context);

    const setAge = () => {
      context.emit('addAge');
    };

    return {
      userName,
      setAge,
    };
  },
};
</script>