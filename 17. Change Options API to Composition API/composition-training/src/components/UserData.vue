<template>
  <div>
    <h3>{{ userName }}</h3>
    <h3>{{ age }}</h3>
    <button @click="setAge">Set Age</button>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  emits: ['addAge'],
  setup(props, context) {
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('onMounted');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });

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