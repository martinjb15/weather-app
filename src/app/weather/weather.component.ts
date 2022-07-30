import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OWAPIService } from "../owapi.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData: any;
  constructor(private formBuilder: FormBuilder, private owapiService:OWAPIService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']

    });
     this.owapiService
     .getWeather(location)
     .subscribe(data => this.weatherData = data)
     console.log(this.weatherData);
  }

  // click to retrieve open weather information
  // Remve as search is not in scope
 // sendToOWAPI(formValues : any) {
  //  this.owapiService
   //   .getWeather(formValues.location)
   //   .subscribe(data => this.weatherData = data)
   //   console.log(this.weatherData);


}
