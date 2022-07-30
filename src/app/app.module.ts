import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OWAPIService } from "./owapi.service";
import { ForecastComponent } from './forecast/forecast.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [OWAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
