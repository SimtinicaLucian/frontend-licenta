import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IncasariComponent } from './incasari/incasari.component';
import { AddComponent } from './add/add.component';
import { AddincasareComponent } from './addincasare/addincasare.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TestComponent } from './test/test.component';
import { ViewIncasariComponent } from './view-incasari/view-incasari.component';
import { CheltuieliComponent } from './cheltuieli/cheltuieli.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { ViewCheltuieliComponent } from './view-cheltuieli/view-cheltuieli.component';
import { SalariuComponent } from './salariu/salariu.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'incasari', component: IncasariComponent },
  { path: 'add', component: AddComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'addincasare', component: AddincasareComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'forgot', component: PasswordForgotComponent},
  { path: 'reset', component: PasswordResetComponent},
  { path: 'test', component: TestComponent},
  { path: 'view', component: ViewIncasariComponent},
  { path: 'view_cheltuieli', component: ViewCheltuieliComponent},
  { path: 'cheltuieli', component: CheltuieliComponent},
  { path: 'schimbare', component: PasswordRecoveryComponent},
  { path: 'salariu', component: SalariuComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' }), NgxDatatableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }