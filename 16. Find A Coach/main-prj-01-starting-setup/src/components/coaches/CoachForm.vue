<template>
  <section>
    <base-card>
      <form @submit.prevent="submitForm">
        <h2>Register Your as A Coach</h2>
        <div class="form-control" :class="{ invalid: !firstName.isValid }">
          <label for="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            autocomplete="off"
            v-model.trim="firstName.val"
            @blur="removeInvalid('firstName')"
          />
        </div>
        <div class="form-control" :class="{ invalid: !lastName.isValid }">
          <label for="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            autocomplete="off"
            v-model.trim="lastName.val"
            @blur="removeInvalid('lastName')"
          />
        </div>
        <div class="form-control" :class="{ invalid: !description.isValid }">
          <label for="description">Description</label>
          <textarea
            id="description"
            rows="5"
            v-model="description.val"
            @blur="removeInvalid('description')"
          ></textarea>
        </div>
        <div class="form-control" :class="{ invalid: !rate.isValid }">
          <label for="rate">Hourly Rate</label>
          <input
            type="number"
            name="rate"
            id="rate"
            v-model.number="rate.val"
            @blur="removeInvalid('rate')"
          />
        </div>
        <div class="form" :class="{ invalid: !areas.isValid }">
          <h3>Areas of Expertise</h3>
          <div>
            <input
              type="checkbox"
              name="frontend"
              id="frontend"
              value="frontend"
              v-model="areas.val"
              @blur="removeInvalid('areas')"
            />
            <label for="frontend">Frontend</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="backend"
              id="backend"
              value="backend"
              v-model="areas.val"
              @blur="removeInvalid('areas')"
            />
            <label for="backend">Backend</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="career"
              id="career"
              value="career"
              v-model="areas.val"
              @blur="removeInvalid('areas')"
            />
            <label for="career">Career</label>
          </div>
        </div>
        <p v-if="!formIsValid">
          Please fill the form with the correct information.
        </p>
        <base-button>Register</base-button>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    removeInvalid(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length < 1) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.firstName.val = '';
      this.lastName.val = '';
      this.description.val = '';
      this.rate.val = null;
      this.areas.val = [];
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>