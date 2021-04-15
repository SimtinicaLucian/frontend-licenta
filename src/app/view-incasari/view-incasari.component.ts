import { Component, OnInit, ViewChild } from '@angular/core';
import { IncasariService } from '../services/api/incasari.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-incasari',
  templateUrl: './view-incasari.component.html',
  styleUrls: ['./view-incasari.component.scss']
})
export class ViewIncasariComponent implements OnInit {
  j: any;
  rows: any;

  displayedColumns: string[] = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaTotala_Incasata', 'sumaFaraTVA', 'sumaFaraTVA_Incasata', 'sumaTVA', 'sumaTVA_Incasata', 'rest', 'by_added', 'stare'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(private incasariService : IncasariService, public activeModal: NgbActiveModal,) { }
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

    this.incasariService.searchId(this.j.id).subscribe((res: any) => {
        this.rows = res
    })
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