import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { IncasariService } from '../services/api/incasari.service';
import { Chart } from 'chart.js';
import { AdminService } from '../services/api/admin.service';
import { CheltuieliService } from '../services/api/cheltuieli.service';
import { NgForm } from '@angular/forms';
import { SelectorMatcher } from '@angular/compiler';
import { StatisticsService } from '../services/api/statistics.service';
import * as CanvasJS from 'src/assets/canvasjs.min.js';

import * as _moment from 'moment';

import {default as _rollupMoment} from 'moment'; 

import { MAT_DATE_FORMATS, DateAdapter,MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import {
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY.MM.DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


// export type ChartOptions1 = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
// };

// export type ChartOptions2 = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
// };

// export type ChartOptions3 = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
// };

// export type ChartOptions4 = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
// };


// export type ChartOptions5 = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
//   fill: ApexFill;
//   legend: ApexLegend;
//   dataLabels: ApexDataLabels;
// };
interface Year {
  value: string;
  viewValue: string;
}

interface Month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent {
  // chart: any;
  public rowses: any;
  public totalSum: any;
  public totalSumFaraTVA: any;
  public totalSumTVA: any;
  public rows: any;
  public rowss: any;
  public soldm: any;




  years: Year[] = [
    { value: '2021', viewValue: '2021' },
    { value: '2020', viewValue: '2020' }
  ];

  months: Month[] = [
    { value: '01', viewValue: '01' },
    { value: '02', viewValue: '02' }
  ];


  public selectedYear: any;
  public selectedMonthAndYear: any;

  public totalSumCuTVA_Incasari;
  public totalSumFaraTVA_Incasari;
  public totalSumTVA_Incasari

  public totalSumCuTVA_Cheltuieli;


  public totalSumCuTVA_MonthAndYear_Incasari: any;
  public totalSumCuTVA_MonthAndYear_Cheltuieli: any;

  public totalSumCuTVA_DataMinDataMax_Incasari: any;
  public totalSumCuTVA_DataMinDataMax_Cheltuieli: any

  form: any = {};

  public SoldTotal:any;
  selectedValue: any;

  public totalSumPerYear_Incasari: any;
  public totalSumPerYear_Cheltuieli: any;
  public totalSalariuNet_Salariu: any;

  public totalSumDataMinDatax_Incasari: any;
  public totalSumDataMinDatax_Cheltuieli: any;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;
  // public chartOptions1: Partial<ChartOptions1>;
  // public chartOptions2: Partial<ChartOptions2>;
  // public chartOptions3: Partial<ChartOptions3>;
  // public chartOptions4: Partial<ChartOptions4>;
  // public chartOptions5: Partial<ChartOptions5>;


  year: any;
  constructor(private incasariService: IncasariService, private adminService: AdminService,
    private cheltuieliService: CheltuieliService, private statisticsService: StatisticsService) {


    this.chartOptions = {
      series: [],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }

    this.chartOptions1 = {
      series: [],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
  }

  ngOnInit() {


      }


      Sold() {
        this.statisticsService.Cheltuieli_CountIntarziate().subscribe((res) => {
          this.SoldTotal = res;
          console.log("Total incasari pe luna si an: " + this.SoldTotal);
    

        console.log("SUUUS: " + this.SoldTotal);
          let chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: "Basic Column Chart in Angular"
            },
            data: [{
              type: "pie",
              indexLabel: "{name} - #percent%",
              dataPoints: [
                { y: this.SoldTotal, label: "Apple" },
                { y: 55, label: "Mango" },
                { y: 50, label: "Orange" },
                { y: 65, label: "Banana" },
                { y: 95, label: "Pineapple" },
                { y: 68, label: "Pears" },
                { y: 28, label: "Grapes" },
                { y: 34, label: "Lychee" },
                { y: 14, label: "Jackfruit" }
              ]
            }]
          });
            
          chart.render();
        })
      }




      Calculare(f: NgForm) {
        this.statisticsService.calculareSumaTotalaCuTVAPerYear_Incasari(f.value.year).subscribe((res) => {
          this.totalSumPerYear_Incasari = res;
          console.log("Total incasari pe an:" + this.totalSumPerYear_Incasari);
        })
        this.statisticsService.calculareSumaTotalaCuTVAPerYear_Cheltuieli(f.value.year).subscribe((res) => {
          this.totalSumPerYear_Cheltuieli = res;
        })
          this.statisticsService.calculareSalariuNetTotalPerYear_Salariu(f.value.year).subscribe((res) => {
            this.totalSalariuNet_Salariu = res;
  


    

        console.log("SUUUS: " + this.SoldTotal);
        let chart = new CanvasJS.Chart("chartContainer", {
          theme: "light2",
          animationEnabled: true,
          exportEnabled: true,
          title:{
            text: "Statistică anuală"
          },
          data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: RON {y} (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: [
              { y: this.totalSumPerYear_Incasari, name: "Încasări" },
              { y: this.totalSumPerYear_Cheltuieli , name: "Cheltuieli" },
              { y: this.totalSalariuNet_Salariu , name: "Salariu" }
            ]
          }]
        });
            
          chart.render();
        })
      }



  }