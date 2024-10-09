<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {RouterView} from 'vue-router';
import {ChevronsUp, ChevronsDown} from 'lucide-vue-next';

import {Header} from '@/components';

import {links} from '@/shared/constants/';

const loading = ref<boolean>(true);

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

let currentIndex = 0;

const scrollToNext = () => {
  if (currentIndex < links.length) {
    const item = links[currentIndex];

    const element = document.querySelector(item.path);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }

    currentIndex++;
  } else {
    currentIndex = 0;
  }
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

  <div class="btn">
    <button @click="scrollToTop()">
      <ChevronsUp :size="35" />
    </button>

    <button @click="scrollToNext()">
      <ChevronsDown :size="35" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.btn {
  position: fixed;
  bottom: 50%;
  right: 20px;

  transform: translateY(50%);

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 2px;

  // color: #d64949;
  color: #fff;
  background-color: #d64949;
  outline: none;
  border: none;

  border-radius: 10px;

  cursor: pointer;

  button {
    transition: all 0.3s ease-out;

    &:hover {
      scale: 1.15;
    }
  }
}

@media (max-width: 992px) {
  .btn {
    bottom: 100px;
  }
}
</style>
