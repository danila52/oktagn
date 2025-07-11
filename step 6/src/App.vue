<template>
  <div class="container">
    <h1>Счётчик задач</h1>
    <CounterDisplay />
    <CounterControls />
  </div>
</template>

<script setup>
import CounterDisplay from './components/CounterDisplay.vue'
import CounterControls from './components/CounterControls.vue'
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto;
  text-align: center;
  font-family: 'Arial', sans-serif;
}
</style>
