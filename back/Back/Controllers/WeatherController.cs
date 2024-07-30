using Microsoft.AspNetCore.Mvc;
using Back.Domains;
using Back.Services;

namespace Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly WeatherService _weatherService;

        public WeatherController(WeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet("find", Name = "GetWeather")]
        public async Task<ActionResult<WeatherResponse>> GetWeather(string lat, string lng)
        {
            try
            {
                WeatherResponse weatherResponse = await _weatherService.GetData(lat, lng);
                return Ok(weatherResponse);
            }
            catch (Exception e) {
                return BadRequest($"Erro: {e.Message}");
            }
        }
    }
}
