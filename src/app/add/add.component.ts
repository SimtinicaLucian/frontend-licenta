import { Component, OnInit,ViewChild, AfterViewInit, Type } from '@angular/core';
import { IncasariService } from '../api/api/incasari.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public columns: any;
  public columns2: any;
  public rows: any;
  public variabile: any;
  public auto: any;
  public furnizor: any;
  number: any;
  // ---------------------------
  furniz: string;
  aut: string;
  num: any;
  dat: string;


  form: any = {};
  displayedColumns: string[] = ['id','data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;

  data : any;

  constructor(private alimService : IncasariService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    this.alimService.incasariSearchAllGet().subscribe((data : any[])=> {
      console.log(data)
      this.data = data
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.paginator = this.paginator;



    })
  }

  // register() {
  //   this.alimService.add(this.form).subscribe(
  //     data => {
      
     
  //     }
  //   );
  // }


  Search() {

    if (this.furniz != "") {


      this.rows = this.rows.filter(res => {
        return res.furnizor.toLocaleLowerCase().match(this.furniz.toLocaleLowerCase());
      });



    } else if (this.furniz == "") {
      this.ngOnInit();
    }
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
  
}
