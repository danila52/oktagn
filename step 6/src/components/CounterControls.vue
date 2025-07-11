<template>
  <div class="controls">
    <button @click="increment">Увеличить</button>
    <button @click="decrement">Уменьшить</button>
    <button @click="reset">Сбросить</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const increment = () => store.commit('increment')
const decrement = () => store.commit('decrement')
const reset = () => store.commit('reset')
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
}
button {
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
