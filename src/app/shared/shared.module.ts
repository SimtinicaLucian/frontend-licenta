import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';



import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


import { HighchartsChartModule } from 'highcharts-angular';

import { PieComponent } from '../shared/pie/pie.component';

@NgModule({
  declarations: [

    PieComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [

    PieComponent
  ]
})
export class SharedModule { }
