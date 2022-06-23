<template>
  <h2>Manage Goals</h2>
  <input type="text" name="tes" id="tes" ref="goal" />
  <button @click="setGoal">Submit</button>
  <teleport to="body">
    <error-alert v-if="isError">
      <h2>Input is empty</h2>
      <p>Please enter a goal</p>
      <button @click="closeError">Okay!</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      isError: false,
    };
  },
  methods: {
    setGoal() {
      const enteredGoal = this.$refs.goal.value;
      if (enteredGoal === "") {
        this.isError = true;
        return;
      }
    },
    closeError() {
      this.isError = false;
    },
  },
};
</script>