const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Learn Vue!",
      courseGoalB: "Finish the course!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputCourseGoal() {
      const randomNumber = Math.random();
      const result = randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
      return result;
    },
  },
});

app.mount("#user-goal");
