import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { CheltuieliService} from '../services/api/cheltuieli.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteCheltuieliComponent } from '../modal-delete-cheltuieli/modal-delete-cheltuieli.component';
import { ModalUpdateCheltuieliComponent } from '../modal-update-cheltuieli/modal-update-cheltuieli.component';
import { ModalAddCheltuieliComponent } from '../modal-add-cheltuieli/modal-add-cheltuieli.component';
import { ExcelService } from '../services/excel.service';
import { ViewCheltuieliComponent } from '../view-cheltuieli/view-cheltuieli.component';
import { MAT_DATE_FORMATS, DateAdapter,MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';

import {default as _rollupMoment} from 'moment'; 



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



interface Stare {
  value: string;
  viewValue: string;
}

interface Month {
  value: string;
  viewValue: string;
}

interface Year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cheltuieli',
  templateUrl: './cheltuieli.component.html',
  styleUrls: ['./cheltuieli.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  encapsulation: ViewEncapsulation.None
})
export class CheltuieliComponent implements OnInit {

  public user = {
    data: '',
    beneficiar: '',
    number: 1,
    detalii: '',
    sumaTotala: 1,
    sumaTotala_Achitata: 1,

  }


  form: any = {};
  displayedColumns: string[] = ['id', 'data', 'beneficiar', 'number', 'detalii', 'sumaTotala', 'sumaTotala_Achitata', 'cota_TVA', 'rest', 'by_added', 'stare', 'action'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;
  rows: any;

  months: Month[] = [
    {value: '01', viewValue: 'Ianuarie'},
    {value: '02', viewValue: 'Februarie'},
    {value: '03', viewValue: 'Martie'},
    {value: '04', viewValue: 'Aprilie'},
    {value: '05', viewValue: 'Mai'},
    {value: '06', viewValue: 'Iunie'},
    {value: '07', viewValue: 'Iulie'},
    {value: '08', viewValue: 'August'},
    {value: '09', viewValue: 'Septembrie'},
    {value: '10', viewValue: 'Octombrie'},
    {value: '11', viewValue: 'Noiembrie'},
    {value: '12', viewValue: 'Decembrie'}
    
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


  constructor(private cheltuieliService : CheltuieliService, private token: TokenStorageService, private router: ActivatedRoute, public modalService: NgbModal, private excelService: ExcelService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.rows, 'cheltuieli_data');
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.cheltuieliService.cheltuieliSearchAll().subscribe((res: any[]) => {
      this.rows = res

      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

    reset() {
    this.cheltuieliService.cheltuieliSearchAll().subscribe((res: any[]) => {
      this.rows = res;
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  getTotalCheltuieli() {
    return this.rows.map(t => t.sumaTotala).reduce((acc, value) => acc + value, 0);
  }

  getTotalCheltuieli_Achitata() {
    return this.rows.map(t => t.sumaTotala_Achitata).reduce((acc, value) => acc + value, 0);
  }

  getCheltuieli_Rest() {
    return this.rows.map(t => t.rest).reduce((acc, value) => acc + value, 0);
  }

  addModal() {
    const modalRef = this.modalService.open(ModalAddCheltuieliComponent);
    modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  deleteModal(j) {
    const modalRef = this.modalService.open(ModalDeleteCheltuieliComponent);
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
    const modalRef = this.modalService.open(ModalUpdateCheltuieliComponent);
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
    const modalRef = this.modalService.open(ViewCheltuieliComponent);
    // const modalRef = this.view.call(ViewIncasariComponent);
    modalRef.componentInstance.j = j;
    modalRef.result.then((result) => {
      console.log(result);
      if (result) {
        console.log(result);
      }
    });
  }


    filtrare(h: NgForm) {
      this.cheltuieliService.getData(h.value.beneficiar, h.value.data1, h.value.data2, h.value.sumaTotala1, h.value.sumaTotala2, h.value.stare).subscribe((res) => {
        this.rows = res;
        this.dataSource = new MatTableDataSource(this.rows)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    })
  }


  // searchByFurnizorAndDateAndSum(h: NgForm) {
  //   this.cheltuieliService.getData(h.value.beneficiar, h.value.data1, h.value.data2, h.value.sumaTotala1, h.value.sumaTotala2, h.value.stare).subscribe((res) => {
  //     this.rows = res;
  //     this.dataSource = new MatTableDataSource(this.rows)
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;

  //   })
  // }

  filtrare_Luna_An(f: NgForm) {
    this.cheltuieliService.getDatesAfterMonthAndYear(f.value.month, f.value.year).subscribe((res) => {
      this.rows = res;
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  

}

export interface PeriodicElement {
  id: number;
  data: string;
  beneficiar: string;
  number: number;
  detalii: string;
  sumaTotala: number;
  sumaFaraTVA: number;
  sumaTVA: number;
  sumaTotala_Achitata: number;
  sumaFaraTVA_Achitata: number;
  sumaTVA_Achitata: number;
  rest: number;
  cota_TVA: number;
  by_added: string;
  stare: string;
  action: any;
}


