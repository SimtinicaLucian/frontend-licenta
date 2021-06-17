
import { Component, OnInit, ViewChild } from '@angular/core';
import { SalariuService } from '../services/api/salariu.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-view-salariu',
  templateUrl: './view-salariu.component.html',
  styleUrls: ['./view-salariu.component.scss']
})
export class ViewSalariuComponent implements OnInit {

  j: any;
  rows: any;

  displayedColumns: string[] = ['id', 'data', 'nume', 'number', 'functie' , 'detalii', 'salariu_brut', 'salariu_net', 'salariu_net_achitat', 'data_Scadenta', 'rest', 'by_added', 'stare'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(private salariuService : SalariuService, public activeModal: NgbActiveModal) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
  }

  close() {
    this.activeModal.dismiss('Cross click')
    // location.reload();
  }

  searchID(j,) {
    console.log(this.j.id);

    this.salariuService.searchId(this.j.id).subscribe((res: any) => {
        this.rows = res
    })
  }

}

export interface PeriodicElement {
  id: number;
  data: string;
  data_Scadenta: string;
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
