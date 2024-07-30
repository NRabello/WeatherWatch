using System.Text.Json.Serialization;

namespace Back.Domains
{
    public class DailyUnits
    {
        [JsonInclude]
        private string Time { get; set; } = string.Empty;
        [JsonInclude]
        [JsonPropertyName("weather_code")]
        private string WeatherCode { get; set; } = string.Empty;
        [JsonInclude]
        [JsonPropertyName("temperature_2m_max")]
        private string Temperature2mMax { get; set; } = string.Empty;
        [JsonInclude]
        [JsonPropertyName("temperature_2m_min")]
        private string Temperature2mMin { get; set; } = string.Empty;
        [JsonInclude]
        private string Sunrise { get; set; } = string.Empty;
        [JsonInclude]
        private string Sunset { get; set; } = string.Empty;
        [JsonPropertyName("daylight_duration")]
        [JsonInclude]
        private string DaylightDuration { get; set; } = string.Empty;
        [JsonPropertyName("uv_index_max")]
        [JsonInclude]
        private string UvIndexMax { get; set; } = string.Empty;
        [JsonInclude]
        [JsonPropertyName("precipitation_hours")]
        private string PrecipitationHours { get; set; } = string.Empty;
        [JsonPropertyName("precipitation_probability_max")]
        [JsonInclude]
        private string PrecipitationProbabilityMax { get; set; } = string.Empty;
        [JsonInclude]
        [JsonPropertyName("wind_speed_10m_max")]
        private string WindSpeed10mMax { get; set; } = string.Empty;

        public DailyUnits()
        {
        }

        public DailyUnits(string time, string weatherCode, string temperature2mMax, string temperature2mMin, string sunrise, string sunset, string daylightDuration, string uvIndexMax, string precipitationHours, string precipitationProbabilityMax, string windSpeed10mMax)
        {
            Time = time;
            WeatherCode = weatherCode;
            Temperature2mMax = temperature2mMax;
            Temperature2mMin = temperature2mMin;
            Sunrise = sunrise;
            Sunset = sunset;
            DaylightDuration = daylightDuration;
            UvIndexMax = uvIndexMax;
            PrecipitationHours = precipitationHours;
            PrecipitationProbabilityMax = precipitationProbabilityMax;
            WindSpeed10mMax = windSpeed10mMax;
        }
    }
}
