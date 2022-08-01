import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OWAPIService {

  constructor(private http: HttpClient) {}
// create 2 api calls in the sevice to get the current data then the daily data, due to data contrains they need to be seperate
    getWeather(location:any){
      return this.http.get(
        // could've put the api key in enviorment.ts
          'https://api.openweathermap.org/data/2.5/weather?q='+ "London" + '&appid=6e499dd3342bc36003ad9c03d22091c4&units=metric'
      );
    }

    getWeatherFourteenDays(location:any){
      return this.http.get(
        // could've put the api key in enviorment.ts
        // use london geo coordanates as required by api
          'https://api.openweathermap.org/data/2.5/onecall?lat=51.509865&lon=-0.118092&exclude=current,hourly,minutely,alerts&units=metric&appid=6e499dd3342bc36003ad9c03d22091c4'
         );
    }
}
