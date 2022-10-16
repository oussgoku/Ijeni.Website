import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { PerstaCardComponent } from './persta-card/persta-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    CategoryCardComponent,
    PerstaCardComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
