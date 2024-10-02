<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { links } from '@/shared/constants/';

const open = ref(false);
</script>

<template>
  <header>
    <RouterLink class="transition hover:underline hover:scale-105" to="/">
      <img src="/logo.svg" width="120px" alt="" />
    </RouterLink>

    <nav>
      <ul v-for="(link, index) in links" :key="index">
        <li>
          <a :href="link.path">{{ link.title }}</a>
        </li>
      </ul>
    </nav>

    <Popover>
      <PopoverTrigger id="popover" @click="() => (open = !open)">
        <Menu :size="30" />
      </PopoverTrigger>

      <PopoverContent v-if="open" class="me-3 w-[200px] h-[30vh] bg-white shadow-lg">
        <ul>
          <li v-for="(link, index) in links" :key="index" class="mt-2">
            <RouterLink :to="link.path">{{ link.title }}</RouterLink>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 15vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;

  z-index: 1000;

  nav {
    display: flex;
    align-items: center;
    gap: 20px;

    li {
      font-size: 16px;

      transition: all 0.3s ease;

      &:hover {
        scale: 1.05;

        text-decoration: underline;

        font-weight: bold;
      }
    }
  }

  #popover {
    display: none;
  }
}

@media (max-width: 921px) {
  nav {
    display: none !important;
  }

  #popover {
    display: flex !important;
  }
}
</style>
