import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { IncasariService } from '../services/api/incasari.service';
import { WeatherService } from '../services/api/weather.service';
import { Chart } from 'chart.js';
import { AdminService } from '../services/api/admin.service';
import { CheltuieliService } from '../services/api/cheltuieli.service';
import { NgForm } from '@angular/forms';
import { SelectorMatcher } from '@angular/compiler';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


export type ChartOptions1 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

export type ChartOptions3 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  // chart: any;
  public rowses: any;
  public totalSum: any;
  public totalSumFaraTVA: any;
  public totalSumTVA: any;
  public rows: any;
  public rowss: any;

  public totalSumIncasari: any;
  public totalSumCheltuieli: any;
  public f: NgForm;
  public totalSumCheltuieliBetwoonData1Data2: any;
  public totalSumIncasariBetwoonData1Data2: any

  public totalSumCheltuieliMonthYear: any;
  public totalSumIncasariMonthYear: any;
  form: any = {};

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions1>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions3: Partial<ChartOptions3>;
  constructor(private incasariService: IncasariService, private _weather: WeatherService, private adminService: AdminService, private cheltuieliService: CheltuieliService) { }

  ngOnInit() {



    this.incasariService.searchTotal().subscribe((res: any) => {
      this.totalSum = res;
      console.log(this.totalSum);

      this.incasariService.searchTotalTVA().subscribe((ress: any) => {
        this.totalSumTVA = ress;
        console.log(this.totalSumTVA)

        this.incasariService.searchTotalFaraTVA().subscribe((ress: any) => {
          this.totalSumFaraTVA = ress;
          console.log(this.totalSumFaraTVA)


          this.chartOptions = {
            series: [this.totalSum, this.totalSumTVA, this.totalSumFaraTVA],
            chart: {
              width: 380,
              type: "pie"
            },
            labels: ["Total cu TVA", "Total fara TVA", "Total TVA"],
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
          };
        })
      })
    })

    this.incasariService.searchTotal().subscribe((res: any) => {
      this.totalSumIncasari = res;
      console.log(this.totalSumIncasari);

      this.cheltuieliService.searchSumTotalCuTVA().subscribe((res: any) => {
        this.totalSumCheltuieli = res;
        console.log(this.totalSumCheltuieli);



        this.chartOptions1 = {
          series: [this.totalSumIncasari, this.totalSumCheltuieli],
          chart: {
            width: 380,
            type: "pie"
          },
          labels: ["Total Incasari", "Total Cheltuieli"],
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
        };
      })
    })


  }


  culculareSumaTotalaCuTVAData1Data2(f: NgForm) {
    this.cheltuieliService.culculareSumaTotalaCuTVAData1Data2(f.value.data1, f.value.data2).subscribe((res) => {
      this.totalSumCheltuieliBetwoonData1Data2 = res;
      console.log("res: " + res);

      this.incasariService.getSumaTotalaBetweenDate(f.value.data1, f.value.data2).subscribe((res) => {
        this.totalSumIncasariBetwoonData1Data2 = res;
        console.log("res: " + res);
     

      
      this.chartOptions2 = {
        series: [this.totalSumCheltuieliBetwoonData1Data2, this.totalSumIncasariBetwoonData1Data2],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Total Cheltuieli", "Total Incasari"],
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
      };
    })
  })

  }


  calculareSumaTotalaCuTVAMonthYear(g: NgForm) {

    this.incasariService.getSumaTotalaMonthAndYear(g.value.month, g.value.year).subscribe((res) => {
      this.totalSumIncasariMonthYear = res;
      console.log("res: " + res);

      this.cheltuieliService.calculareSumaTotalaCuTVAMonthYear(g.value.month, g.value.year).subscribe((res) => {
        this.totalSumCheltuieliMonthYear = res;
        console.log("res: " + res);
     

      
      this.chartOptions3 = {
        series: [this.totalSumIncasariMonthYear, this.totalSumCheltuieliMonthYear],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Total Incasari Month Year", "Total Cheltuieli Month Year"],
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
      };
    })
  })


  }


}




// search3(f: NgForm) {
//   this.alimService.getSumaTotalaBetweenDate(f.value.firstDate, f.value.lastDate).subscribe((res) => {
//     this.between = res;
//     console.log("res: " + res);
//   })
// }