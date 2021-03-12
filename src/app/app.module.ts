import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiModule } from '../app/services/api';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AgmCoreModule} from '@agm/core';
import { IncasariComponent } from './incasari/incasari.component';
import { AddComponent } from './add/add.component';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { multicast } from 'rxjs-compat/operator/multicast';
import { AddincasareComponent } from './addincasare/addincasare.component';
// --------------
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { ExcelService } from './services/excel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalDeleteIncasariComponent } from './modal-delete-incasari/modal-delete-incasari.component';
import { ModalUpdateIncasariComponent } from './modal-update-incasari/modal-update-incasari.component';
import { ChartsModule } from 'ng2-charts';
import {MatIconModule} from '@angular/material/icon';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../app/helpers/auth.interceptor';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
﻿import {APP_INITIALIZER } from '@angular/core';












@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    IncasariComponent,
    AddComponent,
    AddincasareComponent,
    ModalContentComponent,
    ModalDeleteIncasariComponent,
    ModalUpdateIncasariComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PasswordForgotComponent,
    PasswordResetComponent,

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
    }),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    NgbModule,
    ChartsModule,
    MatIconModule,
    MatMomentDateModule,
    MatListModule,
    
   

    




  ],
  entryComponents: [AppComponent],

  // providers: [ExcelService, MatDatepickerModule, DatePipe,
  // ]
// })

providers: [{
  provide : HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi   : true,
},
ExcelService, MatDatepickerModule, DatePipe,],
bootstrap: [AppComponent]
})

export class AppModule { }