import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlimComponent } from './alim/alim.component';
import { HomeComponent } from './home/home.component';
import { ApiModule } from './api';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';







// -----------------------------------
import { AgmCoreModule } from '@agm/core';
import { IncasariComponent } from './incasari/incasari.component';
import { AddComponent } from './add/add.component';



import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { multicast } from 'rxjs-compat/operator/multicast';
// ------------------------------------



@NgModule({
  declarations: [
    AppComponent,
    AlimComponent,
    HomeComponent,
    FilterPipe,
    IncasariComponent,
    AddComponent,




    // ---------------------------------------





  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBo0RCdL-YLBmKPTgxXzYZ0GGTtIljHmlM'
    }),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule



  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }