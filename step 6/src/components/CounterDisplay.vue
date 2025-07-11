<template>
  <div class="display">
    <p>Текущее количество: <strong>{{ count }}</strong></p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const count = computed(() => store.state.counter)
</script>

<style scoped>
.display {
  font-size: 1.5rem;
  margin: 20px 0;
}
</style>
