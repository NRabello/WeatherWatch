export interface IDailyUnits {
    time?: string;
    weatherCode?: string;
    temperature2mMax?: string;
    temperature2mMin?: string;
    sunrise?: string;
    sunset?: string;
    daylightDuration?: string;
    uvIndexMax?: string;
    precipitationHours?: string;
    precipitationProbabilityMax?: string;
    windSpeed10mMax?: string;
  }
  
  export class DailyUnits {
    private _time: string;
    private _weatherCode: string;
    private _temperature2mMax: string;
    private _temperature2mMin: string;
    private _sunrise: string;
    private _sunset: string;
    private _daylightDuration: string;
    private _uvIndexMax: string;
    private _precipitationHours: string;
    private _precipitationProbabilityMax: string;
    private _windSpeed10mMax: string;
  
    constructor({
      time = "",
      weatherCode = "",
      temperature2mMax = "",
      temperature2mMin = "",
      sunrise = "",
      sunset = "",
      daylightDuration = "",
      uvIndexMax = "",
      precipitationHours = "",
      precipitationProbabilityMax = "",
      windSpeed10mMax = "",
    }: IDailyUnits) {
      this._time = time;
      this._weatherCode = weatherCode;
      this._temperature2mMax = temperature2mMax;
      this._temperature2mMin = temperature2mMin;
      this._sunrise = sunrise;
      this._sunset = sunset;
      this._daylightDuration = daylightDuration;
      this._uvIndexMax = uvIndexMax;
      this._precipitationHours = precipitationHours;
      this._precipitationProbabilityMax = precipitationProbabilityMax;
      this._windSpeed10mMax = windSpeed10mMax;
    }
  
    get time(): string {
      return this._time;
    }
  
    set time(value: string) {
      this._time = value;
    }
  
    get weatherCode(): string {
      return this._weatherCode;
    }
  
    set weatherCode(value: string) {
      this._weatherCode = value;
    }
  
    get temperature2mMax(): string {
      return this._temperature2mMax;
    }
  
    set temperature2mMax(value: string) {
      this._temperature2mMax = value;
    }
  
    get temperature2mMin(): string {
      return this._temperature2mMin;
    }
  
    set temperature2mMin(value: string) {
      this._temperature2mMin = value;
    }
  
    get sunrise(): string {
      return this._sunrise;
    }
  
    set sunrise(value: string) {
      this._sunrise = value;
    }
  
    get sunset(): string {
      return this._sunset;
    }
  
    set sunset(value: string) {
      this._sunset = value;
    }
  
    get daylightDuration(): string {
      return this._daylightDuration;
    }
  
    set daylightDuration(value: string) {
      this._daylightDuration = value;
    }
  
    get uvIndexMax(): string {
      return this._uvIndexMax;
    }
  
    set uvIndexMax(value: string) {
      this._uvIndexMax = value;
    }
  
    get precipitationHours(): string {
      return this._precipitationHours;
    }
  
    set precipitationHours(value: string) {
      this._precipitationHours = value;
    }
  
    get precipitationProbabilityMax(): string {
      return this._precipitationProbabilityMax;
    }
  
    set precipitationProbabilityMax(value: string) {
      this._precipitationProbabilityMax = value;
    }
  
    get windSpeed10mMax(): string {
      return this._windSpeed10mMax;
    }
  
    set windSpeed10mMax(value: string) {
      this._windSpeed10mMax = value;
    }

    toJSON() {
        return {
          time: this.time,
          weatherCode: this.weatherCode,
          temperature2mMax: this.temperature2mMax,
          temperature2mMin: this.temperature2mMin,
          sunrise: this.sunrise,
          sunset: this.sunset,
          daylightDuration: this.daylightDuration,
          uvIndexMax: this.uvIndexMax,
          precipitationHours: this.precipitationHours,
          precipitationProbabilityMax: this.precipitationProbabilityMax,
          windSpeed10mMax: this.windSpeed10mMax,
        };
      }
    
      static fromJSON(data: IDailyUnits): DailyUnits {
        return new DailyUnits(data);
      }
  }
  