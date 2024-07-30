using Back.Domains;
using Back.Services;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GeoController : ControllerBase
    {
        private readonly GeoService _geoService;

        public GeoController(GeoService geoService)
        {
            _geoService = geoService;
        }

        [HttpGet("FindByName", Name = "FindByName")]
        public async Task<ActionResult<GeoResponse>> FindByName([FromQuery] string filter)
        {
            try
            {
                GeoResponse geoResponse = await _geoService.FilterCities(filter);
                return Ok(geoResponse);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
