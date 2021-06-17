
import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { SalariuService} from '../services/api/salariu.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExcelService } from '../services/excel.service';
import { ModalAddSalariuComponent } from '../modal-add-salariu/modal-add-salariu.component';
import { ModalDeleteSalariuComponent } from '../modal-delete-salariu/modal-delete-salariu.component';
import { ModalUpdateSalariuComponent } from '../modal-update-salariu/modal-update-salariu.component';
import { ViewSalariuComponent } from '../view-salariu/view-salariu.component';

@Component({
  selector: 'app-salariu',
  templateUrl: './salariu.component.html',
  styleUrls: ['./salariu.component.scss']
})
export class SalariuComponent implements OnInit {

  form: any = {};
  displayedColumns: string[] = ['id', 'data', 'nume', 'number', 'functie', 'detalii', 'salariu_brut', 'salariu_net', 'salariu_net_achitat', 'rest', 'by_added', 'stare', 'action'  ];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;
  rows: any;


  public user = {
    data: '',
    nume: '',
    number: 1,
    detalii: '',
    salariu_brut: 1,
    salariu_net: 1,
    salariu_net_achitat: 1

  }

  constructor(private salariuService : SalariuService, private token: TokenStorageService, private router: ActivatedRoute, public modalService: NgbModal, private excelService: ExcelService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.rows, 'cheltuieli_data');
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.salariuService.salariuSearchAll().subscribe((res: any[]) => {
      this.rows = res

      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  reset() {
    this.salariuService.salariuSearchAll().subscribe((res: any[]) => {
      this.rows = res;
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  getTotalSalarii() {
    return this.rows.map(t => t.salariu_brut).reduce((acc, value) => acc + value, 0);
  }

  getTotalSalariu_net() {
    return this.rows.map(t => t.salariu_net).reduce((acc, value) => acc + value, 0);
  }

  getTotalSalariu_net_achitat() {
    return this.rows.map(t => t.salariu_net_achitat).reduce((acc, value) => acc + value, 0);
  }

  getSalariu_Rest() {
    return this.rows.map(t => t.rest).reduce((acc, value) => acc + value, 0);
  }


  addModal() {
    const modalRef = this.modalService.open(ModalAddSalariuComponent);
    modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  deleteModal(j) {
    const modalRef = this.modalService.open(ModalDeleteSalariuComponent);
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
    const modalRef = this.modalService.open(ModalUpdateSalariuComponent);
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
    const modalRef = this.modalService.open(ViewSalariuComponent);
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
  data_scadenta: string;
  nume: string;
  functie: string;
  number: string;
  detalii: string;
  salariu_brut: number;
  salariu_net: number;
  salariu_net_achitat: number;
  rest: number;
  by_added: string;
  stare: string;

}
