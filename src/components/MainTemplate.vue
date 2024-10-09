<script setup lang="ts">
import {onMounted, ref} from 'vue';

import {Motion} from '@oku-ui/motion';
import Typed from 'typed.js';

import {Services, About, ForFace} from '@/components';

const typedElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (typedElement.value) {
    const options = {
      strings: ['Экономическая защита города!'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false
    };

    new Typed(typedElement.value, options);
  }
});
</script>

<template>
  <div class="main">
    <div class="main__title">
      <Motion
        :initial="{rotateY: 360}"
        :animate="{rotateY: 0}"
        :exit="{rotateY: 360}"
        :transition="{duration: 4}"
      >
        <img src="/logo.svg" width="450" alt="logo" />
      </Motion>

      <h1 class="typed-text" ref="typedElement"></h1>
    </div>

    <Motion
      :initial="{opacity: 0, y: 100}"
      :animate="{opacity: 1, y: 0}"
      :exit="{opacity: 0}"
      :transition="{duration: 2}"
    >
      <About />
    </Motion>

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
    height: 40vh;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  .typed-text {
    width: 50%;
    font-weight: bold;
    font-size: 70px;
    text-align: left;
  }
}

@media (max-width: 1600px) {
  .main {
    .typed-text {
      font-size: 60px;
    }
  }
}

@media (max-width: 992px) {
  .main {
    .typed-text {
      width: 90%;
      font-size: 30px;

      text-align: center;
    }

    &__title {
      justify-content: center;
      flex-direction: column;
      height: 50vh;

      img {
        width: 300px;
      }
    }
  }
}
</style>
