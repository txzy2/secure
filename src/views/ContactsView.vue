<script lang="ts" setup>
import { onMounted } from 'vue';
import { Motion } from '@oku-ui/motion';

import { Footer } from '@/components/';

declare const ymaps: any;

onMounted(() => {
  ymaps.ready(initMap);

  function initMap() {
    const map = new ymaps.Map('map', {
      center: [56.631347, 47.889466],
      zoom: 17
    });

    const placemark = new ymaps.Placemark([56.63183, 47.88719], {
      hintContent: 'Защитник'
    });

    map.geoObjects.add(placemark);
  }
});
</script>

<template>
  <div class="contacts">
    <Motion :initial="{ opacity: 0, y: -100 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 2 }">
      <Footer class="w-full" />
    </Motion>

    <div id="map" class="map"></div>
  </div>
</template>

<style scoped>
.contacts {
  width: 90%;
  height: 90vh;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 10px;
}

#map {
  width: 100%;
  height: 70%;

  border: 1 px solid #000;

  margin: 0 auto;
}
</style>
