import { Component, OnInit, ViewChild, AfterViewInit, Type, Input, ViewEncapsulation } from '@angular/core';
// import { IncasariService } from '../api/api/incasari.service'
import { IncasariService } from '../services/api/incasari.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/Rx';
import { ExcelService } from '../services/excel.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component'
import { ModalDeleteIncasariComponent } from '../modal-delete-incasari/modal-delete-incasari.component';
import { ModalUpdateIncasariComponent } from '../modal-update-incasari/modal-update-incasari.component';
import { ViewIncasariComponent } from '../view-incasari/view-incasari.component';
import * as _moment from 'moment';

import {default as _rollupMoment} from 'moment'; 

import { MAT_DATE_FORMATS, DateAdapter,MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { StatisticsService } from '../services/api/statistics.service';

import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
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

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

interface Month {
  value: string;
  viewValue: string;
}

interface Year {
  value: string;
  viewValue: string;
}

interface Stare {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  encapsulation: ViewEncapsulation.None
})

export class AddComponent implements OnInit {
  public rows: any;
  totalSum: any;
  totalSumTVA: any;
  totalSumFaraTVA: any;
  totalSumTVADay: any;

  furnizor: any;
  number: any;
  between: any;
  year: any;

  year1: string;
  furniz: string;
  dat: string;
  public columns: any;
  num: any;
  firstDate2: string;
  lastDate2: string;

  totalSumCuTVA_MonthAndYear_Incasari: any;
  totalSumCuTVA_MonthAndYear_Cheltuieli: any;

  hide = true;




  public user = {
    data: '',
    furnizor: '',
    number: 1,
    detalii: '',
    sumaTotala: 1,
    sumaFaraTVA: 1,
    sumaTva: 1,

  }

  id: string;

  form: any = {};
  // displayedColumns: string[] = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaTotala_Incasata', 'rest', 'sumaFaraTVA', 'sumaFaraTVA_Incasata' , 'sumaTVA', 'sumaTVA_Incasata', 'by_added', 'stare', 'delete', 'update'];
   displayedColumns: string[] = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaTotala_Incasata', 'rest', 'by_added', 'stare', 'action'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;

  pipe: DatePipe;
  private sorted = false;
  publishDate: any;
  datePipe: any;


  selectedValue : string;
  selectedYear: string;
  selectedFurnizor: string;
  selectedSum1: string;
  selectedSum2: string;
  toppings = new FormControl();


//
// @Input() chart: ApexChart;
@ViewChild("chart") chart: ChartComponent;
public chartOptions: Partial<ChartOptions>;
public chartOptions2: Partial<ChartOptions2>;


  months: Month[] = [
    {value: '01', viewValue: '01'}
  ];

  years: Year[] = [
    {value: '2021', viewValue: '2021'},
    {value: '2020', viewValue: '2020'}
  ];

  stares: Stare[] = [
    {value: 'achitata', viewValue: 'achitata'},
    {value: 'neachitata', viewValue: 'neachitata'},
    {value: 'partial achitata' , viewValue: 'partial achitata'},
    {value: 'intarziata' , viewValue: 'intarziata'}

  ];

  // years: number[] =[2020,2021]

  

