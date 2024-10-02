<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { Menu } from 'lucide-vue-next';

import { links } from '@/shared/constants/';

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger
} from '@/components/ui/sheet';
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

    <Sheet>
      <SheetTrigger id="popover" as-child>
        <Menu :size="30" />
      </SheetTrigger>

      <SheetContent class="w-full h-[100%] flex items-center justify-center shadow-lg rounded-[20px]">
        <img src="/logo.svg" width="180" alt="" />
        <ul class="text-[20px] font-bold">
          <li v-for="(link, index) in links" :key="index" class="mt-4">
            <SheetClose as-child>
              <a :href="link.path">{{ link.title }}</a>
            </SheetClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
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
  header {
    height: 10vh;
    padding: 0 20px;

    img {
      display: none;
    }
  }

  nav {
    display: none !important;
  }

  #popover {
    display: flex !important;
  }
}
</style>
