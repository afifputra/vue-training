const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmationName: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      console.log("Counter changed", value);
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
    // name(newValue) {
    //   if (newValue === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = `${newValue} ${this.lastName}`;
    //   }
    // },
    // lastName(newValue) {
    //   if (newValue === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = `${this.name} ${newValue}`;
    //   }
    // },
  },
  computed: {
    fullName() {
      console.log("running again...");
      const result = this.name === "" || this.lastName === "" ? "" : `${this.name} ${this.lastName}`;
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
      this.lastName = "";
    },
  },
});

app.mount("#events");