  constructor(private userService: UserService, private token: TokenStorageService, public datePip: DatePipe, public modalService: NgbModal,
     private formBuilder: FormBuilder, private alimService: IncasariService, public router: Router, private excelService: ExcelService,
     private statisticsService: StatisticsService) {
  }



  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.rows, 'incasari_data');
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  private regForm: any;
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.alimService.incasariSearchAllGet().subscribe((res: any[]) => {
      this.rows = res

      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilters() {
    this.dataSource.filter = '' + Math.random();
  }






  reset() {
    this.alimService.incasariSearchAllGet().subscribe((res: any[]) => {
      this.rows = res;
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  resetRefresh(){
    this.alimService.incasariSearchAllGet().subscribe((res: any[]) => {
      this.rows = res;
    })
    
    location.reload();
  }

  searchByMonthAndYear(e: NgForm) {
    this.alimService.getDatesAfterMonthAndYear(e.value.month1, e.value.year1).subscribe((res) => {
      this.rows = res;
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  searchByFurnizorAndDateAndSum(h: NgForm) {
    this.alimService.getData(h.value.furnizor, h.value.data1, h.value.data2, h.value.sumaTotala1, h.value.sumaTotala2, h.value.stare).subscribe((res) => {
      this.rows = res;
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }



  SearchFurnizor() {
    this.dataSource = new MatTableDataSource(this.rows)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.furniz != "") {
      this.rows = this.rows.filter(res => {
        return res.furnizor.toLocaleLowerCase().match(this.furniz.toLocaleLowerCase());
      });

    } else if (this.furniz == "") {
      this.ngOnInit();
    }
  }


  SearchData() {
    this.dataSource = new MatTableDataSource(this.rows)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.dat != "") {
      this.rows = this.rows.filter(res => {
        return res.data.toLocaleLowerCase().match(this.dat.toLocaleLowerCase());
      });

    } else if (this.dat == "") {
      this.ngOnInit();
    }
  }



  SearchNumber() {
    this.dataSource = new MatTableDataSource(this.rows)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.num != "") {
      this.rows = this.rows.filter(res => {
        return res.number.toLocaleLowerCase().match(this.num.toLocaleLowerCase());
      });

    } else if (this.num == "") {
      this.ngOnInit();
    }
  }


  calculareSumaTotalaCuTVAPerYear(f: NgForm) {
    this.statisticsService.calculareSumaTotalaCuTVAPerYear_Incasari(f.value.year).subscribe((res) => {
      this.totalSumCuTVA_MonthAndYear_Incasari = res;
      console.log("res: " + res);

      this.statisticsService.calculareSumaTotalaCuTVAPerYear_Cheltuieli(f.value.year).subscribe((res) => {
        this.totalSumCuTVA_MonthAndYear_Cheltuieli = res;
        console.log("res: " + res);
     
      
      this.chartOptions = {
        series: [this.totalSumCuTVA_MonthAndYear_Incasari, this.totalSumCuTVA_MonthAndYear_Cheltuieli],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Total Incasari Per Year", "Total Cheltuieli Per Year"],
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
  

  // calculareSumaTotalaCuTVAPerYear(f: NgForm) {
  //   console.log("f: " + f.value.year);
  //   this.statisticsService.calculareSumaTotalaCuTVAPerYear_Incasari(f.value.year).subscribe(res => {
  //     this.totalSumCuTVA_MonthAndYear_Incasari = res;
  //     console.log("res: " + res);
  //   })
  // }


  calculareSumaTotalaCuTVAMonthYear(g: NgForm) {

    this.statisticsService.calculareSumaTotalaCuTVAMonthAndYear_Incasari(g.value.month, g.value.year).subscribe((res) => {
      this.totalSumCuTVA_MonthAndYear_Incasari = res;
      console.log("res: " + res);

      this.statisticsService.calculareSumaTotalaCuTVAMonthAndYear_Cheltuieli(g.value.month, g.value.year).subscribe((res) => {
        this.totalSumCuTVA_MonthAndYear_Cheltuieli = res;
        console.log("res: " + res);
     
      
      this.chartOptions2 = {
        series: [this.totalSumCuTVA_MonthAndYear_Incasari, this.totalSumCuTVA_MonthAndYear_Cheltuieli],
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





  getTotalCostTotal() {
    return this.rows.map(t => t.sumaTotala).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostFaraTVA() {
    return this.rows.map(t => t.sumaFaraTVA).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostTVA() {
    return this.rows.map(t => t.sumaTVA).reduce((acc, value) => acc + value, 0);
  }

  
  getTotalCostTotal_Incasata() {
    return this.rows.map(t => t.sumaTotala_Incasata).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostFaraTVA_Incasata() {
    return this.rows.map(t => t.sumaFaraTVA_Incasata).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostTVA_Incasata() {
    return this.rows.map(t => t.sumaTVA_Incasata).reduce((acc, value) => acc + value, 0);
  }

  getRest() {
    return this.rows.map(t => t.rest).reduce((acc, value) => acc + value, 0);
  }


  add(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }


  deleteModal(j) {
    const modalRef = this.modalService.open(ModalDeleteIncasariComponent);
    modalRef.componentInstance.j = j;
    modalRef.result.then((result) => {
      console.log(result);
      if (result) {
        console.log(result);
      }
    });
  }

  updateModal(j) {
    console.log(j);
    const modalRef = this.modalService.open(ModalUpdateIncasariComponent);
    modalRef.componentInstance.j = j;
    modalRef.result.then((result) => {
      console.log(result);
      if (result) {
        console.log(result);
      }
    });
  }

  view(j) {
    console.log(j);
    const modalRef = this.modalService.open(ViewIncasariComponent);
    // const modalRef = this.view.call(ViewIncasariComponent);
    modalRef.componentInstance.j = j;
    modalRef.result.then((result) => {
      console.log(result);
      if (result) {
        console.log(result);
      }
    });
  }




}


export interface PeriodicElement {
  id: number;
  data: string;
  furnizor: string;
  number: number;
  detalii: string;
  sumaTotala: number;
  sumaFaraTVA: number;
  sumaTVA: number;
  sumaTotala_Incasata: number;
  sumaFaraTVA_Incasata: number;
  sumaTVA_Incasata: number;
  rest: number;
  by_added: string;
  stare: string;
  action: any;
}