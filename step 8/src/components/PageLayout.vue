<template>
  <div class="layout">
    <header class="layout-header">
      <slot name="header">Default Header</slot>
    </header>

    <main class="layout-content">
      <slot />
    </main>

    <footer class="layout-footer">
      <slot name="footer">© 2025 Vue Slots Example</slot>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.layout-header, .layout-footer {
  padding: 16px;
  background-color: #f5f5f5;
  text-align: center;
}
.layout-content {
  flex-grow: 1;
  padding: 20px;
}
</style>