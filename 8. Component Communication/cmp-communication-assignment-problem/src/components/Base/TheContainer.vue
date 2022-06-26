<template>
  <main class="container">
    <slot></slot>
  </main>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  height: 100vh;
  padding-top: 1rem;
  /* padding: 2px 16px; */
}
</style>