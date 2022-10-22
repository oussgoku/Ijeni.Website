import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrestaCardComponent } from './components/presta-card/presta-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { PromoCardComponent } from './components/promo-card/promo-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrestaCardComponent,
    CategoryCardComponent,
    PromoCardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PrestaCardComponent,
    CategoryCardComponent,
    PromoCardComponent,
    
  ]

})
export class SharedModule { }
