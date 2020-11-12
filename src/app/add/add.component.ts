import { Component, OnInit,ViewChild, AfterViewInit, Type } from '@angular/core';
import { IncasariService } from '../api/api/incasari.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit , AfterViewInit  {
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
  private sorted = false;
  
  constructor(private alimService : IncasariService) { }
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    this.alimService.incasariSearchAllGet().subscribe((res : any[])=> {
      // console.log(data)
      this.rows = res
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;



    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  

  // sortBy(by: string | any): void {

  //   this.data.sort((a: any, b: any) => {
  //     if (a[by] < b[by]) {
  //       return this.sorted ? 1 : -1;
  //     }
  //     if (a[by] > b[by]) {
  //       return this.sorted ? -1 : 1;
  //     }

  //     return 0;
  //   });

  //   this.sorted = !this.sorted;
  // }

  
  // register() {
  //   this.alimService.add(this.form).subscribe(
  //     data => {
      
     
  //     }
  //   );
  // }


  register(f: NgForm) {
    this.alimService.add(f.value).subscribe(() => { })
    location.reload();
  }

  delete(test) {

    this.alimService.deleteIncasari(test.number).subscribe((res) => { })
    
    location.reload();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // --------------
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    // ---------------
  }



}
  



  // Search() {

  //   if (this.furniz != "") {


  //     this.rows = this.rows.filter(res => {
  //       return res.furnizor.toLocaleLowerCase().match(this.furniz.toLocaleLowerCase());
  //     });

  //     console.log(this.furniz);


  //   } else if (this.furniz == "") {
  //     this.ngOnInit();
  //   }
  // }


  // key = 'id';
  // reserve: boolean = false;
  // sort(key){
  //   this.key = key;
  //   this.reserve = !this.reserve
  // }








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
