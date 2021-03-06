//PARKING 3 POLI 4
import { ChartistJsService3 } from './parking3/chartistJs3/chartistJs3.service';
import { ChartistJs3 } from './parking3/chartistJs3/chartistJs3.component';
import { PieChartService3 } from './parking3/pieChart3/pieChart3.service';
import { PieChart3 } from './parking3/pieChart3/pieChart3.component';
import { ZonaParking3 } from './parking3/zonaParking3/leafletMaps3.component';
import { Parking3 } from './parking3/parking3.component';
//PARKING 2 MUSEO
import { ChartistJsService2 } from './parking2/chartistJs2/chartistJs2.service';
import { ChartistJs2 } from './parking2/chartistJs2/chartistJs2.component';
import { PieChartService2 } from './parking2/pieChart2/pieChart2.service';
import { PieChart2 } from './parking2/pieChart2/pieChart2.component';
import { ZonaParking2 } from './parking2/zonaParking2/leafletMaps2.component';
import { Parking2 } from './parking2/parking2.component';
//PARKING 1 ECONOMIA
import { ChartistJsService } from './parking1/chartistJs/chartistJs.service';
import { ChartistJs } from './parking1/chartistJs/chartistJs.component';
import { PieChartService } from './parking1/pieChart/pieChart.service';
import { PieChart } from './parking1/pieChart/pieChart.component';
import { ZonaParking } from './parking1/zonaParking/leafletMaps.component';
import { Parking1 } from './parking1/parking1.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './uniAlicante.routing';
import { UniAlicante } from './uniAlicante.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),
    routing,
  ],
  declarations: [
    UniAlicante,
    //PARKING 1
    Parking1,
    ZonaParking,
    PieChart,
    ChartistJs,
    //PARKING 2
    Parking2,
    ZonaParking2,
    PieChart2,
    ChartistJs2,
    //PARKING 3
    Parking3,
    ZonaParking3,
    PieChart3,
    ChartistJs3,

  ],
  entryComponents: [
  ],
  providers: [
    //PARKING 1
    PieChartService,
    ChartistJsService,
    //PARKING 2
    PieChartService2,
    ChartistJsService2,
    //PARKING 3
    PieChartService3,
    ChartistJsService3,

  ],
})
export class UniAlicanteModule {
}

