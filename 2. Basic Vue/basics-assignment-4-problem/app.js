const app = Vue.createApp({
  data() {
    return {
      classInput: "",
      stylesInput: "",
      hideElement: false,
    };
  },
  computed: {
    finalClasses() {
      return {
        user1: this.classInput === "user1" ? "user1" : "",
        user2: this.classInput === "user2" ? "user2" : "",
        hidden: this.hideElement ? "hidden" : "",
        visible: !this.hideElement ? "visible" : "",
      };
    },
    finalStyles() {
      return {
        backgroundColor: this.stylesInput,
      };
    },
  },
  methods: {
    onHidden() {
      this.hideElement = !this.hideElement;
    },
  },
});

app.mount("#assignment");
