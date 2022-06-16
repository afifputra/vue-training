const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      hideList: false,
    };
  },
  computed: {
    showHideList() {
      return {
        visible: !this.hideList,
        hidden: this.hideList,
      };
    },
    nameOfButton() {
      return this.hideList ? "Show List" : "Hide List";
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
      this.hideList = !this.hideList;
    },
  },
});

app.mount("#assignment");
