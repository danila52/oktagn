<template>
  <div>
    <nav>
      <router-link to="/">{{ $t('nav.home') }}</router-link> |
      <router-link to="/about">{{ $t('nav.about') }}</router-link> |
      <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
      <LanguageSwitcher />
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import Footer from './components/Footer.vue';
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>