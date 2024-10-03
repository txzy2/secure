<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Motion } from '@oku-ui/motion';

import { services } from '@/shared/constants/';

const hovered = ref<number | null>(null);
const isVisible = ref<boolean[]>([]);

const setHovered = (i: number) => {
  hovered.value = i;
};

const clearHovered = () => {
  hovered.value = null;
};

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const index = Number((entry.target as HTMLElement).dataset.index);
      if (entry.isIntersecting) {
        isVisible.value[index] = true;
      }
    });
  });

  const elements = document.querySelectorAll<HTMLElement>(
    '.services__content--item'
  );
  elements.forEach((el, index) => {
    el.dataset.index = index.toString();
    observer.observe(el);
  });

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div class="services" id="services">
    <h3>Наши услуги</h3>
    <div class="services__content">
      <div v-for="(service, index) in services" :key="index" @mouseover="setHovered(index)" @mouseleave="clearHovered">
        <Motion class="services__content--item" :initial="{ y: 0, opacity: 0 }" :animate="isVisible[index] ? { y: [0, -20, 0], opacity: 1 } : { y: 0, opacity: 0 }
          " :transition="{
            duration: 1,
            delay: index * 0.2
          }">
          <div>
            <component :is="hovered === index && service.iconAnim
                ? service.iconAnim
                : service.icon
              " :size="45" />

            <span class="font-bold text-xl">{{ service.title }}</span>
          </div>

          <p>{{ service.description }}</p>
        </Motion>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.services {
  width: 100%;

  // height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  gap: 20px;

  h3 {
    font-size: 30px;
    font-weight: 600;

    margin-bottom: 50px;
  }

  &__content {
    width: 75%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    &--item {
      cursor: pointer;

      height: 250px;

      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
      padding: 10px;
      border-radius: 10px;

      background-color: rgba(255, 255, 255, 0.6);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

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
        line-height: 1.2;
      }

      &:hover {
        scale: 1.05;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
      }
    }
  }
}

@media (max-width: 1600px) {
  .services {
    &__content {
      width: 90%;
    }
  }
}

@media (max-width: 1200px) {
  .services {
    &__content {
      &--item {
        height: 350px;
      }
    }
  }
}

@media (max-width: 921px) {
  .services {
    &__content {
      width: 90%;
      grid-template-columns: repeat(1, 1fr);

      &--item {
        height: 250px;
      }
    }
  }
}
</style>
