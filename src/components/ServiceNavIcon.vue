<script setup lang="ts">
import type { ServiceIcon } from '@/data/services'

defineProps<{
  name: ServiceIcon
}>()
</script>

<template>
  <span class="svc-icon" aria-hidden="true">
    <!-- Encaissement -->
    <svg v-if="name === 'collect'" class="svc-icon__svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="6" width="20" height="26" rx="2" stroke="#000b33" stroke-width="2" />
      <circle cx="14" cy="28" r="7" fill="#ff5a30" />
      <path d="M12 28l2.5 2.5L18 26" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- Liens -->
    <svg v-else-if="name === 'links'" class="svc-icon__svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20a5 5 0 011.3-3.4l3-3a5 5 0 017 7l-2 2M28 20a5 5 0 01-1.3 3.4l-3 3a5 5 0 01-7-7l2-2"
        stroke="#000b33"
        stroke-width="2"
        stroke-linecap="round"
      />
      <circle cx="14" cy="30" r="7" fill="#ff5a30" />
      <path d="M11.5 30h5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" />
    </svg>
    <!-- Masse -->
    <svg v-else-if="name === 'mass'" class="svc-icon__svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8l4 10h10l-8 6 3 10-9-6-9 6 3-10-8-6h10l4-10z" stroke="#000b33" stroke-width="1.8" stroke-linejoin="round" fill="none" />
      <circle cx="30" cy="28" r="6" fill="#ff5a30" />
      <path d="M27.5 28h5" stroke="#fff" stroke-width="1.4" stroke-linecap="round" />
    </svg>
    <!-- Scolarité -->
    <svg v-else-if="name === 'school'" class="svc-icon__svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 16l12-6 12 6v16H8V16z" stroke="#000b33" stroke-width="2" stroke-linejoin="round" />
      <path d="M14 22h12M14 26h8" stroke="#000b33" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="14" cy="32" r="6" fill="#ff5a30" />
      <path d="M12 32l1.8 1.8L16.5 30" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- Portefeuille -->
    <svg v-else-if="name === 'wallet'" class="svc-icon__svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="28" height="20" rx="3" stroke="#000b33" stroke-width="2" />
      <path d="M6 16h24" stroke="#000b33" stroke-width="2" />
      <circle cx="28" cy="22" r="3" fill="#ff5a30" />
    </svg>
    <!-- API -->
    <svg v-else class="svc-icon__svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14h8v4H8v-4zM24 22h8v4h-8v-4z" stroke="#000b33" stroke-width="2" />
      <path d="M16 16h4v8h-4v-8z" fill="#ff5a30" />
      <path d="M18 20c3-1 5-1 8 0M18 24c3 1 5 1 8 0" stroke="#000b33" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  </span>
</template>

<style scoped>
.svc-icon {
  display: flex;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.svc-icon__svg {
  width: 100%;
  height: 100%;
}
</style>
