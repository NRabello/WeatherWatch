using System.Text.Json.Serialization;

namespace Back.Domains
{
    public class CurrentWeather
    {
        [JsonInclude]
        private DateTime Time { get; set; }
        [JsonInclude]
        private int Interval { get; set; }
        [JsonInclude]
        [JsonPropertyName("temperature_2m")]
        private double Temperature2m { get; set; }
        [JsonInclude]
        [JsonPropertyName("relative_humidity_2m")]
        private int RelativeHumidity2m { get; set; }
        [JsonInclude]
        [JsonPropertyName("apparent_temperature")]
        private double ApparentTemperature { get; set; }
        [JsonInclude]
        [JsonPropertyName("is_day")]
        private int IsDay { get; set; }
        [JsonInclude]
        private double Precipitation { get; set; }
        [JsonInclude]
        private double Rain { get; set; }
        [JsonInclude]
        [JsonPropertyName("weather_code")]
        private int WeatherCode { get; set; }
        [JsonInclude]
        [JsonPropertyName("wind_speed_10m")]
        private double WindSpeed10m { get; set; }

        public CurrentWeather() { 
        }

        public CurrentWeather(DateTime time, int interval, double temperature2m, int relativeHumidity2m, double apparentTemperature, int isDay, double precipitation, double rain, int weatherCode, double windSpeed10m)
        {
            Time = time;
            Interval = interval;
            Temperature2m = temperature2m;
            RelativeHumidity2m = relativeHumidity2m;
            ApparentTemperature = apparentTemperature;
            IsDay = isDay;
            Precipitation = precipitation;
            Rain = rain;
            WeatherCode = weatherCode;
            WindSpeed10m = windSpeed10m;
        }
    }
}
