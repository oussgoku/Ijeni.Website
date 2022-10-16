import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { PromoService } from 'src/app/services/promo/promo.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Categories: Category[] = [];
  Parents: Category[] = [];
  lastPromos = [];
  promoLoaded:boolean = false;
  constructor(private categoryService: CategoryService, private promoService: PromoService) {

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (result) => {
        console.log('Categories:', result['object']);
        this.Categories = result['object']
        this.Parents = this.Categories.filter((categorie) => {
          return categorie.parentId == null || categorie.parentId == 0
        })
        console.log('Parents:', this.Parents);

        console.log(this.Categories);


      },
      error: (error) => {
        console.log('error while fetching categories', error);

      }
    })
    // Last Promos !
    this.promoService.getLastPromos().subscribe({
      next: (result) => {
        this.lastPromos = result['object']
        console.log('last Promos', this.lastPromos);
        this.promoLoaded = true

      },
      error: (error) => {
        console.log('error while getting promos', error)
      }
    })

  }

}
