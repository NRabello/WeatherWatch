import { CurrentUnits } from './CurrentUnits';
import { CurrentWeather } from './CurrentWeather';
import { DailyUnits } from './DailyUnits';
import { DailyWeather } from './DailyWeather';

export interface IWeatherResponse {
    latitude?: number;
    longitude?: number;
    generationTimeMs?: number;
    utcOffsetSeconds?: number;
    timezone?: string;
    timezoneAbbreviation?: string;
    elevation?: number;
    currentUnits?: CurrentUnits;
    current?: CurrentWeather;
    dailyUnits?: DailyUnits;
    daily?: DailyWeather;
  }
  
  export class WeatherResponse {
    private _latitude: number;
    private _longitude: number;
    private _generationTimeMs: number;
    private _utcOffsetSeconds: number;
    private _timezone: string;
    private _timezoneAbbreviation: string;
    private _elevation: number;
    private _currentUnits: CurrentUnits;
    private _current: CurrentWeather;
    private _dailyUnits: DailyUnits;
    private _daily: DailyWeather;
  
    constructor({
      latitude = 0,
      longitude = 0,
      generationTimeMs = 0,
      utcOffsetSeconds = 0,
      timezone = "",
      timezoneAbbreviation = "",
      elevation = 0,
      currentUnits = new CurrentUnits({}),
      current = new CurrentWeather({}),
      dailyUnits = new DailyUnits({}),
      daily = new DailyWeather({}),
    }: IWeatherResponse) {
      this._latitude = latitude;
      this._longitude = longitude;
      this._generationTimeMs = generationTimeMs;
      this._utcOffsetSeconds = utcOffsetSeconds;
      this._timezone = timezone;
      this._timezoneAbbreviation = timezoneAbbreviation;
      this._elevation = elevation;
      this._currentUnits = currentUnits;
      this._current = current;
      this._dailyUnits = dailyUnits;
      this._daily = daily;
    }
  
    get latitude(): number {
      return this._latitude;
    }
  
    set latitude(value: number) {
      this._latitude = value;
    }
  
    get longitude(): number {
      return this._longitude;
    }
  
    set longitude(value: number) {
      this._longitude = value;
    }
  
    get generationTimeMs(): number {
      return this._generationTimeMs;
    }
  
    set generationTimeMs(value: number) {
      this._generationTimeMs = value;
    }
  
    get utcOffsetSeconds(): number {
      return this._utcOffsetSeconds;
    }
  
    set utcOffsetSeconds(value: number) {
      this._utcOffsetSeconds = value;
    }
  
    get timezone(): string {
      return this._timezone;
    }
  
    set timezone(value: string) {
      this._timezone = value;
    }
  
    get timezoneAbbreviation(): string {
      return this._timezoneAbbreviation;
    }
  
    set timezoneAbbreviation(value: string) {
      this._timezoneAbbreviation = value;
    }
  
    get elevation(): number {
      return this._elevation;
    }
  
    set elevation(value: number) {
      this._elevation = value;
    }
  
    get currentUnits(): CurrentUnits {
      return this._currentUnits;
    }
  
    set currentUnits(value: CurrentUnits) {
      this._currentUnits = value;
    }
  
    get current(): CurrentWeather {
      return this._current;
    }
  
    set current(value: CurrentWeather) {
      this._current = value;
    }
  
    get dailyUnits(): DailyUnits {
      return this._dailyUnits;
    }
  
    set dailyUnits(value: DailyUnits) {
      this._dailyUnits = value;
    }
  
    get daily(): DailyWeather {
      return this._daily;
    }
  
    set daily(value: DailyWeather) {
      this._daily = value;
    }
  
    toJSON() {
      return {
        latitude: this._latitude,
        longitude: this._longitude,
        generationTimeMs: this._generationTimeMs,
        utcOffsetSeconds: this._utcOffsetSeconds,
        timezone: this._timezone,
        timezoneAbbreviation: this._timezoneAbbreviation,
        elevation: this._elevation,
        currentUnits: this._currentUnits.toJSON(),
        current: this._current.toJSON(),
        dailyUnits: this._dailyUnits.toJSON(),
        daily: this._daily.toJSON(),
      };
    }
  
    static fromJSON(data: IWeatherResponse): WeatherResponse {
      return new WeatherResponse({
        latitude: data.latitude,
        longitude: data.longitude,
        generationTimeMs: data.generationTimeMs,
        utcOffsetSeconds: data.utcOffsetSeconds,
        timezone: data.timezone,
        timezoneAbbreviation: data.timezoneAbbreviation,
        elevation: data.elevation,
        currentUnits: CurrentUnits.fromJSON(data.currentUnits ? data.currentUnits : {}),
        current: CurrentWeather.fromJSON(data.current ? data.current : {}),
        dailyUnits: DailyUnits.fromJSON(data.dailyUnits ? data.dailyUnits : {}),
        daily: DailyWeather.fromJSON(data.daily ? data.daily : {}), 
      });
    }
  }
  