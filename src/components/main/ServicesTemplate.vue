<script setup lang="ts">
import { ref } from 'vue';

import { services } from '@/shared/constants/';

const hovered = ref<number | null>(null);

const setHovered = (i: number) => {
  hovered.value = i;
};

const clearHovered = () => {
  hovered.value = null;
};
</script>

<template>
  <div class="services" id="services">
    <h3>Наши услуги</h3>
    <div class="services__content">
      <div v-for="(service, index) in services" :key="index" class="services__content--item"
        @mouseover="setHovered(index)" @mouseleave="clearHovered">
        <div>
          <component :is="hovered === index && service.iconAnim
              ? service.iconAnim
              : service.icon
            " :size="45" />

          <span class="font-bold text-xl">{{ service.title }}</span>
        </div>

        <p>{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.services {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  h3 {
    font-size: 30px;
    font-weight: 600;
  }

  &__content {
    width: 75%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    &--item {
      cursor: pointer;

      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
      padding: 10px;
      border-radius: 10px;

      background-color: rgba(255, 255, 255, 0.6);

      box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

      transition: all 0.3s ease;

      div {
        display: flex;
        flex-direction: column;

        gap: 5px;
      }

      h3 {
        font-size: 20px;
        font-weight: 600;
      }

      p {
        width: 100%;
        font-size: 14px;
      }

      &:hover {
        scale: 1.05;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
      }
    }
  }
}

@media (max-width: 921px) {
  .services {
    &__content {
      width: 90%;
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
