<template>
  <div>
    <h1>{{ $t('contact.title') }}</h1>
    <form @submit.prevent>
      <label>{{ $t('contact.name') }}: <input type="text" /></label><br />
      <label>{{ $t('contact.message') }}: <textarea></textarea></label><br />
      <button type="submit">{{ $t('contact.submit') }}</button>
    </form>
  </div>
</template>