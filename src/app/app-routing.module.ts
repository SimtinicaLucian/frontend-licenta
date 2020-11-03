import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncasariComponent } from '../app/incasari/incasari.component';


const routes: Routes = [
 
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'incasari' , component : IncasariComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
