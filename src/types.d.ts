export interface ApiCountries {
  name: string;
  alpha3Code: string;
}

export interface ApiCountry {
  name: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  area: number;
  alpha3Code: string;
  borders: Borders[];
}

export interface Borders {
  name: string;
}

export interface Data {
  author: string;
  message: string;
}

export interface Messages {
  author: string;
  message: string;
  _id: string;
  datetime: string;
}