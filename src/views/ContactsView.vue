<script lang="ts" setup>
import {onMounted} from 'vue';
import {Footer} from '@/components/';

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
    <Footer class="w-full" />
    <div id="map" class="map"></div>
  </div>
</template>

<style scoped>
.contacts {
  width: 80%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */

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
