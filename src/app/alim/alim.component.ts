import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlimentariService } from '../api/api/alimentari.service';
import {NgForm} from '@angular/forms';
import { employees } from '../../datamodel/employess.model'

@Component({
  selector: 'app-alim',
  templateUrl: './alim.component.html',
  styleUrls: ['./alim.component.scss'],
  encapsulation: ViewEncapsulation.None,
  


  
})
export class AlimComponent implements OnInit {
  public columns: any;
  public columns2: any;
  public rows: any;
  public variabile: any;
  public auto: any;
  public furnizor: any;
  number: any;
  // ---------------------------
  empolyess: employees[] =[];
  furniz: string;
  aut: string;
  num: any;
  dat: string;
// ----------------------------
  



  constructor(public alimService : AlimentariService) { 
    this.columns = [
      {name: 'data'},
      {name: 'furnizor'},
      {name: 'number'},
      {name: 'auto'},
      {name: 'sumaTotala'},
      {name: 'litri'}
    ]
   }


  ngOnInit() {
    this.alimService.alimentariSearchAllGet().subscribe((res : any[]) => {
      this.rows = res;
      this.empolyess = res;

      
    })

  
// --------------------------------
  }

register(f: NgForm){
  this.alimService.add(f.value).subscribe(()=>{})
  location.reload();
}

delete(test){
  // console.log("numar: " + test.uid);
  this.alimService.deletePet(test.number).subscribe((res)=>{console.log(res)})
  location.reload();
}

search(data){
  // console.log("numar: " + data.number);
  this.alimService.getPetById(data.number).subscribe((res )=>{
    this.auto= res;
    // this.auto = res.auto;
    // this.furnizor = res.furnizor;
    
    console.log(res);
  })
  // location.reload();
}

search2(data1){
  // console.log("numar: " + data1.furnizor);
  this.alimService.getPetByFurnizor(data1.furnizor).subscribe((res )=>{
    this.furnizor= res;
    // this.auto = res.auto;
    // this.furnizor = res.furnizor;
    
    console.log(res);
  })
  // location.reload();
}


// --------------------------------

Search()
{
  
  if(this.furniz != ""){


  this.rows=this.rows.filter(res=>{
    return res.furnizor.toLocaleLowerCase().match(this.furniz.toLocaleLowerCase());
  });

 

  }else if (this.furniz ==""){
  this.ngOnInit();
}
}

// -----------------------------


SearchAuto()
{
  
  if(this.aut != ""){


  this.rows=this.rows.filter(res=>{
    return res.auto.toLocaleLowerCase().match(this.aut.toLocaleLowerCase());
  });

 

  }else if (this.aut ==""){
  this.ngOnInit();
}
}


SearchNumber()
{


  if(this.num != this.rows){
    
    
    this.alimService.getPetById(this.num).subscribe((res )=>{
    this.rows= res;

  });

  this.rows=this.rows.filter(res=>{
    return res.number.toLocaleLowerCase().match(this.num.toLocaleLowerCase());
  });


  // this.rows=this.rows.filter(res=>{
  //   return res.num.toString().match(this.num.toString());
  // });


}else if (this.num ==this.rows){
  this.ngOnInit();
}



}


// this.alimService.getPetById(data.number).subscribe((res )=>{
//   this.auto= res;


SearchData()
{
  
  if(this.dat != ""){


  this.rows=this.rows.filter(res=>{
    return res.data.toLocaleLowerCase().match(this.dat.toLocaleLowerCase());
  });

 

  }else if (this.dat ==""){
  this.ngOnInit();
}
}


}