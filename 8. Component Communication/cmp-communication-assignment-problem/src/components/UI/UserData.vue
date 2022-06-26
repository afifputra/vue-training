<template>
  <h3 class="mb-1">Welcome</h3>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your first name.."
        v-model="enteredFirstName"
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
        v-model="enteredLastName"
      />

      <label for="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        placeholder="Your age.."
        v-model="enteredAge"
      />

      <label for="gender">Gender</label>
      <select id="gender" name="gender" v-model="selectedGender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  emits: ["onAddUser"],
  data() {
    return {
      enteredFirstName: "",
      enteredLastName: "",
      enteredAge: null,
      selectedGender: "male",
    };
  },
  methods: {
    onSubmit() {
      this.$emit(
        "onAddUser",
        this.enteredFirstName,
        this.enteredLastName,
        this.enteredAge,
        this.selectedGender
      );
      this.enteredFirstName = "";
      this.enteredLastName = "";
      this.enteredAge = null;
      this.selectedGender = "male";
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 1rem;
}
.mb-1 {
  margin-bottom: 1rem;
}
</style>