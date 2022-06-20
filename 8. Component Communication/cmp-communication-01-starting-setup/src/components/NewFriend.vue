<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="inputName" />
        <br />
        <label for="phone">Phone</label>
        <input
          type="tel"
          inputmode="numeric"
          name="phone"
          id="phone"
          v-model="inputPhone"
        />
        <br />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="inputEmail" />
        <br />
        <input
          type="checkbox"
          name="favorite"
          id="favorite"
          v-model="inputFavorite"
        />
        Add To Favorites
        <br />
        <button @click="addFriend">Add Friend</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputName: "",
      inputPhone: "",
      inputEmail: "",
      inputFavorite: false,
    };
  },
  methods: {
    addFriend(event) {
      event.preventDefault();
      this.$emit("add-friend", {
        id: new Date.toIsoString(),
        name: this.inputName,
        phone: this.inputPhone,
        email: this.inputEmail,
        isFavorite: this.inputFavorite,
      });
      this.inputName = "";
      this.inputPhone = "";
      this.inputEmail = "";
      this.inputFavorite = false;
    },
  },
};
</script>