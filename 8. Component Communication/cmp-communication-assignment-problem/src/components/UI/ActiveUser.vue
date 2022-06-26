<template>
  <div class="layout">
    <div v-for="user in users" :key="user.id">
      <card
        :firstName="user.firstName"
        :lastName="user.lastName"
        :age="user.age"
        :gender="user.gender"
      ></card>
    </div>
  </div>
</template>

<script>
import card from "../Base/TheCard.vue";
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  components: {
    card,
  },
};
</script>

<style>
.layout {
  display: flex;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 1rem;
}
</style>