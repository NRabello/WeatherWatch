<template>
  <NuxtPage />
</template>

<script setup>
useHead({
  title: 'WeatherWatch',
  meta: [
    {
      name: 'description',
      content: 'My super climate and weather website.'
    }
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/clima.png' }]
})
</script>