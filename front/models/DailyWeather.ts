export interface IDailyWeather {
    time?: Date[];
    weatherCode?: number[];
    temperature2mMax?: number[];
    temperature2mMin?: number[];
    sunrise?: Date[];
    sunset?: Date[];
    daylightDuration?: number[];
    uvIndexMax?: number[];
    precipitationHours?: number[];
    precipitationProbabilityMax?: number[];
    windSpeed10mMax?: number[];
  }
  
  export class DailyWeather {
    private _time: Date[];
    private _weatherCode: number[];
    private _temperature2mMax: number[];
    private _temperature2mMin: number[];
    private _sunrise: Date[];
    private _sunset: Date[];
    private _daylightDuration: number[];
    private _uvIndexMax: number[];
    private _precipitationHours: number[];
    private _precipitationProbabilityMax: number[];
    private _windSpeed10mMax: number[];
  
    constructor({
      time = [],
      weatherCode = [],
      temperature2mMax = [],
      temperature2mMin = [],
      sunrise = [],
      sunset = [],
      daylightDuration = [],
      uvIndexMax = [],
      precipitationHours = [],
      precipitationProbabilityMax = [],
      windSpeed10mMax = [],
    }: IDailyWeather) {
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
  
    get time(): Date[] {
      return this._time;
    }
  
    set time(value: Date[]) {
      this._time = value;
    }
  
    get weatherCode(): number[] {
      return this._weatherCode;
    }
  
    set weatherCode(value: number[]) {
      this._weatherCode = value;
    }
  
    get temperature2mMax(): number[] {
      return this._temperature2mMax;
    }
  
    set temperature2mMax(value: number[]) {
      this._temperature2mMax = value;
    }
  
    get temperature2mMin(): number[] {
      return this._temperature2mMin;
    }
  
    set temperature2mMin(value: number[]) {
      this._temperature2mMin = value;
    }
  
    get sunrise(): Date[] {
      return this._sunrise;
    }
  
    set sunrise(value: Date[]) {
      this._sunrise = value;
    }
  
    get sunset(): Date[] {
      return this._sunset;
    }
  
    set sunset(value: Date[]) {
      this._sunset = value;
    }
  
    get daylightDuration(): number[] {
      return this._daylightDuration;
    }
  
    set daylightDuration(value: number[]) {
      this._daylightDuration = value;
    }
  
    get uvIndexMax(): number[] {
      return this._uvIndexMax;
    }
  
    set uvIndexMax(value: number[]) {
      this._uvIndexMax = value;
    }
  
    get precipitationHours(): number[] {
      return this._precipitationHours;
    }
  
    set precipitationHours(value: number[]) {
      this._precipitationHours = value;
    }
  
    get precipitationProbabilityMax(): number[] {
      return this._precipitationProbabilityMax;
    }
  
    set precipitationProbabilityMax(value: number[]) {
      this._precipitationProbabilityMax = value;
    }
  
    get windSpeed10mMax(): number[] {
      return this._windSpeed10mMax;
    }
  
    set windSpeed10mMax(value: number[]) {
      this._windSpeed10mMax = value;
    }

    toJSON() {
        return {
          time: this._time.map(date => date.toISOString()),
          weatherCode: this._weatherCode,
          temperature2mMax: this._temperature2mMax,
          temperature2mMin: this._temperature2mMin,
          sunrise: this._sunrise.map(date => date.toISOString()),
          sunset: this._sunset.map(date => date.toISOString()),
          daylightDuration: this._daylightDuration,
          uvIndexMax: this._uvIndexMax,
          precipitationHours: this._precipitationHours,
          precipitationProbabilityMax: this._precipitationProbabilityMax,
          windSpeed10mMax: this._windSpeed10mMax,
        };
      }
    
      static fromJSON(data: IDailyWeather): DailyWeather {
        return new DailyWeather({
          time: data.time?.map(date => new Date(date)),
          weatherCode: data.weatherCode,
          temperature2mMax: data.temperature2mMax,
          temperature2mMin: data.temperature2mMin,
          sunrise: data.sunrise?.map(date => new Date(date)),
          sunset: data.sunset?.map(date => new Date(date)),
          daylightDuration: data.daylightDuration,
          uvIndexMax: data.uvIndexMax,
          precipitationHours: data.precipitationHours,
          precipitationProbabilityMax: data.precipitationProbabilityMax,
          windSpeed10mMax: data.windSpeed10mMax,
        });
      }
  }
  