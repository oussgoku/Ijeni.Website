import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromosComponent } from './components/promos/promos.component';

const routes: Routes = [
  {
    path: '',
    component:PromosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }