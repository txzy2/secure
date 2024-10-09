<script setup lang="ts">
import {Motion} from '@oku-ui/motion';

import {Main, Footer} from '@/components';
</script>

<template>
  <main class="flex flex-col items-center">
    <Main />
    <!-- <RouterLink class="underline" to="/about">About</RouterLink> -->
  </main>

  <Footer class="w-[75%] mt-20 m-auto" />
</template>
