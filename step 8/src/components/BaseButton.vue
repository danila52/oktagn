<template>
  <button class="base-button">
    <slot>Default Button</slot>
  </button>
</template>

<style scoped>
.base-button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}
.base-button:hover {
  background-color: #369f75;
}
</style>