const app = Vue.createApp({
  data() {
    return {
      message: "",
      secondMessage: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello World!");
    },
    setMessage(event) {
      this.message = event.target.value;
    },
    setSecondMessage(event) {
      this.secondMessage = event.target.value;
    },
  },
});

app.mount("#assignment");
