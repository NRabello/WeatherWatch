using System.Text.Json.Serialization;

namespace Back.Domains
{
    public class StateWeatherData
    {
            [JsonInclude]
            private double Latitude { get; set; }

            [JsonInclude]
            private double Longitude { get; set; }

            [JsonPropertyName("generationtime_ms")]
            [JsonInclude]
            private double GenerationTimeMs { get; set; }

            [JsonPropertyName("utc_offset_seconds")]
            [JsonInclude]
            private int UtcOffsetSeconds { get; set; }

            [JsonInclude]
            private string Timezone { get; set; } = string.Empty;

            [JsonPropertyName("timezone_abbreviation")]
            [JsonInclude]
            private string TimezoneAbbreviation { get; set; } = string.Empty;

            [JsonInclude]
            private double Elevation { get; set; }

            [JsonPropertyName("current_units")]
            [JsonInclude]
            private CurrentUnits CurrentUnits { get; set; } = new CurrentUnits();

            [JsonInclude]
            private CurrentWeather Current { get; set; } = new CurrentWeather();

            public StateWeatherData()
            {
            }

            public StateWeatherData(double latitude, double longitude, double generationTimeMs, int utcOffsetSeconds, string timezone, string timezoneAbbreviation, double elevation, CurrentUnits currentUnits, CurrentWeather current)
            {
                Latitude = latitude;
                Longitude = longitude;
                GenerationTimeMs = generationTimeMs;
                UtcOffsetSeconds = utcOffsetSeconds;
                Timezone = timezone;
                TimezoneAbbreviation = timezoneAbbreviation;
                Elevation = elevation;
                CurrentUnits = currentUnits;
                Current = current;
            }
        }
    }
