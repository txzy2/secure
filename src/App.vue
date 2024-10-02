<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {RouterView} from 'vue-router';
import {ArrowUpToLine} from 'lucide-vue-next';

import {Header} from '@/components';

const loading = ref<boolean>(true);

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
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

  <button
    class="fixed bottom-10 right-20 p-2 bg-red-400 rounded-lg hover:scale-[1.1]"
    @click="scrollToTop()"
  >
    <ArrowUpToLine :color="'#fff'" />
  </button>
</template>

<style scoped></style>
