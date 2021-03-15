import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { BsDropdownModule} from 'ngx-bootstrap';



@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule,
      NgProgressModule,
      BrowserAnimationsModule,
      BrowserModule,
      BsDropdownModule.forRoot(),

  
      // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
      AlertModule.forRoot({ maxMessages: 5, timeout: 5000 })
    ],
    exports: [
      
    ]
  })
  export class SharedModule { }