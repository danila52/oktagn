<template>
  <div class="base-card">
    <header v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </header>

    <section class="card-body">
      <slot>
        Default card content.
      </slot>
    </section>

    <footer v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.base-card {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}
.base-card:hover {
  transform: translateY(-4px);
}
.card-header {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 10px;
}
.card-footer {
  margin-top: 12px;
  font-size: 0.9em;
  color: #777;
}
</style>