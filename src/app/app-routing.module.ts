import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IncasariComponent } from './incasari/incasari.component';
import { AddComponent } from './add/add.component';
import { AddincasareComponent } from './addincasare/addincasare.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'incasari', component: IncasariComponent },
  { path: 'add', component: AddComponent },
  { path: 'addincasare', component: AddincasareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules }), NgxDatatableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }