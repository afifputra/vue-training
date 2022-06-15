const app = Vue.createApp({
  data() {
    return {
      myName: "Afif Putra Haryono",
      myAge: 23,
      myImage: "https://i0.wp.com/mrtunakarya.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-25-at-09.33.51-3.jpeg?resize=680%2C382&ssl=1",
      myFavoriteNumber: Math.random(),
    };
  },
  methods: {
    calculateAge() {
      return this.myAge + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
