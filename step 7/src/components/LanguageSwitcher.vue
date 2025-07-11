<template>
  <div class="lang-switcher">
    <button @click="setLocale('en')">EN</button>
    <button @click="setLocale('ru')">RU</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

function setLocale(lang) {
  locale.value = lang;
}
</script>

<style scoped>
.lang-switcher button {
  margin: 0 5px;
}
</style>