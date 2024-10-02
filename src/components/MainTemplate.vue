<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { Motion } from '@oku-ui/motion';
import Typed from 'typed.js';

import { Services, About, ForFace } from '@/components';

const typedElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (typedElement.value) {
    const options = {
      strings: ['Вы ставите задачу, мы её решаем!'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false,
      onComplete: () => {
        const cursor = typedElement.value?.nextElementSibling as HTMLElement;
        if (cursor) {
          cursor.style.display = 'none';
        }
      }
    };

    new Typed(typedElement.value, options);
  }
});
</script>

<template>
  <div class="main">
    <div class="main__title">
      <Motion :initial="{ rotateY: 360 }" :animate="{ rotateY: 0 }" :exit="{ rotateY: 360 }" :transition="{ duration: 4 }"
        class="box">
        <img src="/logo.svg" width="300px" alt="" />
      </Motion>

      <div class="flex">
        <span class="font-bold text-3xl" ref="typedElement"></span>
      </div>

      <Motion :initial="{ opacity: 0, y: 100 }" :animate="{ opacity: 1, y: 0 }" :exit="{ opacity: 0 }"
        :transition="{ duration: 2 }">
        <About />
      </Motion>
    </div>

    <Services />

    <ForFace />
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &__title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    div span {
      margin: 0 auto;

      font-size: 24px;
      text-align: center;
    }
  }
}
</style>
