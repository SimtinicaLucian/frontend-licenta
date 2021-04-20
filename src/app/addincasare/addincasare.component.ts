import { IncasariService } from '../services/api/incasari.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/Rx';
import { ExcelService } from '../services/excel.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild, AfterViewInit, Type, Input, ViewEncapsulation } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component'
import { Incasari } from '../api/model/incasari';
import {CheltuieliService} from '../services/api/cheltuieli.service';


@Component({
  selector: 'app-addincasare',
  templateUrl: './addincasare.component.html',
  styleUrls: ['./addincasare.component.scss']
})
export class AddincasareComponent implements OnInit {
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
  confirm: any;

  incasari=new Incasari();
  homearray=[];
  activeindex=-1;
  title='Submit';
  servicedata: any;



  public user = {
    data: '',
    furnizor: '',
    number: 1,
    detalii: '',
    sumaTotala: 1,
    sumaFaraTVA: 1,
    sumaTva: 1,

  }

  form: any = {};
  displayedColumns: string[] = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA','delete', 'edit'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;

  pipe: DatePipe;
  private sorted = false;
  publishDate: any;
  datePipe: any;
  solds: any;

  SoldTotal:any;
  Count_Incasari_Intarziate: any;
  Count_Cheltuieli_Intarziate: any;



  constructor(public modalService: NgbModal, private formBuilder: FormBuilder, private alimService: IncasariService, public router: Router, private excelService:ExcelService, private cheltuieliService : CheltuieliService) {
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.rows, 'incasari_data');
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



    this.alimService.sold().subscribe((res =>
      this.SoldTotal = res
    ))

    this.alimService.Incasari_CountIntarziate().subscribe((res =>
      this.Count_Incasari_Intarziate = res
    ))

    this.cheltuieliService.Cheltuieli_CountIntarziate().subscribe((res =>
      this.Count_Cheltuieli_Intarziate = res
    ))


  }


  register(f: NgForm) {
    this.alimService.add(f.value).subscribe(() => { })
    // location.reload();
  }

  sold(){
    return this.alimService.sold().subscribe(() => { })

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


  reset(){
    this.alimService.incasariSearchAllGet().subscribe((res: any[]) => {
      this.rows = res;
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

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
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }


//incepand de aici
  getData(){
      this.alimService.incasariSearchAllGet().subscribe(res=>
        {
          this.rows = res;
        })
  }
  delete1(j){

        this.alimService.deleteId(j).subscribe(res=>
      {
          this.getData()
          console.log("delete");
        // location.reload();
      })

    }

    






  }





  // ----pana aici

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