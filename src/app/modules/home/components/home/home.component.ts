import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Categories:Category[] = [];
  Parents:Category[] = [];
  constructor(private categoryService:CategoryService) {
    
   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next:(result)=>{
        console.log('Categories:',result['object']);
        this.Categories = result['object']
        this.Parents = this.Categories.filter((categorie)=>{
          return categorie.parentId==null ||  categorie.parentId==0
        })
        console.log('Parents:',this.Parents);
        
        console.log(this.Categories);
        
        
      },
      error:(error)=>{
        console.log('error while fetching categories',error);
        
      }
    })

  }

}
