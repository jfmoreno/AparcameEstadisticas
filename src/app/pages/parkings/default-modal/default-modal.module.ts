

//PARKING 1 ECONOMIA
import { PieChartService } from './pieChart1/pieChart.service';
import { ChartistJsService } from './chartistJs1/chartistJs.service';
import { ChartistJs } from './chartistJs1/chartistJs.component';
import { PieChart } from './pieChart1/pieChart.component';
import { ZonaParking1 } from './zonaParking1/leafletMaps.component';
import { DefaultModal } from './default-modal.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//import { routing } from './pEstadisticas.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),
    //routing,
  ],

  declarations: [
    //PARKING 1
    ZonaParking1,
    PieChart,
    ChartistJs,
    DefaultModal,
  ],

  entryComponents: [
  ],

  providers: [
    //PARKING 1
    PieChartService,
    ChartistJsService,
  ],
})
export class DefaultModalModule {
}

