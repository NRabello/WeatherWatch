export enum WeatherCode {
    SUNNY = 0,
    CLEAR = 1,
    PARTLY_CLOUDY = 2,
    CLOUDY = 3,
    LIGHT_DRIZZLE = 51,
    MODERATE_DRIZZLE = 53,
    HEAVY_DRIZZLE = 55,
    LIGHT_RAIN = 61,
    MODERATE_RAIN = 63,
    HEAVY_RAIN = 65,
    LIGHT_THUNDERSTORM = 80,
    MODERATE_THUNDERSTORM = 81,
    HEAVY_THUNDERSTORM = 82,
    SEVERE_THUNDERSTORM = 95,
    EXTREME_THUNDERSTORM = 96,
    CATASTROPHIC_THUNDERSTORM = 99,
  }
  
  export const WeatherIconMap: Record<WeatherCode, string> = {
    [WeatherCode.SUNNY]: 'sol.png',
    [WeatherCode.CLEAR]: 'sol.png',
    [WeatherCode.PARTLY_CLOUDY]: 'sol-nuvem.png',
    [WeatherCode.CLOUDY]: 'nublado.png',
    [WeatherCode.LIGHT_DRIZZLE]: 'chuva.png',
    [WeatherCode.MODERATE_DRIZZLE]: 'chuva.png',
    [WeatherCode.HEAVY_DRIZZLE]: 'chuva.png',
    [WeatherCode.LIGHT_RAIN]: 'chuva.png',
    [WeatherCode.MODERATE_RAIN]: 'chuva.png',
    [WeatherCode.HEAVY_RAIN]: 'chuva.png',
    [WeatherCode.LIGHT_THUNDERSTORM]: 'tempestade.png',
    [WeatherCode.MODERATE_THUNDERSTORM]: 'tempestade.png',
    [WeatherCode.HEAVY_THUNDERSTORM]: 'tempestade.png',
    [WeatherCode.SEVERE_THUNDERSTORM]: 'tempestade.png',
    [WeatherCode.EXTREME_THUNDERSTORM]: 'tempestade.png',
    [WeatherCode.CATASTROPHIC_THUNDERSTORM]: 'tempestade.png',
  };
  
  export function getWeatherIcon(weatherCode: number): string {
    return WeatherIconMap[weatherCode as WeatherCode] || 'default.png';
  }
  