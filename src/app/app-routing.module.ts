import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'prestataire',
    loadChildren: () => import('./modules/prestataire/prestataire.module').then(m => m.PrestataireModule)
  },
  {
    path: 'subcategory',
    loadChildren: () => import('./modules/subcategory/subcategory.module').then(m => m.SubcategoryModule)
  },
  {
    path: 'promo',
    loadChildren: () => import('./modules/promo/promo.module').then(m => m.PromoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
