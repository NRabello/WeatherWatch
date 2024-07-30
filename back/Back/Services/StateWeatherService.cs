using Back.Domains;
using System.Text.Json;

namespace Back.Services
{
    public class StateWeatherService
    {
        const string OpenMeteoApi = "https://api.open-meteo.com/v1/forecast?latitude=-10.0698873031528,-9.57134730882353,0.598730235452104,-2.66383002531646,-12.8665416071429,-3.7227087893996957,-15.8306864235294,-20.2904837375,-16.6401914035088,-2.64948708695652,-15.4192367892473,-20.9888304085779,-19.89934440553,-1.34341115730337,-7.17088079054054,-25.5039452727273,-8.01174893798449,-5.30175149044123,-22.9200789659259,-5.81010314606742,-30.1146152816901,-9.20787381902655,3.18860584770115,-27.6145490686274,-23.6270250218409,-10.9823201066667,-10.1159159190031&longitude=-68.1553189652383,-35.689940125,-50.7684880295434,-60.1349985341773,-38.4858245436508,-38.524653911590576,-47.6127123741176,-40.28808355,-49.2599303421053,-44.3044137934783,-55.8902303225807,-54.2124173190368,-43.957039235023,-48.4181633426966,-34.865362222973,-49.2908182997543,-34.9529089612403,-42.8484913806695,-43.3306870118518,-35.2267439775281,-51.1639303485916,-64.3106419300883,-60.6121223362069,-48.5011593509804,-46.6350328065523,-37.1033298133333,-48.0776984501557&current=temperature_2m,weather_code&timezone=America%2FSao_Paulo";

        public async Task<List<StateWeatherData>> GetAllStates()
        {
            try
            {
                using (var client = new HttpClient())
                {

                    var response = await client.GetAsync(OpenMeteoApi);
                    response.EnsureSuccessStatusCode();

                    var jsonResponse = await response.Content.ReadAsStringAsync();
                    var stateWeatherResponse = JsonSerializer.Deserialize<List<StateWeatherData>>(jsonResponse, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });

                    return stateWeatherResponse ?? throw new Exception("Deserialization Failed, StateWeatherResponse is null");
                }

            }
            catch (Exception e)
            {
                throw new Exception($"Erro: {e.Message}");
            }
        }
    }
}
