<template>
  <div class="text-center bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
    <h2 class="text-2xl font-bold mb-2">Hoje</h2>
    <h2 class="text-2xl font-bold mb-4">{{ postalInfo.adminName2 + " - " + postalInfo.adminName1 }}</h2>
    <div class="flex justify-center items-center space-x-4">
      <i class="fas fa-sun text-6xl text-yellow-400"></i> <!-- Exemplo de ícone -->
      <p class="text-6xl font-semibold text-blue-900">{{ weather?.temperature_2m }}°C</p>
    </div>
    <div class="flex justify-center space-x-6 mt-4">
      <p class="text-lg text-gray-700">Umidade: {{ weather?.relative_humidity_2m }}%</p>
      <p class="text-lg text-gray-700">Vento: {{ weather?.wind_speed_10m }} km/h</p>
      <p class="text-lg text-gray-700">Sensação: {{ weather?.apparent_temperature }}°C</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CurrentWeather } from '~/models/CurrentWeather';
import { PostalInfo } from '~/models/PostalInfo';

const { weather, postalInfo } = defineProps<{ weather: CurrentWeather, postalInfo: PostalInfo }>();
</script>