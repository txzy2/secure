<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { ArrowUpToLine } from 'lucide-vue-next';

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
    <ArrowUpToLine :color="'#fff'" />
  </button>
</template>

<style scoped lang="scss">
.btn {
  position: fixed;
  bottom: 40px;
  right: 20px;

  padding: 10px;

  background: #d64949;

  border-radius: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    scale: 1.1;
  }
}

@media (max-width: 992px) {
  .btn {
    bottom: 100px;
  }
}
</style>
