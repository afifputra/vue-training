const app = Vue.createApp({
  data() {
    return {
      myName: "Afif Putra Haryono",
      myAge: 23,
      myImage: "https://api.duniagames.co.id/api/content/upload/file/8755136771648463695.jpg",
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
