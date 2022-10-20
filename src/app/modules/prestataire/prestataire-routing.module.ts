import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestalistComponent } from './components/prestalist/prestalist.component';


const routes: Routes = [
  {
    path: '',
    component:PrestalistComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestataireRoutingModule { }