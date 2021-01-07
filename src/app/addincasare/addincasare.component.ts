import { Component, OnInit } from '@angular/core';
import { IncasariService } from '../api/api/incasari.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addincasare',
  templateUrl: './addincasare.component.html',
  styleUrls: ['./addincasare.component.scss']
})
export class AddincasareComponent implements OnInit {

  form: any = {};
  public rows: any;

  constructor(private alimService : IncasariService, public router : Router) { }

  ngOnInit(): void {
  }

  register(f: NgForm) {
    this.alimService.add(f.value).subscribe(() => { })
    // location.reload();
    location.href = "\add";
  }

  update(number){
    this.alimService.updateNumber(number.number).subscribe((res) => {
      this.rows = res;})
  }


  // onSubmit() {
  //   this.alimService.add(this.form).subscribe(
  //     data => {
      
     
  //     }
  //   );
  // }


  add(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}




