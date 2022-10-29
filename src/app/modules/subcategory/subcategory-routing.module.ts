import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';

const routes: Routes = [
  {
    path: '',
    component:SubcategoryComponent,
  },
  {
    path:'categories', 
    component:CategoriesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryRoutingModule { }