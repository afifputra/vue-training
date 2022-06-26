<template>
  <div class="card">
    <img :src="decisionImage" alt="Avatar" style="width: 100%" />
    <div class="container">
      <h4>{{ `${firstName} ${lastName}` }}</h4>
      <p>{{ age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      defaults: "male",
    },
  },
  computed: {
    decisionImage() {
      if (this.gender === "male") {
        return "https://img.freepik.com/free-vector/outline-side-profile-human-male-head-male-profile-vector-sketch-illustration_231873-895.jpg?w=2000";
      } else {
        return "https://previews.123rf.com/images/elenanaum/elenanaum1602/elenanaum160200016/54078443-profile-of-young-beautiful-woman-with-hair-bun-black-and-white-hand-drawing-vector.jpg";
      }
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 50%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>