import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AlimComponent } from '../app/alim/alim.component';
import { HomeComponent } from '../app/home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IncasariComponent } from './incasari/incasari.component';
import { AddComponent } from './add/add.component';

// -----------------------------------------------------------




const routes: Routes = [
 
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'alim' , component : AlimComponent },
  {path: 'home' , component : HomeComponent },
  {path: 'incasari' , component : IncasariComponent },
  {path: 'add' , component : AddComponent }



  // -----------------------------------------------------


  


  // {path: '', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules}    ), NgxDatatableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }