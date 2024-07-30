using System.Text.Json.Serialization;

namespace Back.Domains
{
    public class DailyWeather
    {
        [JsonInclude]
        private List<DateTime> Time { get; set; } = new List<DateTime>();
        [JsonPropertyName("weather_code")]
        [JsonInclude]
        private List<int> WeatherCode { get; set; } = new List<int>();  
        [JsonPropertyName("temperature_2m_max")]
        [JsonInclude]
        private List<double> Temperature2mMax { get; set; } = new List<double>();
        [JsonPropertyName("temperature_2m_min")]
        [JsonInclude]
        private List<double> Temperature2mMin { get; set; } = new List<double>();
        [JsonInclude]
        private List<DateTime> Sunrise { get; set; } = new List<DateTime>();
        [JsonInclude]
        private List<DateTime> Sunset { get; set; } = new List<DateTime>();
        [JsonPropertyName("daylight_duration")]
        [JsonInclude]
        private List<double> DaylightDuration { get; set; } = new List<double>();
        [JsonPropertyName("uv_index_max")]
        [JsonInclude]
        private List<double> UvIndexMax { get; set; } = new List<double>();
        [JsonPropertyName("precipitation_hours")]
        [JsonInclude]
        private List<double> PrecipitationHours { get; set; } = new List<double>();
        [JsonPropertyName("precipitation_probability_max")]
        [JsonInclude]
        private List<int> PrecipitationProbabilityMax { get; set; } = new List<int>();
        [JsonPropertyName("wind_speed_10m_max")]
        [JsonInclude]
        private List<double> WindSpeed10mMax { get; set; } = new List<double>();

        public DailyWeather()
        {
        }

        public DailyWeather(List<DateTime> time, List<int> weatherCode, List<double> temperature2mMax, List<double> temperature2mMin, List<DateTime> sunrise, List<DateTime> sunset, List<double> daylightDuration, List<double> uvIndexMax, List<double> precipitationHours, List<int> precipitationProbabilityMax, List<double> windSpeed10mMax)
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
