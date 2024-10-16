<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router';
import { Menu } from 'lucide-vue-next';

import { links } from '@/shared/constants/';

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger
} from '@/components/ui/sheet';
import { computed } from 'vue';

const route = useRoute();

const isContactsPage = computed(() => route.path === '/contacts');
</script>

<template>
  <header>
    <RouterLink class="transition hover:underline hover:scale-105" to="/">
      <img src="/logo.svg" width="120px" alt="" />
    </RouterLink>

    <marquee behavior="scroll" direction="left" id="marquee" scrollamount="15" class="w-[60%] text-[22px] italic ">
      Служба безопасности города! Вы ставите задачу мы её решаем!
    </marquee>

    <nav v-if="!isContactsPage">
      <ul v-for="(link, index) in links" :key="index">
        <li>
          <a class="text-[18px] font-semibold" v-if="link.title === 'Услуги'" :href="link.path">{{
            link.title
          }}</a>
          <RouterLink v-else-if="link.title === 'Контакты'" class="text-[18px] font-semibold" :to="link.path">{{
            link.title }}</RouterLink>
        </li>
      </ul>
    </nav>

    <RouterLink v-else class="home__link" to="/">О нас</RouterLink>

    <Sheet>
      <SheetTrigger id="popover" as-child>
        <Menu :size="30" />
      </SheetTrigger>

      <SheetContent class="w-full h-[100%] flex items-center justify-center shadow-lg rounded-[20px]">
        <SheetClose as-child>
          <RouterLink to="/">
            <img src="/logo.svg" width="180" alt="" />
          </RouterLink>
        </SheetClose>

        <ul class="text-[20px] font-bold">
          <li v-for="(link, index) in links" :key="index" class="mt-4">
            <SheetClose as-child>
              <a class="text-[18px] font-semibold" v-if="link.title === 'Услуги'"
                :href="link.path === '#services' && isContactsPage ? '/' : link.path">{{
                  link.title
                }}</a>
              <RouterLink v-else-if="link.title === 'Контакты'" class="text-[18px] font-semibold" :to="link.path">{{
                link.title }}</RouterLink>
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
      }
    }
  }

  .home__link {
    margin-right: 40px;
    font-weight: bold;

    transition: all 0.3s ease;

    &:hover {
      scale: 1.05;

      text-decoration: underline;
    }
  }

  #popover {
    display: none;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
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

  .home__link {
    display: none;
  }

  #marquee {
    width: 90%;
  }


  nav {
    display: none !important;
  }

  #popover {
    display: flex !important;
  }
}
</style>
