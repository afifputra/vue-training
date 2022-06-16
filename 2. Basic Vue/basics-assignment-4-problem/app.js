const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      hiddenParagraph: false,
      finalUserInput: "",
      inputBackgroundColor: "",
    };
  },
  computed: {
    message() {
      console.log("computed message");
      const result = this.finalUserInput === "user1" || this.finalUserInput === "user2" ? "Applied!" : "Style me!";
      return result;
    },
    changeClassCss() {
      console.log("changeClassCss");
      if (this.hiddenParagraph) {
        return `hidden ${this.finalUserInput}`;
      } else {
        return `visible ${this.finalUserInput}`;
      }
    },
    changeBackgroundColor() {
      console.log("changeBackgroundColor");
      return { backgroundColor: this.inputBackgroundColor };
    },
  },
  methods: {
    getDataInput(event) {
      this.userInput = event.target.value;
    },
    setFinalUserInput() {
      this.finalUserInput = this.userInput;
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
