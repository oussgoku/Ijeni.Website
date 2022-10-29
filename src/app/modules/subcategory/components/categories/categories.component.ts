import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Categories: Category[] = [];
  Parents: Category[] = [];
  toDisplay: any[any]
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (result) => {
        this.Categories = result['object']
        this.Parents = this.Categories.filter((categorie) => {

          return categorie.parentId == null || categorie.parentId == 0

        })
      },
      error: (error) => {
        console.log('error while fetching categories', error);
      },
      complete: () => {
        let childs: any[any] = []
        this.toDisplay = this.Parents.map((parent) => {

          childs = []
          this.Categories.map((category) => {
            if (category.parentId == parent.id) {

              childs.push(category)
              return childs

            }
          })
          return { parent: parent, categoriesChild: childs }
        })
        console.log(this.toDisplay);

      }
    })





    console.log('to Display: ', this.toDisplay);

  }

}
