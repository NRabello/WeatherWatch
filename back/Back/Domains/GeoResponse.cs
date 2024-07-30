using System.Text.Json.Serialization;

namespace Back.Domains
{
    public class GeoResponse
    {
        [JsonPropertyName("postalCodes")]
        [JsonInclude]
        private List<PostalInfo> PostalCodes { get; set; } = new List<PostalInfo>();

        public GeoResponse()
        {
        }

        public GeoResponse(List<PostalInfo> postalCodes)
        {
            PostalCodes = postalCodes;
        }
    }
}
