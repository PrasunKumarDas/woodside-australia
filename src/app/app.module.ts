import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';




import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { GraphDetailsService } from './services/graphdetails.service';


export function highchartsModules() {
  return [more];
}
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    Ng2CarouselamosModule,
    AlertModule.forRoot()
  ],
  providers: [GraphDetailsService, { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
  bootstrap: [AppComponent]
})
export class AppModule { }
