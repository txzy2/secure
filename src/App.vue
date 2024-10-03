<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { ChevronsUp } from 'lucide-vue-next';

import { Header } from '@/components';

const loading = ref<boolean>(true);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  const timeout = setTimeout(() => {
    loading.value = false;
  }, 1500);

  return () => {
    clearTimeout(timeout);
  };
});
</script>

<template>
  <Header />

  <RouterView />

  <button class="btn" @click="scrollToTop()">
    <ChevronsUp :size="35" />
  </button>
</template>

<style scoped lang="scss">
.btn {
  position: fixed;
  bottom: 50%;
  right: 20px;

  transform: translateY(50%);

  padding: 10px;

  color: #d64949;
  outline: none;
  border: none;

  border-radius: 10px;

  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    scale: 1.15;
  }
}

@media (max-width: 992px) {
  .btn {
    bottom: 100px;
  }
}
</style>
