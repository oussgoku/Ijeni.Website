import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';



@NgModule({
  declarations: [
    SubcategoryComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubcategoryRoutingModule
  ]
})
export class SubcategoryModule { }
