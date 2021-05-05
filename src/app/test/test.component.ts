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

import * as _moment from 'moment';

import {default as _rollupMoment} from 'moment'; 

import { MAT_DATE_FORMATS, DateAdapter,MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import {
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";


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

  selectedValue: any;

  public totalSumPerYear_Incasari: any;
  public totalSumPerYear_Cheltuieli: any;
  

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

    // this.statisticsService.calculareSumaTotalaCuTVA_Incasari().subscribe(res => {
    //   this.totalSumCuTVA_Incasari = res;
    //   console.log(this.totalSumCuTVA_Incasari);

    //   this.statisticsService.calculareSumaTotalaFaraTVA_Incasari().subscribe(ress => {
    //     this.totalSumFaraTVA_Incasari = ress;
    //     console.log(this.totalSumFaraTVA_Incasari)


    //   this.statisticsService.calculareSumaTotalaTVA_Incasari().subscribe(ress => {
    //     this.totalSumTVA_Incasari = ress;
    //     console.log(this.totalSumTVA_Incasari)




    //       this.chartOptions = {
    //         series: [this.totalSumCuTVA_Incasari, this.totalSumFaraTVA_Incasari, this.totalSumTVA_Incasari],
    //         chart: {
    //           width: 380,
    //           type: "pie"
    //         },
    //         labels: ["Total cu TVA", "Total fara TVA", "Total TVA"],
    //         responsive: [
    //           {
    //             breakpoint: 480,
    //             options: {
    //               chart: {
    //                 width: 200
    //               },
    //               legend: {
    //                 position: "bottom"
    //               }
    //             }
    //           }
    //         ]
    //       };
    //     })
    //   })
    // })










    //   this.statisticsService.calculareSumaTotalaCuTVA_Incasari().subscribe((res: any) => {
    //     this.totalSumCuTVA_Incasari = res;
    //     console.log(this.totalSumCuTVA_Incasari);

    //     this.statisticsService.calculareSumaTotalaCuTVA_Cheltuieli().subscribe((res: any) => {
    //       this.totalSumCuTVA_Cheltuieli = res;
    //       console.log(this.totalSumCuTVA_Cheltuieli);



    //       this.chartOptions1 = {
    //         series: [this.totalSumCuTVA_Incasari, this.totalSumCuTVA_Cheltuieli],
    //         chart: {
    //           width: 380,
    //           type: "pie"
    //         },
    //         labels: ["Total Incasari", "Total Cheltuieli"],
    //         responsive: [
    //           {
    //             breakpoint: 480,
    //             options: {
    //               chart: {
    //                 width: 200
    //               },
    //               legend: {
    //                 position: "bottom"
    //               }
    //             }
    //           }
    //         ]
    //       };
    //     })
    //   })


    // }


    // culculareSumaTotalaCuTVAData1Data2(f: NgForm) {
    //   this.statisticsService.calculareSumaTotalaCuTVADataMinDataMax_Incasari(f.value.data1, f.value.data2).subscribe((res) => {
    //     this.totalSumCuTVA_DataMinDataMax_Incasari = res;
    //     console.log("res: " + res);

    //     this.statisticsService.calculareSumaTotalaCuTVADataMinDataMax_Cheltuieli(f.value.data1, f.value.data2).subscribe((res) => {
    //       this.totalSumCuTVA_DataMinDataMax_Cheltuieli = res;
    //       console.log("res: " + res);



    //     this.chartOptions2 = {
    //       series: [this.totalSumCuTVA_DataMinDataMax_Incasari, this.totalSumCuTVA_DataMinDataMax_Cheltuieli],
    //       chart: {
    //         width: 380,
    //         type: "pie"
    //       },
    //       labels: ["Total Incasari", "Total Cheltuieli"],
    //       responsive: [
    //         {
    //           breakpoint: 480,
    //           options: {
    //             chart: {
    //               width: 200
    //             },
    //             legend: {
    //               position: "bottom"
    //             }
    //           }
    //         }
    //       ]
    //     };
    //   })
    // })

    // }


    // calculareSumaTotalaCuTVAMonthYear(g: NgForm) {

    //   this.statisticsService.calculareSumaTotalaCuTVAMonthAndYear_Incasari(g.value.month, g.value.year).subscribe((res) => {
    //     this.totalSumCuTVA_MonthAndYear_Incasari = res;
    //     console.log("res: " + res);

    //     this.statisticsService.calculareSumaTotalaCuTVAMonthAndYear_Cheltuieli(g.value.month, g.value.year).subscribe((res) => {
    //       this.totalSumCuTVA_MonthAndYear_Cheltuieli = res;
    //       console.log("res: " + res);


    //     this.chartOptions3 = {
    //       series: [this.totalSumCuTVA_MonthAndYear_Incasari, this.totalSumCuTVA_MonthAndYear_Cheltuieli],
    //       chart: {
    //         width: 380,
    //         type: "pie"
    //       },
    //       labels: ["Total Incasari Month Year", "Total Cheltuieli Month Year"],
    //       responsive: [
    //         {
    //           breakpoint: 480,
    //           options: {
    //             chart: {
    //               width: 200
    //             },
    //             legend: {
    //               position: "bottom"
    //             }
    //           }
    //         }
    //       ]
    //     };
    //   })
    // })
    // }



    // calculareSumaTotalaCuTVAPerYear(f: NgForm) {

    //   this.statisticsService.calculareSumaTotalaCuTVAPerYear_Incasari(f.value.year).subscribe((res) => {
    //     this.totalSumCuTVA_MonthAndYear_Incasari = res;
    //     console.log("res: " + res);

    //     this.statisticsService.calculareSumaTotalaCuTVAPerYear_Cheltuieli(f.value.year).subscribe((res) => {
    //       this.totalSumCuTVA_MonthAndYear_Cheltuieli = res;
    //       console.log("res: " + res);


    //     this.chartOptions4 = {
    //       series: [this.totalSumCuTVA_MonthAndYear_Incasari, this.totalSumCuTVA_MonthAndYear_Cheltuieli],
    //       chart: {
    //         width: 380,
    //         type: "pie"
    //       },
    //       labels: ["Total Incasari Per Year", "Total Cheltuieli Per Year"],
    //       responsive: [
    //         {
    //           breakpoint: 480,
    //           options: {
    //             chart: {
    //               width: 200
    //             },
    //             legend: {
    //               position: "bottom"
    //             }
    //           }
    //         }
    //       ]
    //     };
    //   })
    // })
  }

  //   getVal(year): any{
  //     this.statisticsService.calculareSumaTotalaCuTVAPerYear_Incasari(year).map(res => {
  //         return res;
  //     })
  //   }

  //   getVal2(year): any{
  //     this.statisticsService.calculareSumaTotalaCuTVAPerYear_Cheltuieli(year).map(res => {
  //         return res;
  //     })
  //   }

  //   calculareSumaTotalaCuTVAPerYear(f: NgForm) {
  //     let val1 = this.getVal(f.value.year);
  //     let val2 = this.getVal2(f.value.year);
  //     this.chartOptions.series = [val1, val2];
  // }



  calculareSumaTotalaCuTVAPerYear(f: NgForm) {
    this.statisticsService.calculareSumaTotalaCuTVAPerYear_Incasari(f.value.year).subscribe((res) => {
      this.totalSumPerYear_Incasari = res;
      console.log("Total incasari pe an:" + this.totalSumPerYear_Incasari);
    })
    this.statisticsService.calculareSumaTotalaCuTVAPerYear_Cheltuieli(f.value.year).subscribe((res) => {
      this.totalSumPerYear_Cheltuieli = res;
      console.log("Total cheltuieli pe an:" + this.totalSumPerYear_Cheltuieli);
      this.chartOptions.series = [this.totalSumPerYear_Incasari, this.totalSumPerYear_Cheltuieli] 
      this.chartOptions.labels = ["Total incasari/an", "Total cheltuieli/an"]
    })
    console.log("hai sus 1" , this.chartOptions.series);
    // this.chartOptions.series = [this.totalSumPerYear_Incasari, this.totalSumPerYear_Cheltuieli] 
    console.log("hai sus 2" , this.chartOptions.series);
    
    
  }

  // sold(){
  //   this.statisticsService.sold().subscribe((res) => {
  //     this.soldm = res;
  //     console.log(this.soldm);
  //   })
  // }


  calculareSumaTotalaCuTVAMonthYear(f: NgForm) {
    this.statisticsService.calculareSumaTotalaCuTVAMonthAndYear_Incasari(f.value.month, f.value.year).subscribe((res) => {
      this.totalSumCuTVA_MonthAndYear_Incasari = res;
      console.log("Total incasari pe luna si an: " + res);
    })
    this.statisticsService.calculareSumaTotalaCuTVAMonthAndYear_Cheltuieli(f.value.month, f.value.year).subscribe((res) => {
      this.totalSumCuTVA_MonthAndYear_Cheltuieli = res;
      console.log("Total cheltuieli pe luna si an: " + res);
      this.chartOptions1.series = [this.totalSumCuTVA_MonthAndYear_Incasari, this.totalSumCuTVA_MonthAndYear_Cheltuieli] 
      this.chartOptions1.labels = ["Total incasari/luna si an", "Total cheltuieli/luna si an"]
    })
    console.log("hai sus 1" , this.chartOptions.series);
    // this.chartOptions.series = [this.totalSumPerYear_Incasari, this.totalSumPerYear_Cheltuieli] 
    console.log("hai sus 2" , this.chartOptions.series);
  }


  calculareSumaTotalaCuTVADataMinDataMax(f: NgForm){
    this.statisticsService.calculareSumaTotalaCuTVADataMinDataMax_Incasari(f.value.data1, f.value.data2).subscribe((res) => {
      this.totalSumDataMinDatax_Incasari = res;
      console.log("Total incasari dataMin-dataMax:" + res);
    })
    this.statisticsService.calculareSumaTotalaCuTVADataMinDataMax_Cheltuieli(f.value.data1, f.value.data2).subscribe((res) => {
      this.totalSumDataMinDatax_Cheltuieli = res;
      console.log("Total cheltuieli dataMin-dataMax:" + res);
      this.chartOptions.series = [this.totalSumDataMinDatax_Incasari, this.totalSumDataMinDatax_Cheltuieli] 
      this.chartOptions.labels = ["Total incasari/dataMindataMax", "Total cheltuieli/dataMindataMax"]
    })
  }


}




// search3(f: NgForm) {
//   this.alimService.getSumaTotalaBetweenDate(f.value.firstDate, f.value.lastDate).subscribe((res) => {
//     this.between = res;
//     console.log("res: " + res);
//   })
// }