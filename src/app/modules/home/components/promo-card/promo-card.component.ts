import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { PromoService } from 'src/app/services/promo/promo.service';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss']
})
export class PromoCardComponent implements OnInit {

  @Input() promo?
  categories
  category
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  //  this.categoryService.getCategories().subscribe({
  //   next:(result)=>{
  //     this.categories=result['object']

  //     this.category = this.categories.find((categorie)=>categorie.id==this.promo.promoServiceCategoryId)
      
      
  //   }
    
  //  })
  //  console.log(this.category);

  }

}
