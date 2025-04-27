<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
    <div
      v-for="(day, index) in data.time.slice(0, 6)"
      :key="index"
      class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between"
    >
      <!-- Cabeçalho do card (data e temperatura) -->
      <div class="flex justify-between items-center mb-6">
        <p class="text-xl font-semibold text-gray-800">
          {{ formatDate(day) }}
        </p>
        <div class="flex items-center space-x-4">
          <i :class="getWeatherIcon(data.weather_code[index])" class="text-3xl"></i> <!-- Ícone dinâmico -->
          <div class="text-center">
            <p class="text-xl font-semibold text-red-500">{{ data.temperature_2m_max[index] }}°C</p>
            <p class="text-xl font-semibold text-blue-500">{{ data.temperature_2m_min[index] }}°C</p>
          </div>
        </div>
      </div>

      <!-- Detalhes do clima -->
      <div class="space-y-4 text-sm text-gray-600">
        <div class="flex justify-between">
          <p class="font-semibold">Nascer do Sol:</p>
          <p>{{ formatTime(data.sunrise[index]) }}</p>
        </div>
        <div class="flex justify-between">
          <p class="font-semibold">Pôr do Sol:</p>
          <p>{{ formatTime(data.sunset[index]) }}</p>
        </div>
        <div class="flex justify-between">
          <p class="font-semibold">Índice UV Máx:</p>
          <p class="font-semibold">{{ data.uv_index_max[index] }}</p>
        </div>
        <div class="flex justify-between">
          <p class="font-semibold">Vento Máx:</p>
          <p>{{ data.wind_speed_10m_max[index] }} km/h</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ data: Object });
import { getWeatherIcon } from '~/models/EWeatherIcon';

// Função para formatar a data
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "short" });
};

// Função para formatar a hora
const formatTime = (isoTime) => {
  const time = new Date(isoTime);
  return time.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
};
</script>
