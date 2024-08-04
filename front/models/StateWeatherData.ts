import { CurrentUnits } from "./CurrentUnits";
import { CurrentWeather } from "./CurrentWeather";

export interface IStateWeatherData {
    latitude: number;
    longitude: number;
    generationTimeMs: number;
    utcOffsetSeconds: number;
    timezone: string;
    timezoneAbbreviation: string;
    elevation: number;
    currentUnits: CurrentUnits;
    current: CurrentWeather;
  }
  
  export class StateWeatherData{
    private _latitude: number;
    private _longitude: number;
    private _generationTimeMs: number;
    private _utcOffsetSeconds: number;
    private _timezone: string;
    private _timezoneAbbreviation: string;
    private _elevation: number;
    private _currentUnits: CurrentUnits;
    private _current: CurrentWeather;
  
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
    }: IStateWeatherData) {
      this._latitude = latitude;
      this._longitude = longitude;
      this._generationTimeMs = generationTimeMs;
      this._utcOffsetSeconds = utcOffsetSeconds;
      this._timezone = timezone;
      this._timezoneAbbreviation = timezoneAbbreviation;
      this._elevation = elevation;
      this._currentUnits = currentUnits;
      this._current = current;
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
  }