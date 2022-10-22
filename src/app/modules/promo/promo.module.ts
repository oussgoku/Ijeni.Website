import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromosComponent } from './components/promos/promos.component';
import { PromoRoutingModule } from './promo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromodetailsComponent } from './components/promodetails/promodetails.component';



@NgModule({
  declarations: [
    PromosComponent,
    PromodetailsComponent
  ],
  imports: [
    CommonModule,
    PromoRoutingModule,
    SharedModule,
  ]
})
export class PromoModule { }
