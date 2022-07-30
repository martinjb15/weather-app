import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OWAPIService {

  constructor(private http: HttpClient) {}

    getWeather(location:any){
      return this.http.get(
        // could've put the api key in enviorment.ts
          'https://api.openweathermap.org/data/2.5/weather?q='+ "London" + '&appid=6e499dd3342bc36003ad9c03d22091c4&units=metric'
      );
    }

    getWeatherFourteenDays(location:any){
      return this.http.get(
        // could've put the api key in enviorment.ts
          'https://api.openweathermap.org/data/2.5/forecast?q='+"london" + '&cnt=14&appid=6e499dd3342bc36003ad9c03d22091c4&units=metric'
      );
    }
}
//put this in its own folder next time
