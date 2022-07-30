import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OWAPIService } from "../owapi.service";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
 // public weatherSearchForm!: FormGroup;
  public weatherData: any;
  constructor(private owapiService:OWAPIService) { }

  ngOnInit(): void {
  //  this.weatherSearchForm = this.formBuilder.group({
   //   location: ['']
    //});
    this.owapiService
      .getWeatherFourteenDays(location)
      .subscribe(data => this.weatherData = data)
      console.log(this.weatherData);
  }

}
