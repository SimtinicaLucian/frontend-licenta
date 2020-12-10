import { Component, OnInit, ViewChild, AfterViewInit, Type, Input, ViewEncapsulation } from '@angular/core';
import { IncasariService } from '../api/api/incasari.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
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



  form: any = {};
  displayedColumns: string[] = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;

  pipe: DatePipe;
  private sorted = false;
  publishDate: any;
  datePipe: any;

  constructor(private formBuilder: FormBuilder, private alimService: IncasariService, public router: Router) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  private regForm: any;
  ngOnInit(): void {

    this.regForm = this.formBuilder.group({
      firstDate: ['', Validators.required],
      secondDate: ['', Validators.required]

    })
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
    this.alimService.add(f.value).subscribe(() => { })
    // location.reload();
  }

  delete(test) {
    this.alimService.deleteIncasari(test.number).subscribe((res) => { })
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
    this.alimService.getSumaTotalaMonthAndYear(g.value.firstDate1, g.value.lastDate1).subscribe((res) => {
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

  search6(i: NgForm) {
    this.alimService.getDatesBetweenData(i.value.firstDate2, i.value.lastDate2).subscribe((res) => {
      this.rows = res;
      console.log("res: " + res);
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




  // SearchYear() {
  //   this.dataSource = new MatTableDataSource(this.rows)
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

  //   if (this.year1 != "") {
  //     this.rows = this.rows.filter(res => {
  //       return res.data.toLocaleLowerCase().match(this.year1.toLocaleLowerCase());
  //     });

  //   } else if (this.year1 == "") {
  //     this.ngOnInit();
  //   }
  // }



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



  // getTotalCost() {
  //   return this.rows.map(t => t.sumaTotala).reduce((acc, value) => acc + value, 0);
  // }


  add(pageName: string): void {
    this.router.navigate([`${pageName}`]);
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