const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "agus",
          name: "Agus Lopez",
          phone: "081239277635",
          email: "agus@mailinator.com",
        },
        {
          id: "juan",
          name: "Juan Lopez",
          phone: "081239277635",
          email: "juan@mailinator.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ labelForDetails }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "agus",
        name: "Agus Lopez",
        phone: "081239277635",
        email: "agus@mailinator.com",
      },
    };
  },
  computed: {
    labelForDetails() {
      return this.detailsAreVisible ? "Hide" : "Show";
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
