import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OWAPIService } from "../owapi.service";

// create weather component

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData: any;
  constructor(private owapiService:OWAPIService) { }

// search the service module return the data to display on the page

  ngOnInit(): void {
       this.owapiService
     .getWeather(location)
     .subscribe(data => this.weatherData = data)
     console.log(this.weatherData);
  }
}
