import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IncasariService } from '../api/api/incasari.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlimentariService } from '../api';






@Component({
  selector: 'app-incasari',
  templateUrl: './incasari.component.html',
  styleUrls: ['./incasari.component.scss']
})
export class IncasariComponent implements OnInit {
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
  // ----------------------------




  constructor(public alimService: IncasariService , public router : Router) {
    this.columns = [
      { name: 'data' },
      { name: 'furnizor' },
      { name: 'number' },
      { name: 'detalii' },
      { name: 'sumaTotala' },
      { name: 'sumaFaraTVA' },
      { name: 'sumaTVA' }
    ]
  }


  ngOnInit() {
    this.alimService.incasariSearchAllGet().subscribe((res: any[]) => {
      this.rows = res;
      console.log(res);



    })


    // --------------------------------
  }

  register(f: NgForm) {
    this.alimService.add(f.value).subscribe(() => { })
    location.reload();
  }

  delete(test) {

    this.alimService.deleteIncasari(test.number).subscribe((res) => { })
    
    location.reload();
  }

  search(data) {

    this.alimService.getPetById(data.number).subscribe((res) => {
      this.auto = res;
      // this.auto = res.auto;
      // this.furnizor = res.furnizor;

      console.log(res);
    })
    // location.reload();
  }

  search2(data1) {
    this.alimService.getPetByFurnizor(data1.furnizor).subscribe((res) => {
      this.furnizor = res;
      // this.auto = res.auto;
      // this.furnizor = res.furnizor;

      console.log(res);
    })
    // location.reload();
  }


  // --------------------------------

  Search() {

    if (this.furniz != "") {


      this.rows = this.rows.filter(res => {
        return res.furnizor.toLocaleLowerCase().match(this.furniz.toLocaleLowerCase());
      });



    } else if (this.furniz == "") {
      this.ngOnInit();
    }
  }

  // -----------------------------




  SearchNumber() {


    if (this.num != this.rows) {


      this.alimService.getPetById(this.num).subscribe((res) => {
        this.rows = res;

      });

      this.rows = this.rows.filter(res => {
        return res.number.toLocaleLowerCase().match(this.num.toLocaleLowerCase());
      });


      // this.rows=this.rows.filter(res=>{
      //   return res.num.toString().match(this.num.toString());
      // });


    } else if (this.num == this.rows) {
      this.ngOnInit();
    }



  }


  // this.alimService.getPetById(data.number).subscribe((res )=>{
  //   this.auto= res;


  SearchData() {

    if (this.dat != "") {


      this.rows = this.rows.filter(res => {
        return res.data.toLocaleLowerCase().match(this.dat.toLocaleLowerCase());
      });



    } else if (this.dat == "") {
      this.ngOnInit();
    }
  }

  add(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}