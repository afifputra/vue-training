const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      isVisible: true,
    };
  },
  computed: {
    // showHideList() {
    //   return {
    //     visible: !this.hideList,
    //     hidden: this.hideList,
    //   };
    // },
    nameOfButton() {
      return this.isVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleList() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
