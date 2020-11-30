import { Component, OnInit,ViewChild, AfterViewInit, Type, Input} from '@angular/core';
import { IncasariService } from '../api/api/incasari.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { DatePipe } from '@angular/common';
import { DashboardService } from '../api/api/dashboard.service';


import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';





import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


import 'rxjs/Rx';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-widget-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

// export class AddComponent implements OnInit , AfterViewInit  {
export class AddComponent implements OnInit  {
  public columns: any;
  public columns2: any;
  public rows: any;
  public variabile: any;
  public auto: any;
  // public furnizor: any;
  number: any;
  // ---------------------------
  furniz: string;
  aut: string;
  num: any;
  dat: string;
  totalSum: any;
  totalSumTVA: any;
  totalSumFaraTVA: any;
  totalSumTVADay: any;

  furnizor: any;
  between: any;
  

  form: any = {};
  displayedColumns: string[] = ['id','data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;

  pipe: DatePipe;

  // data : any;
  private sorted = false;
  publishDate: any;
  datePipe: any;
  resource: any;
  dateFromBackend : any;

  data: Date;

  pieChart = [];

//   filterForm = new FormGroup({
//     fromDate: new FormControl(),
//     toDate: new FormControl(),
// });


// get fromDate() { return this.filterForm.get('fromDate').value; }
// get toDate() { return this.filterForm.get('toDate').value; }

// ----------chart


// ----------chart







  constructor(private formBuilder : FormBuilder, private alimService : IncasariService , public router : Router, public dashboardService: DashboardService) { 

  }
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;




  
//   filterForm = new FormGroup({
//     fromDate: new FormControl(),
//     toDate: new FormControl(),
// });


// get fromDate() { return this.filterForm.get('fromDate').value; }
// get toDate() { return this.filterForm.get('toDate').value; }
dataList = [];
private regForm: any;
  ngOnInit(): void {

    this.regForm = this.formBuilder.group({
      firstDate:['', Validators.required],
      secondDate:['', Validators.required]

    })
    this.alimService.incasariSearchAllGet().subscribe((res)=> {
      //  this.dateFromBackend = res.map(object => object.data)
      

      // console.log(this.dateFromBackend)
      this.rows = res
      // console.log(this.rows);
      
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;



      this.pieChart = this.dashboardService.pieChart();

      // this.pipe = new DatePipe('en');
      // this.dataSource.filterPredicate = (data, filter) =>{
      //   if (this.fromDate && this.toDate) {
      //     console.log(data.data);
      //     return data.data >= this.fromDate && data.data <= this.toDate;
      //   }
      //   return true;
      // }


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


 

    
      // ----------chart



      // ----------chart


      

    }

    

  


  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  
  
// total(){
//    return this.alimService.searchTotal().subscribe((res)=> {
//      this.rows = res;
//     console.log("Sum is: " + this.rows);
//   })
// }


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
    // ---------------
  }




  
  applyFilters() {
    this.dataSource.filter = ''+Math.random();
  }

  removeAll() {
    this.dataSource.data = [];
  }

  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = data;
  }





  search(data){
    // console.log("numar: " + data.number);
    this.alimService.getPetById(data.number).subscribe((res )=>{
      this.auto= res;
      console.log(res);
    })
    
    // location.reload();
  }


  search2(data1){
    // console.log("numar: " + data1.furnizor);
    this.alimService.getPetByFurnizor(data1.furnizor).subscribe((res )=>{
      this.rows= res;
      this.dataSource = new MatTableDataSource(this.rows);
      // this.auto = res.auto;
      // this.furnizor = res.furnizor;
  
      console.log(res);
    })
    // location.reload();
  }

  search3(f: NgForm){
    this.alimService.getBetweenDate(f.value.firstDate, f.value.lastDate).subscribe((res )=>{
      this.between= res;
      console.log("res: " + res);
    })

  
    
  }


  // getTotalCost() {
  //   return this.rows.map(t => t.sumaTotala).reduce((acc, value) => acc + value, 0);
  // }




  // update(data1){
  //   this.alimService.updateNumber(data1.number).subscribe((res )=>{
  //     this.furniz= res;
  //   })
  // }

  update(data, f: NgForm) {
    this.alimService.getPetById(data.number).subscribe((res )=>{
      this.auto= res;
      console.log(res);
      this.alimService.updateNumber(f.value)
    // location.reload();
  })

}




add(pageName:string):void{
  this.router.navigate([`${pageName}`]);
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