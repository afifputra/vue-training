<template>
  <container>
    <user-data @on-add-user="onAddUser"></user-data>
    <user-list :users="users"></user-list>
  </container>
</template>

<script>
import container from "./components/Base/TheContainer.vue";
import userData from "./components/UI/UserData.vue";
import userList from "./components/UI/ActiveUser.vue";

export default {
  components: {
    container,
    userData,
    userList,
  },
  data() {
    return {
      users: [
        {
          id: "john",
          firstName: "John",
          lastName: "Doe",
          age: 21,
          gender: "male",
        },
      ],
    };
  },
  methods: {
    onAddUser(firstName, lastName, age, gender) {
      const inputUser = {
        id: firstName.toLowerCase(),
        firstName,
        lastName,
        age,
        gender,
      };
      this.users.push(inputUser);
    },
  },
};
</script>

<style>
/* Reset styling */
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
}
</style>