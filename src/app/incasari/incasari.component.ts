import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IncasariService } from '../api/api/incasari.service';



@Component({
  selector: 'app-incasari',
  templateUrl: './incasari.component.html',
  styleUrls: ['./incasari.component.css'],
  encapsulation: ViewEncapsulation.None,
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
// ----------------------------
 

constructor(private incasariService : IncasariService) { 
   
  }

  ngOnInit(){
    this.incasariService.incasariSearchAllGet().subscribe((res : any[]) => {
      this.rows = res;
    })
  }




  register(f:NgForm){
    this.incasariService.add(f.value).subscribe(()=>{})
  }


  delete(test){
    // console.log("numar: " + test.uid);
    this.incasariService.deleteIncasari(test.number).subscribe((res)=>{console.log(res)})
  }

  search(data){

    this.incasariService.getPetById(data.number).subscribe((res )=>{
      this.auto= res;

      
      console.log(res);
    })
  }

  search2(data1){
    // console.log("numar: " + data1.furnizor);
    this.incasariService.getPetByFurnizor(data1.furnizor).subscribe((res )=>{
      this.furnizor= res;
      // this.auto = res.auto;
      // this.furnizor = res.furnizor;
      
      console.log(res);
    })
    // location.reload();
  }
  


}
