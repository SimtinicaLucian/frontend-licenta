import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-cheltuieli',
  templateUrl: './cheltuieli.component.html',
  styleUrls: ['./cheltuieli.component.scss']
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
  displayedColumns: string[] = ['id', 'data', 'beneficiar', 'number', 'detalii', 'sumaTotala', 'sumaTotala_Achitata', 'rest', 'by_added', 'stare', 'action'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;
  rows: any;
  constructor(private cheltuieliService : CheltuieliService, private token: TokenStorageService, private router: ActivatedRoute, public modalService: NgbModal) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
  by_added: string;
  stare: string;
  action: any;
}
