<template>
  <div>
    <h1>{{ $t('home.title') }}</h1>
    <p>{{ $t('home.countries') }}</p>
    <ul>
      <li v-for="country in $t('home.countryList')" :key="country">{{ country }}</li>
    </ul>
  </div>
</template>