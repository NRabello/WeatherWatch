export interface ICurrentWeather {
    time?: Date;
    interval?: number;
    temperature_2m?: number;
    relative_humidity_2m?: number;
    apparent_temperature?: number;
    isDay?: number;
    precipitation?: number;
    rain?: number;
    weather_code?: number;
    wind_speed_10m?: number;
  }
  
  export class CurrentWeather{
    private _time: Date;
    private _interval: number;
    private _temperature_2m: number;
    private _relative_humidity_2m: number;
    private _apparent_temperature: number;
    private _isDay: number;
    private _precipitation: number;
    private _rain: number;
    private _weather_code: number;
    private _wind_speed_10m: number;
  
    constructor({
        time = new Date(),
        interval = 0,
        temperature_2m = 0,
        relative_humidity_2m = 0,
        apparent_temperature = 0,
        isDay = 0,
        precipitation = 0,
        rain = 0,
        weather_code = 0,
        wind_speed_10m = 0,
    }: ICurrentWeather) {
      this._time = time;
      this._interval = interval;
      this._temperature_2m = temperature_2m;
      this._relative_humidity_2m = relative_humidity_2m;
      this._apparent_temperature = apparent_temperature;
      this._isDay = isDay;
      this._precipitation = precipitation;
      this._rain = rain;
      this._weather_code = weather_code;
      this._wind_speed_10m = wind_speed_10m;
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
  
    get relative_humidity_2m(): number {
      return this._relative_humidity_2m;
    }
  
    set relative_humidity_2m(value: number) {
      this._relative_humidity_2m = value;
    }
  
    get apparent_temperature(): number {
      return this._apparent_temperature;
    }
  
    set apparent_temperature(value: number) {
      this._apparent_temperature = value;
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
  
    get wind_speed_10m(): number {
      return this._wind_speed_10m;
    }
  
    set wind_speed_10m(value: number) {
      this._wind_speed_10m = value;
    }

    toJSON() {
      return {
        time: this.time,
        interval: this.interval,
        temperature_2m: this.temperature_2m,
        relative_humidity_2m: this.relative_humidity_2m,
        apparent_temperature: this.apparent_temperature,
        isDay: this.isDay,
        precipitation: this.precipitation,
        rain: this.rain,
        weather_code: this.weather_code,
        wind_speed_10m: this.wind_speed_10m,
      };
    }

    static fromJSON(data: ICurrentWeather): CurrentWeather {
      return new CurrentWeather({
        time: data.time,
        interval: data.interval,
        temperature_2m: data.temperature_2m,
        relative_humidity_2m: data.relative_humidity_2m,
        apparent_temperature: data.apparent_temperature,
        isDay: data.isDay,
        precipitation: data.precipitation,
        rain: data.rain,
        weather_code: data.weather_code,
        wind_speed_10m: data.wind_speed_10m,
      });
    }
  }