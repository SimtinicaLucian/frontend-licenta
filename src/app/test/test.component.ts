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

export type ChartOptions = {
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
  totalSum: any;
  public rows: any;
  public rowss: any;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private incasariService: IncasariService, private _weather: WeatherService, private adminService : AdminService) {}

    ngOnInit() {

  this.incasariService.count()
    .subscribe((reses: any[]) => {
      this.rowses = reses
      console.log(this.rowses);

      this.incasariService.searchTotal().subscribe((res : any) => {
      this.rows = res;
      console.log(this.rows);

        this.incasariService.searchTotalTVA().subscribe((ress : any) => {
          this.rowss = ress;
          console.log(this.rowss)
       
      
      
      

    this.chartOptions = {
      series: [this.rowses, this.rows, this.rowss],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Incasari", "Cheltuieli", "che"],
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

  // ngOnInit() {
  //   this.incasariService.count()
  //   .subscribe((reses: any[]) => {
  //     this.rowses = reses
  //     console.log(this.rowses);

        

  //       this.chart = new Chart('canvas', {
  //         type: 'line',
  //         data: {
  //           labels: this.rowses,
  //           datasets: [
  //             {
  //               data: this.rowses,
  //               borderColor: '#3cba9f',
  //               fill: false
  //             },

  //           ]
  //         },
  //         options: {
  //           legend: {
  //             display: false
  //           },
  //           scales: {
  //             xAxes: [{
  //               display: true
  //             }],
  //             yAxes: [{
  //               display: true
  //             }]
  //           }
  //         }
  //       })

  //     })
  // }
}

}


