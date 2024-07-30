using System.Text.Json.Serialization;

namespace Back.Domains
{
    public class PostalInfo
    {
        [JsonPropertyName("adminCode2")]
        [JsonInclude]
        private string AdminCode2 { get; set; } = string.Empty;

        [JsonPropertyName("adminCode1")]
        [JsonInclude]
        private string AdminCode1 { get; set; } = string.Empty;

        [JsonPropertyName("adminName2")]
        [JsonInclude]
        private string AdminName2 { get; set; } = string.Empty;

        [JsonPropertyName("lng")]
        [JsonInclude]
        private double Longitude { get; set; }

        [JsonPropertyName("countryCode")]
        [JsonInclude]
        private string CountryCode { get; set; } = string.Empty;

        [JsonPropertyName("postalCode")]
        [JsonInclude]
        private string PostalCode { get; set; } = string.Empty;

        [JsonPropertyName("adminName1")]
        [JsonInclude]
        private string AdminName1 { get; set; } = string.Empty;

        [JsonPropertyName("ISO3166-2")]
        [JsonInclude]
        private string ISO31662 { get; set; } = string.Empty;

        [JsonPropertyName("placeName")]
        [JsonInclude]
        private string PlaceName { get; set; } = string.Empty;

        [JsonPropertyName("lat")]
        [JsonInclude]
        private double Latitude { get; set; }

        public PostalInfo()
        {
        }

        public PostalInfo(string adminCode2, string adminCode1, string adminName2, double longitude, string countryCode, string postalCode, string adminName1, string iso31662, string placeName, double latitude)
        {
            AdminCode2 = adminCode2;
            AdminCode1 = adminCode1;
            AdminName2 = adminName2;
            Longitude = longitude;
            CountryCode = countryCode;
            PostalCode = postalCode;
            AdminName1 = adminName1;
            ISO31662 = iso31662;
            PlaceName = placeName;
            Latitude = latitude;
        }
    }
}
