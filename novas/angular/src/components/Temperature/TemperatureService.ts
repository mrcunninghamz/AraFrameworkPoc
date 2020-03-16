import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<WeatherReport>("http://api.openweathermap.org/data/2.5/weather?zip=55330,us&units=Imperial&appid=158598f4d558094d49e907ff979977e8")
  }
}

export interface WeatherReport {
    main: Main;
    weather: Weather[];
}

export interface Main {
    temp: string;
}

export interface Weather {
    icon: string;
}