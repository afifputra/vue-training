const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result(newValue) {
      console.log(newValue);
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
  computed: {
    statusResult() {
      if (this.result === 37) {
        return this.result;
      }

      if (this.result < 37) {
        return "Not there yet!";
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    increment(value) {
      this.result += value;
    },
  },
});

app.mount("#assignment");
