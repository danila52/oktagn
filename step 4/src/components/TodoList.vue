<template>
  <v-container>
    <v-card class="pa-4" elevation="6">
      <v-card-title>
        <v-icon left>mdi-format-list-checkbox</v-icon>
        Мой список задач
      </v-card-title>

      <v-text-field
        v-model="newTask"
        label="Добавить задачу"
        @keyup.enter="addTask"
        append-inner-icon="mdi-plus"
        @click:append-inner="addTask"
        clearable
      />

      <v-list>
        <v-list-item
          v-for="(task, index) in tasks"
          :key="index"
          class="d-flex align-center"
        >
          <v-checkbox
            v-model="task.done"
            :label="task.text"
            class="flex-grow-1"
          />
          <v-btn icon color="error" @click="removeTask(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

const addTask = () => {
  const text = newTask.value.trim()
  if (text) {
    tasks.value.push({ text, done: false })
    newTask.value = ''
  }
}

const removeTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>
