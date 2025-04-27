export interface IPostalInfo {
  adminCode2?: string;
  adminCode1?: string;
  adminName2?: string;
  lng?: number;
  countryCode?: string;
  postalCode?: string;
  adminName1?: string;
  'ISO3166-2'?: string;
  iso31662?: string;
  placeName?: string;
  lat?: number;
}


export class PostalInfo {
  private _adminCode2: string;
  private _adminCode1: string;
  private _adminName2: string;
  private _lng: number;
  private _countryCode: string;
  private _postalCode: string;
  private _adminName1: string;
  private _iso31662: string;
  private _placeName: string;
  private _lat: number;

  constructor({
    adminCode2 = "",
    adminCode1 = "",
    adminName2 = "",
    lng = 0,
    countryCode = "",
    postalCode = "",
    adminName1 = "",
    'ISO3166-2': ISO31662 = "",
    placeName = "",
    lat = 0,
  }: IPostalInfo) {
    this._adminCode2 = adminCode2;
    this._adminCode1 = adminCode1;
    this._adminName2 = adminName2;
    this._lng = lng;
    this._countryCode = countryCode;
    this._postalCode = postalCode;
    this._adminName1 = adminName1;
    this._iso31662 = ISO31662;
    this._placeName = placeName;
    this._lat = lat;
  }

  static empty(): PostalInfo {
    return new PostalInfo({});
  }

  get adminCode2(): string {
    return this._adminCode2;
  }

  set adminCode2(value: string) {
    this._adminCode2 = value;
  }

  get adminCode1(): string {
    return this._adminCode1;
  }

  set adminCode1(value: string) {
    this._adminCode1 = value;
  }

  get adminName2(): string {
    return this._adminName2;
  }

  set adminName2(value: string) {
    this._adminName2 = value;
  }

  get lng(): number {
    return this._lng;
  }

  set lng(value: number) {
    this._lng = value;
  }

  get countryCode(): string {
    return this._countryCode;
  }

  set countryCode(value: string) {
    this._countryCode = value;
  }

  get postalCode(): string {
    return this._postalCode;
  }

  set postalCode(value: string) {
    this._postalCode = value;
  }

  get adminName1(): string {
    return this._adminName1;
  }

  set adminName1(value: string) {
    this._adminName1 = value;
  }

  get iso31662(): string {
    return this._iso31662;
  }

  set iso31662(value: string) {
    this._iso31662 = value;
  }

  get placeName(): string {
    return this._placeName;
  }

  set placeName(value: string) {
    this._placeName = value;
  }

  get lat(): number {
    return this._lat;
  }

  set lat(value: number) {
    this._lat = value;
  }

  toJSON() {
    return {
      adminCode2: this.adminCode2,
      adminCode1: this.adminCode1,
      adminName2: this.adminName2,
      lng: this.lng,
      countryCode: this.countryCode,
      postalCode: this.postalCode,
      adminName1: this.adminName1,
      'ISO3166-2': this.iso31662,
      placeName: this.placeName,
      lat: this.lat,
    };
  }

  static fromJSON(data: IPostalInfo): PostalInfo {
    return new PostalInfo(data);
  }
}
