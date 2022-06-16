const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmationName: "",
    };
  },
  computed: {
    fullName() {
      console.log("running again...");
      const result = this.name === "" ? "" : `${this.name} Putra`;
      return result;
    },
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
      this.name = `${event.target.value}`;
    },
    confirmName() {
      this.confirmationName = this.name;
    },
    outputFullName() {
      // return this.fullName;
    },
    submitForm() {
      alert("Submitted!");
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
