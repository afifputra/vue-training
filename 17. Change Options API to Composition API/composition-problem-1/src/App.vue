<template>
  <section class="container">
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3 v-show="goals.isGoalVisible">{{ goals.goal }}</h3>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="setGoalIsVisible">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
  </section>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    /**
     * * Using Seperate Refs
     *  TODO Create three seperate state for course goal and toggle goal
     */

    // const goals = ref('Learning VueJS');
    // const isGoalVisible = ref(true);

    /**
     * * Using Ref Object
     *  TODO Create object ref for course goal and toggle goal
     */

    // const goals = ref({
    //   goal: 'Learning VueJS',
    //   isGoalVisible: true,
    // });

    /**
     * * Using Reactive Object
     *  TODO Create object reactive for course goal and toggle goal
     */

    const goals = reactive({
      goal: 'Learning VueJS',
      isGoalVisible: true,
    });

    const setGoalIsVisible = () => {
      // Seperate Refs
      // isGoalVisible.value = !isGoalVisible.value;

      // Ref Object
      // goals.value.isGoalVisible = !goals.value.isGoalVisible;

      // Reactive Object
      goals.isGoalVisible = !goals.isGoalVisible;
    };

    return {
      goals,
      setGoalIsVisible,
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