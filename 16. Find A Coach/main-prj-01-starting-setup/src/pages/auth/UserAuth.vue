<template>
  <base-card>
    <form @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model.trim="password"
        />
      </div>
      <p style="color: red" v-if="!formIsValid">
        Incorrect email or password. Please try again. At least 6 characters.
      </p>
      <base-button>{{ captionSubmit }}</base-button>
      <base-button type="button" mode="flat" @click="switchMode">{{
        captionSwitch
      }}</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
    };
  },
  computed: {
    captionSubmit() {
      return this.mode === 'login' ? 'Login' : 'Signup';
    },
    captionSwitch() {
      return this.mode === 'login' ? 'Signup instead' : 'Login instead';
    },
  },
  methods: {
    onSubmit() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      console.log(this.email, this.password, this.mode);
    },
    switchMode() {
      if (this.email !== '' || this.password !== '') {
        this.email = '';
        this.password = '';
      }
      this.mode = this.mode === 'login' ? 'signup' : 'login';
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>