<script setup lang="ts">
import { MapPin, Mailbox, PhoneIncoming } from 'lucide-vue-next';
</script>

<template>
  <footer class="flex flex-col items-center justify-center mt-20" id="contacts">
    <div class="w-[60%] flex items-center justify-center gap-20 p-5 bg-white rounded-lg shadow-lg">
      <div class="w-[25%] flex items-center gap-5 m-auto">
        <MapPin :color="'red'" :size="35" />

        <div class="flex flex-col items-start">
          <p class="font-bold">Адрес</p>

          <span>г. Йошкар-Ола, ул. Ленина, д. 1</span>
        </div>
      </div>

      <div class="w-[25%] flex items-center gap-5">
        <Mailbox :color="'red'" :size="30" />

        <div class="flex flex-col items-start">
          <p class="font-bold">Почтвый ящик</p>

          <span>info@info.ru</span>
        </div>
      </div>

      <div class="w-[25%] flex items-center gap-5">
        <PhoneIncoming :color="'red'" :size="30" />

        <div class="flex flex-col items-start">
          <p class="font-bold">Телефон</p>

          <span>+7 (495) 123-45-67</span>
        </div>
      </div>
    </div>
  </footer>
</template>
