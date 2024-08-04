export interface ICurrentWeather {
    time?: Date;
    interval?: number;
    temperature_2m?: number;
    relativeHumidity2m?: number;
    apparentTemperature?: number;
    isDay?: number;
    precipitation?: number;
    rain?: number;
    weather_code?: number;
    windSpeed10m?: number;
  }
  
  export class CurrentWeather implements ICurrentWeather {
    private _time: Date;
    private _interval: number;
    private _temperature_2m: number;
    private _relativeHumidity2m: number;
    private _apparentTemperature: number;
    private _isDay: number;
    private _precipitation: number;
    private _rain: number;
    private _weather_code: number;
    private _windSpeed10m: number;
  
    constructor({
        time = new Date(),
        interval = 0,
        temperature_2m = 0,
        relativeHumidity2m = 0,
        apparentTemperature = 0,
        isDay = 0,
        precipitation = 0,
        rain = 0,
        weather_code = 0,
        windSpeed10m = 0,
    }: ICurrentWeather) {
      this._time = time;
      this._interval = interval;
      this._temperature_2m = temperature_2m;
      this._relativeHumidity2m = relativeHumidity2m;
      this._apparentTemperature = apparentTemperature;
      this._isDay = isDay;
      this._precipitation = precipitation;
      this._rain = rain;
      this._weather_code = weather_code;
      this._windSpeed10m = windSpeed10m;
    }
  
    get time(): Date {
      return this._time;
    }
  
    set time(value: Date) {
      this._time = value;
    }
  
    get interval(): number {
      return this._interval;
    }
  
    set interval(value: number) {
      this._interval = value;
    }
  
    get temperature_2m(): number {
      return this._temperature_2m;
    }
  
    set temperature_2m(value: number) {
      this._temperature_2m = value;
    }
  
    get relativeHumidity2m(): number {
      return this._relativeHumidity2m;
    }
  
    set relativeHumidity2m(value: number) {
      this._relativeHumidity2m = value;
    }
  
    get apparentTemperature(): number {
      return this._apparentTemperature;
    }
  
    set apparentTemperature(value: number) {
      this._apparentTemperature = value;
    }
  
    get isDay(): number {
      return this._isDay;
    }
  
    set isDay(value: number) {
      this._isDay = value;
    }
  
    get precipitation(): number {
      return this._precipitation;
    }
  
    set precipitation(value: number) {
      this._precipitation = value;
    }
  
    get rain(): number {
      return this._rain;
    }
  
    set rain(value: number) {
      this._rain = value;
    }
  
    get weather_code(): number {
      return this._weather_code;
    }
  
    set weather_code(value: number) {
      this._weather_code = value;
    }
  
    get windSpeed10m(): number {
      return this._windSpeed10m;
    }
  
    set windSpeed10m(value: number) {
      this._windSpeed10m = value;
    }

    toJSON() {
      return {
        time: this.time,
        interval: this.interval,
        temperature_2m: this.temperature_2m,
        relativeHumidity2m: this.relativeHumidity2m,
        apparentTemperature: this.apparentTemperature,
        isDay: this.isDay,
        precipitation: this.precipitation,
        rain: this.rain,
        weather_code: this.weather_code,
        windSpeed10m: this.windSpeed10m,
      };
    }

    static fromJSON(data: ICurrentWeather): CurrentWeather {
      return new CurrentWeather(data)
    }
  }