<template>
  <base-dialog
    title="Invalid Input"
    @on-close-dialog="confirmError"
    v-if="inputIsInvalid"
  >
    <template #dialog-content>
      <p>
        Unfortunately, the input you entered is invalid. Because of this, we
        cannot add the resource to the database.
      </p>
      <p>
        Please try again. If you continue to experience this issue, please
        contact us.
      </p>
    </template>
    <template #dialog-footer>
      <base-button @click="confirmError">OK</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="addResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="enteredTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          v-model="enteredDescription"
        />
      </div>
      <div class="form-control">
        <label for="link">URL</label>
        <input type="url" name="link" id="link" v-model="enteredLink" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredLink: '',
      inputIsInvalid: false,
    };
  },
  inject: ['onAddResource'],
  methods: {
    addResource() {
      if (
        this.enteredTitle.trim() === '' ||
        this.enteredLink.trim() === '' ||
        this.enteredDescription.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.onAddResource({
        id: this.enteredTitle.toLowerCase().replace(/ /g, '-'),
        title: this.enteredTitle,
        description: this.enteredDescription,
        link: this.enteredLink,
      });
      this.enteredTitle = '';
      this.enteredDescription = '';
      this.enteredLink = '';
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>