import { Routes } from '@angular/router'
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';

// create the routes for page routing

export const allAppRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'app-forecast', component: ForecastComponent},
  { path: 'app-weather', component: WeatherComponent}
];
