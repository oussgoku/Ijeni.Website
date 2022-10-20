import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrestaCardComponent } from './components/presta-card/presta-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrestaCardComponent,
    CategoryCardComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PrestaCardComponent,
    CategoryCardComponent
  ]

})
export class SharedModule { }
