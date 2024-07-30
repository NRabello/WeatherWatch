using System.Text.Json;
using Back.Domains;

namespace Back.Services
{
    public class WeatherService
    {
        const string OpenMeteoApi = "https://api.open-meteo.com/v1/forecast?current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_hours,precipitation_probability_max,wind_speed_10m_max&timezone=America%2FSao_Paulo";


        public async Task<WeatherResponse> GetData(string lat, string lng)
        {
            try { 
                using (var client = new HttpClient()) {

                    var CompleteApi = OpenMeteoApi + $"&latitude={lat}&longitude={lng}";

                    var response = await client.GetAsync(CompleteApi);
                    response.EnsureSuccessStatusCode();

                    var jsonResponse = await response.Content.ReadAsStringAsync();
                    var weatherResponse = JsonSerializer.Deserialize<WeatherResponse>(jsonResponse, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });

                    return weatherResponse ?? throw new Exception("Deserialization Failed, WeatherResponse is null");
                }

            } catch(Exception e) {
                throw new Exception($"Erro: {e.Message}");
            }
        
        }
            
    }
}
