using Back.Domains;
using System.Text.Json;

namespace Back.Services
{
    public class GeoService
    {
        const string GeoApi = "http://api.geonames.org/postalCodeSearchJSON?country=BR&username=nicrabello&maxRows=5";

        public async Task<GeoResponse> FilterCities(string filter)
        {
            try
            {
                using (var client = new HttpClient())
                {

                    var completeApi = GeoApi + "&placename_startsWith=" + filter;
                    var response = await client.GetAsync(completeApi);
                    response.EnsureSuccessStatusCode();

                    var jsonResponse = await response.Content.ReadAsStringAsync();
                    var geoResponse = JsonSerializer.Deserialize<GeoResponse>(jsonResponse, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });

                    return geoResponse ?? throw new Exception("Deserialization Failed, Geo is null");
                }

            }
            catch (Exception e)
            {
                throw new Exception($"Erro: {e.Message}");
            }

        }

        //public async Task<GeoResponse> GetByPostalCode(string postalCode)
        //{
        //    try
        //    {
        //        using (var client = new HttpClient())
        //        {

        //            var response = await client.GetAsync(GeoApi);
        //            response.EnsureSuccessStatusCode();

        //            var jsonResponse = await response.Content.ReadAsStringAsync();
        //            Console.WriteLine(jsonResponse);
        //            var geoResponse = JsonSerializer.Deserialize<GeoResponse>(jsonResponse, new JsonSerializerOptions
        //            {
        //                PropertyNameCaseInsensitive = true
        //            });

        //            return geoResponse ?? throw new Exception("Deserialization Failed, WeatherResponse is null");
        //        }

        //    }
        //    catch (Exception e)
        //    {
        //        throw new Exception($"Erro: {e.Message}");
        //    }
        //}
    }
}
