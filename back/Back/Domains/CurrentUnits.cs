using System.Text.Json.Serialization;

namespace Back.Domains
{
    public class CurrentUnits
    {
        [JsonInclude]
        private string Time { get; set; } = string.Empty;
        [JsonInclude]
        private string Interval { get; set; } = string.Empty;
        [JsonPropertyName("temperature_2m")]
        [JsonInclude]
        private string Temperature2m { get; set; } = string.Empty;
        [JsonPropertyName("relative_humidity_2m")]
        [JsonInclude]
        private string RelativeHumidity2m { get; set; } = string.Empty;
        [JsonPropertyName("apparent_temperature")]
        [JsonInclude]
        private string ApparentTemperature { get; set; } = string.Empty;
        [JsonPropertyName("is_day")]
        [JsonInclude]
        private string IsDay { get; set; } = string.Empty;
        [JsonInclude]
        private string Precipitation { get; set; } = string.Empty;
        [JsonInclude]
        private string Rain { get; set; } = string.Empty;
        [JsonPropertyName("weather_code")]
        [JsonInclude]
        private string WeatherCode { get; set; } = string.Empty;
        [JsonPropertyName("wind_speed_10m")]
        [JsonInclude]
        private string WindSpeed10m { get; set; } = string.Empty;

        public CurrentUnits() 
        { 
        }

        public CurrentUnits(string time, string interval, string temperature2m, string relativeHumidity2m, string apparentTemperature, string isDay, string precipitation, string rain, string weatherCode, string windSpeed10m)
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
