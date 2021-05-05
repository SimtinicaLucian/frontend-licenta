import { Component, OnInit, ViewChild, AfterViewInit, Type, Input } from '@angular/core';
// import { IncasariService } from '../api/api/incasari.service'
import { IncasariService } from '../services/api/incasari.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/Rx';
import { AuthService } from '../services/auth.service';
import { ProgressBarService } from '../services/progress-bar.service';
import { AlertService } from 'ngx-alerts';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-incasari',
  templateUrl: './incasari.component.html',
  styleUrls: ['./incasari.component.scss']
})

export class IncasariComponent implements OnInit {
  public rows: any;
  totalSum: any;
  totalSumTVA: any;
  totalSumFaraTVA: any;
  totalSumTVADay: any;

  furnizor: any;
  between: any;
  year: any;


  form: any = {};
  displayedColumns: string[] = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;

  pipe: DatePipe;
  private sorted = false;
  publishDate: any;
  datePipe: any;


  isLoginFailed = false;

  roles: string[] = [];
  fieldTextType: boolean;


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''

  isLoggedIn = false;

  constructor( 
    private formBuilder: FormBuilder, private alimService: IncasariService, public router: Router,
    private authService: AuthService, public progressBar: ProgressBarService,
    private alertService: AlertService,
  ) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  private regForm: any;
  ngOnInit(): void {

    this.regForm = this.formBuilder.group({
      firstDate: ['', Validators.required],
      secondDate: ['', Validators.required]

    })
    this.alimService.incasariSearchAllGet().subscribe((res) => {
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


  // getTotalCost() {
  //   return this.rows.map(t => t.sumaTotala).reduce((acc, value) => acc + value, 0);
  // }


  add(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }


  onSubmit() {
    this.alertService.info('Working on creating new account');
    this.progressBar.startLoading();
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.progressBar.setSuccess();
        console.log('User created');
        this.alertService.success('Account Created');
        this.progressBar.completeLoading();
        // window.location.reload();
        
      },
      err => {
        this.progressBar.setError();
        console.log(err);
        this.alertService.danger(err.error.message);
        this.progressBar.completeLoading();

        // this.errorMessage = err.error.message;
        this.isSignUpFailed = true;

      }
    );
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