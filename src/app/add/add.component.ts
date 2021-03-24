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
import * as _moment from 'moment';

import {default as _rollupMoment} from 'moment'; 

import { MAT_DATE_FORMATS, DateAdapter,MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';








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
  displayedColumns: string[] = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA', 'by_added', 'delete', 'update'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;

  pipe: DatePipe;
  private sorted = false;
  publishDate: any;
  datePipe: any;


  selectedValue : string;
  selectedFurnizor: string;
  selectedSum1: string;
  selectedSum2: string;
  toppings = new FormControl();


//

  

  constructor(private userService: UserService, private token: TokenStorageService, public datePip: DatePipe, public modalService: NgbModal, private formBuilder: FormBuilder, private alimService: IncasariService, public router: Router, private excelService: ExcelService) {
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


    this.alimService.searchTotal().subscribe((res =>
      this.totalSum = res
    ))

    this.alimService.searchTotalTVA().subscribe((res =>
      this.totalSumTVA = res
    ))

    this.alimService.searchTotalFaraTVA().subscribe((res =>
      this.totalSumFaraTVA = res
    ))


  }


  register(f: NgForm) {
    this.userService.add(f.value).subscribe( 
      data => { 

      });
    // location.reload();
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

  search(data) {
    this.alimService.getPetById(data.number).subscribe((res) => {
      this.rows = res;
      console.log(res);
    })
    // location.reload();
  }

  search2(data1) {
    this.alimService.getPetByFurnizor(data1.furnizor).subscribe((res) => {
      this.rows = res;
      // this.dataSource = new MatTableDataSource(this.rows);
      console.log(res);
    })
    // location.reload();
  }

  search3(f: NgForm) {
    this.alimService.getSumaTotalaBetweenDate(f.value.firstDate, f.value.lastDate).subscribe((res) => {
      this.between = res;
      console.log("res: " + res);
    })
  }

  search4(g: NgForm) {
    this.alimService.getSumaTotalaMonthAndYear(g.value.month, g.value.year).subscribe((res) => {
      this.between = res;
      console.log("res: " + res);
    })
  }

  search5(h) {
    this.alimService.getSumaTotalaPerYear(h.value.year).subscribe((res) => {
      this.year = res;
      console.log("res: " + res);
    })
  }

  search6(a: NgForm) {
    this.alimService.getDatesBetweenData(a.value.firstDate2, a.value.lastDate2).subscribe((res) => {
      this.rows = res;
      // console.log(res);
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      //  if (this.rows == "") {
      //     this.ngOnInit();
      //   }
    })
  }



  search7(data2) {
    this.alimService.getByYear(data2.year).subscribe((res) => {
      this.rows = res;
      // this.dataSource = new MatTableDataSource(this.rows);
      console.log(res);
    })
    // location.reload();
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
      // console.log(res);
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      //  if (this.rows == "") {
      //     this.ngOnInit();
      //   }
    })
  }


  searchByFurnizorAndDateAndSum(h: NgForm) {
    this.alimService.getData(h.value.furnizor, h.value.data1, h.value.data2, h.value.sumaTotala1, h.value.sumaTotala2).subscribe((res) => {
      this.rows = res;


      // console.log(res);
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






  getTotalCostTotal() {
    return this.rows.map(t => t.sumaTotala).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostFaraTVA() {
    return this.rows.map(t => t.sumaFaraTVA).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostTVA() {
    return this.rows.map(t => t.sumaTVA).reduce((acc, value) => acc + value, 0);
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
        //   this.doctService.deleteData(j).subscribe(res=>
        // {
        //     this.getData()
        //     console.log("delete");
        //   // location.reload();
        // })

      }
    });
  }


  date = {
    first: this.datePip.transform(new Date(), 'yyyy.MM.dd'),
    second: this.datePip.transform(new Date(), 'yyyy.MM.dd')
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
  by_added: string;
}