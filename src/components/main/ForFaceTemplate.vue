<script setup lang="ts">
import {ref} from 'vue';

import {sections as text, servicesFiz as fiz} from '@/shared/constants/';

const selectItem = ref<'fiz' | 'yur'>('fiz');
const sections = ref(text);
</script>

<template>
  <div class="switcher">
    <div class="switcher__btns">
      <button
        class="switcher__btns--item"
        @click="selectItem = 'yur'"
        :class="{selected: selectItem === 'yur'}"
      >
        Юридические лица
      </button>

      <button
        class="switcher__btns--item"
        @click="selectItem = 'fiz'"
        :class="{selected: selectItem === 'fiz'}"
      >
        Физические лица
      </button>
    </div>

    <div class="switcher__content">
      <div v-if="selectItem === 'fiz'" class="">
        <div class="switcher__fiz">
          <div
            v-for="(item, i) in fiz"
            :key="i"
            class="switcher__ur--item h-[250px] group"
          >
            <div class="flex flex-col gap-1">
              <component
                :is="item.icon"
                :size="45"
                class="transform transition-transform group-hover:-rotate-45"
              />
              <h3 class="font-bold">{{ item.title }}</h3>
            </div>

            <p class="w-full">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div v-else class="switcher__content--ur">
        <div class="switcher__content--ur__items">
          <div class="switcher__ur">
            <div
              v-for="(section, i) in sections"
              :key="i"
              class="switcher__ur--item h-[250px] group"
            >
              <div class="flex flex-col gap-1">
                <component
                  :is="section.icon"
                  :size="45"
                  class="transform transition-transform group-hover:-rotate-45"
                />

                <h3>{{ section.title }}</h3>
              </div>

              <p class="w-full">{{ section.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.switcher {
  width: 75%;

  display: flex;
  flex-direction: column;

  align-items: center;

  &__fiz {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  &__ur {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

      transition: all 0.3s ease;

      h3 {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        font-weight: bold;

        font-size: 20px;
      }

      p {
        font-size: 14px;

        line-height: 1.3;
      }
    }
  }

  &__ur--item:hover {
    scale: 1.05;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
  }

  &__btns {
    display: flex;
    align-items: center;

    padding: 4px;
    margin: 50px 0;
    gap: 10px;

    background-color: #d64949;
    border-radius: 20px;

    &--item {
      padding: 10px 60px;

      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      background-color: transparent;
      border-radius: 15px;
      color: #fff;
    }
  }
}

.selected {
  background-color: #fff;
  color: #000;

  font-weight: bold;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

@media (max-width: 1200px) {
  .switcher {
    width: 90%;

    &__btns {
      &--item {
        font-size: 14px;
      }
    }

    &__ur,
    &__fiz {
      &--item {
        height: 300px;
      }
    }
  }
}

@media (max-width: 921px) {
  .switcher {
    &__btns {
      &--item {
        padding: 10px 40px;
        font-size: 12px;
      }
    }

    &__ur,
    &__fiz {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(1, 1fr);

      margin: 0 auto;

      &--item {
        height: 250px;
      }
    }
  }
}
</style>
