<template>
  <form @submit.prevent="onSubmit">
    <div
      class="form-control"
      :class="{ invalid: usernameValidity === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="onValidateUsername"
      />
      <p v-if="usernameValidity === 'invalid'">Please, enter valid username.</p>
    </div>
    <div class="form-control" :class="{ invalid: ageValidity === 'invalid' }">
      <label for="age">Your Age (Years)</label>
      <input
        id="age"
        name="age"
        type="number"
        v-model="userAge"
        @input="onValidateAge"
      />
      <p v-if="ageValidity === 'invalid'">Please, enter your age in years.</p>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="refferer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="interests"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="interests"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="interests"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video"
          v-model="how"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blog"
          v-model="how"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="how"
        />
        <label for="how-other">Other</label>
      </div>
      <div class="form-control">
        <rating-control v-model="rating"></rating-control>
      </div>
      <div>
        <input
          type="checkbox"
          name="confirm-terms"
          id="confirm"
          v-model="confirm"
        />
        <label for="confirm">Agree</label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';

export default {
  components: {
    RatingControl,
  },
  data() {
    return {
      userName: '',
      userAge: null,
      refferer: 'wom',
      interests: [],
      how: null,
      confirm: false,
      usernameValidity: 'valid',
      ageValidity: 'valid',
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      console.log(`Username: ${this.userName}`);
      console.log(`Age: ${this.userAge}`);
      console.log(`Referrer: ${this.refferer}`);
      console.log(`Interests: ${this.interests}`);
      console.log(`How: ${this.how}`);
      console.log(`Confirm: ${this.confirm}`);
      console.log(`Rating: ${this.rating}`);
      this.userName = '';
      this.userAge = null;
      this.refferer = 'wom';
      this.interests = [];
      this.how = null;
      this.confirm = false;
      this.rating = null;
    },
    onValidateUsername() {
      if (this.userName !== '') {
        this.usernameValidity = 'valid';
      } else {
        this.usernameValidity = 'invalid';
      }
    },
    onValidateAge() {
      if (this.userAge !== '') {
        console.log('masuk');
        this.ageValidity = 'valid';
      } else {
        console.log('kesini bos');
        this.ageValidity = 'invalid';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: #ff0000;
}

.form-control.invalid p {
  color: #ff0000;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>