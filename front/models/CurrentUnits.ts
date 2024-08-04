export interface ICurrentUnits {
    time?: string;
    interval?: string;
    temperature2m?: string;
    relativeHumidity2m?: string;
    apparentTemperature?: string;
    isDay?: string;
    precipitation?: string;
    rain?: string;
    weather_code?: string;
    windSpeed10m?: string;
  }
  
  export class CurrentUnits implements ICurrentUnits {
    private _time: string;
    private _interval: string;
    private _temperature2m: string;
    private _relativeHumidity2m: string;
    private _apparentTemperature: string;
    private _isDay: string;
    private _precipitation: string;
    private _rain: string;
    private _weather_code: string;
    private _windSpeed10m: string;
  
    constructor({
        time = "",
        interval = "",
        temperature2m = "",
        relativeHumidity2m = "",
        apparentTemperature = "",
        isDay = "",
        precipitation = "",
        rain = "",
        weather_code = "",
        windSpeed10m = "",
    }: ICurrentUnits) {
      this._time = time;
      this._interval = interval;
      this._temperature2m = temperature2m;
      this._relativeHumidity2m = relativeHumidity2m;
      this._apparentTemperature = apparentTemperature;
      this._isDay = isDay;
      this._precipitation = precipitation;
      this._rain = rain;
      this._weather_code = weather_code;
      this._windSpeed10m = windSpeed10m;
    }
  
    get time(): string {
      return this._time;
    }
  
    set time(value: string) {
      this._time = value;
    }
  
    get interval(): string {
      return this._interval;
    }
  
    set interval(value: string) {
      this._interval = value;
    }
  
    get temperature2m(): string {
      return this._temperature2m;
    }
  
    set temperature2m(value: string) {
      this._temperature2m = value;
    }
  
    get relativeHumidity2m(): string {
      return this._relativeHumidity2m;
    }
  
    set relativeHumidity2m(value: string) {
      this._relativeHumidity2m = value;
    }
  
    get apparentTemperature(): string {
      return this._apparentTemperature;
    }
  
    set apparentTemperature(value: string) {
      this._apparentTemperature = value;
    }
  
    get isDay(): string {
      return this._isDay;
    }
  
    set isDay(value: string) {
      this._isDay = value;
    }
  
    get precipitation(): string {
      return this._precipitation;
    }
  
    set precipitation(value: string) {
      this._precipitation = value;
    }
  
    get rain(): string {
      return this._rain;
    }
  
    set rain(value: string) {
      this._rain = value;
    }
  
    get weather_code(): string {
      return this._weather_code;
    }
  
    set weather_code(value: string) {
      this._weather_code = value;
    }
  
    get windSpeed10m(): string {
      return this._windSpeed10m;
    }
  
    set windSpeed10m(value: string) {
      this._windSpeed10m = value;
    }

    toJSON() {
        return {
          time: this.time,
          interval: this.interval,
          temperature2m: this.temperature2m,
          relativeHumidity2m: this.relativeHumidity2m,
          apparentTemperature: this.apparentTemperature,
          isDay: this.isDay,
          precipitation: this.precipitation,
          rain: this.rain,
          weather_code: this.weather_code,
          windSpeed10m: this.windSpeed10m,
        };
      };

      static fromJSON(json: ICurrentUnits): CurrentUnits {
        return new CurrentUnits(json);
      }
  }