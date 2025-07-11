<template>
  <PageLayout>
    <template #header>
      <h1>Reusable Components with Slots</h1>
    </template>

    <BaseCard>
      <template #header>
        First Card
      </template>
      This card demonstrates all named slots.
      <template #footer>
        Footer text.
      </template>
    </BaseCard>

    <BaseCard>
      <template #header>
        Another Example
      </template>
      <p>This card has only a header slot and default content.</p>
    </BaseCard>

    <BaseCard>
      This one is using only the default slot.
    </BaseCard>

    <BaseButton>Click Me</BaseButton>

    <template #footer>
      Custom Footer © 2025
    </template>
  </PageLayout>
</template>

<script setup>
import BaseCard from '../components/BaseCard.vue';
import BaseButton from '../components/BaseButton.vue';
import PageLayout from '../components/PageLayout.vue';
</script>