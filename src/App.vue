<template>
  <div class="app-container p-4">
    <h1 class="text-3xl font-bold mb-2">Управление учетными записями</h1>
    <p class="text-color-secondary mb-6">
      В поле «Метка» вводите текстовые метки через разделитель <strong>;</strong>
    </p>

    <AccountsTable />
  </div>
</template>

<script setup lang="ts">
import AccountsTable from '@/components/AccountsTable.vue'
</script>

<style>
.app-container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
