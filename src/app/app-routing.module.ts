import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncasariComponent } from './incasari/incasari.component';


const routes: Routes = [
 
  {path: 'incasari' , component : IncasariComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
