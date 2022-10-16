import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category?: Category
  categories
  children
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (result) => {
        this.categories = result['object']
        this.children= this.categories.filter((category) => category.parentId === this.category.id)
        // console.log('children categoryCard',this.children);
        if(this.children.length>4){
          this.children = this.children.slice(0,4)
        }
        
        
      }
    })
  }

}
