const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmationName: "",
    };
  },
  methods: {
    increment(number) {
      this.counter += number;
    },
    decrement(number) {
      this.counter -= number;
    },
    setName(event, lastName) {
      lastName = "Putra";
      this.name = `${event.target.value} ${lastName}`;
    },
    confirmName() {
      this.confirmationName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
