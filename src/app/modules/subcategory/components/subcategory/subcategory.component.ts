import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  categories = []
  subcategories = []
  categoryId
  preloader=true;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }
  grid = true
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.categoryId = params.get("categoryId")
      console.log(this.categoryId)
      this.categoryService.getCategories().subscribe({
        next: (result) => {
          this.categories = result['object']
          this.subcategories = this.categories.filter((categorie) => {
            return categorie.parentId == this.categoryId
          })
        },
        error: (error) => {
          console.log('error while fetching subcategories', error);
  
        },
        complete:()=>{
          this.preloader=false
        }
      })
    })



  }
  change(state:boolean){
    this.grid = state
  }

}
