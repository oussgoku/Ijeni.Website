import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CategoryService } from 'src/app/services/category/category.service';
import { PromoService } from 'src/app/services/promo/promo.service';
import { Category } from 'src/app/shared/models/category';
import { keywords } from 'src/app/shared/const';
import { StatsService } from 'src/app/services/stats/stats.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Categories: Category[] = [];
  Parents: Category[] = [];
  lastPromos = [];
  promoLoaded: boolean = false;
  stats
  categoriesDisplayed
  constructor(private categoryService: CategoryService, private promoService: PromoService,
    private title: Title, private meta: Meta, private statsService: StatsService) {
  }

  ngOnInit(): void {

    this.title.setTitle(keywords.TITLE)
    this.meta.addTag({ name: "description", content: keywords.DESCRIPTION })

    this.statsService.getStats().subscribe({
      next: (result) => {
        this.stats = result["object"];
        console.log(this.stats)
      }
    })
    this.categoryService.getCategories().subscribe({
      next: (result) => {
        this.Categories = result['object']
        this.Parents = this.Categories.filter((categorie) => {

          return categorie.parentId == null || categorie.parentId == 0

        })
        this.categoriesDisplayed = this.Parents.slice(0, 12)
      },
      error: (error) => {
        console.log('error while fetching categories', error);
      }
    })

    // Last Promos !
    this.promoService.getLastPromos().subscribe({
      next: (result) => {
        this.lastPromos = result['object']
        this.promoLoaded = true

      },
      error: (error) => {
        console.log('error while getting promos', error)
      }
    })

  }

}
