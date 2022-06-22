<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-props="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Learn Vue", "Learn Vuex", "Learn Vue Router"],
    };
  },
};
</script>