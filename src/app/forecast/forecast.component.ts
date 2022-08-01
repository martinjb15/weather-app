import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OWAPIService } from "../owapi.service";
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  public weatherData: any;
//add dates for the forcast
  date1: Date | any;
  date2: Date | any;
  date3: Date | any;
  date4: Date | any;
  date5: Date | any;
  date6: Date | any;
  constructor(private owapiService:OWAPIService) { }

  ngOnInit(): void {

    this.date1 = new Date();
    this.date1.setDate( this.date1.getDate() +1 );
    this.date2 = new Date();
    this.date2.setDate( this.date2.getDate() +2 );
    this.date3 = new Date();
    this.date3.setDate( this.date3.getDate() +3 );
    this.date4 = new Date();
    this.date4.setDate( this.date4.getDate() +4 );
    this.date5 = new Date();
    this.date5.setDate( this.date5.getDate() +5 );
    this.date6 = new Date();
    this.date6.setDate( this.date6.getDate() +6 );

    //get set the data for the api call
    this.owapiService
      .getWeatherFourteenDays(location)
      .subscribe(data => { this.weatherData = data})

      console.log(this.weatherData);


  }

}
