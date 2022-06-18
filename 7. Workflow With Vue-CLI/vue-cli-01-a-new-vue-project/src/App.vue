<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        { id: "John", name: "John Max", phone: "088765432123", email: "john@mailinator.com" },
        { id: "Jane", name: "Jane Doe", phone: "088765432123", email: "jane@mailinator.com" },
      ],
    };
  },
};
</script>
