using Back.Domains;
using Back.Services;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StateWeatherController: ControllerBase
    {
        private readonly StateWeatherService _stateWeatherService;

        public StateWeatherController(StateWeatherService stateWeatherService)
        {
            _stateWeatherService = stateWeatherService;
        }

        [HttpGet("getAllStates", Name = "GetAllStates")]
        public async Task<ActionResult<List<StateWeatherData>>> GetAllStates()
        {
            try
            {
                List<StateWeatherData> stateWeatherResponse = await _stateWeatherService.GetAllStates();
                return Ok(stateWeatherResponse);
            }
            catch (Exception e)
            {
                return BadRequest($"Erro: {e.Message}");
            }
        }
    }
}
