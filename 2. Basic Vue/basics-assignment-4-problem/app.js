const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      hiddenParagraph: false,
      inputBackgroundColor: "",
    };
  },
  computed: {
    message() {
      const result = this.userInput === "user1" || this.userInput === "user2" ? "Applied!" : "Style me!";
      return result;
    },
    changeClassCss() {
      if (this.hiddenParagraph) {
        return `hidden ${this.userInput}`;
      } else {
        return `visible ${this.userInput}`;
      }
    },
    changeBackgroundColor() {
      return { backgroundColor: this.inputBackgroundColor };
    },
  },
  methods: {
    getDataInput(event) {
      this.userInput = event.target.value;
    },
    changeHiddenParagraph() {
      this.hiddenParagraph = !this.hiddenParagraph;
    },
    changeStatusBgColor(event) {
      this.inputBackgroundColor = event.target.value;
    },
  },
});

app.mount("#assignment");
