<template>
  <div class="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen">
    <NavBar />
    <section class="p-4">
      <CurrentWeather :weather="weatherData.current as CurrentModel" :postalInfo="postalInfo as PostalInfo" />
    </section>
    <section class="p-4">
      <DailyWeatherList :data="weatherData.daily" />
    </section>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import CurrentWeather from '@/components/CurrentWeather.vue';
import DailyWeatherList from '@/components/DailyWeatherList.vue';
import { WeatherResponse } from '@/models/WeatherResponse';
import { PostalInfo } from '@/models/PostalInfo';
import { CurrentWeather as CurrentModel } from '~/models/CurrentWeather';
import { WeatherService } from '~/services/WeatherService';

export default {
  components: {
    NavBar,
    CurrentWeather,
    DailyWeatherList
  },
  setup() {
    const route = useRoute();
    const postalInfo = ref<PostalInfo>(new PostalInfo({}));
    const weatherData = ref<WeatherResponse>(new WeatherResponse({}));

    onMounted(() => {
      const postalInfoQuery = route.query.postalInfo as string;
      if (postalInfoQuery) {
        postalInfo.value = JSON.parse(postalInfoQuery) as PostalInfo;
        fetchWeatherData();
      }
    });

    const fetchWeatherData = async () => {
      try {
        const response = await WeatherService.find(postalInfo.value as PostalInfo);
        weatherData.value = response;
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return {
      postalInfo,
      weatherData,
    };
  }
}
</script>