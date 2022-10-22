import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromoService } from 'src/app/services/promo/promo.service';

@Component({
  selector: 'app-promodetails',
  templateUrl: './promodetails.component.html',
  styleUrls: ['./promodetails.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PromodetailsComponent implements OnInit {
public id:string
promo
images
  constructor(private promoService:PromoService, private activatedRoute:ActivatedRoute, private router:Router, private location:Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.id = param.get('promoId')
    })
    this.promoService.getPromoDetailed(this.id).subscribe({
      next:(result)=>{
        this.promo = result['object']
        console.log('promo',this.promo);
        this.images=this.promo['pictures']
        
      },
      error:(err)=>{
        console.log('error while fetching promo', err)
      }
    })
  }
  ChangeRoute(id){
    this.router.navigateByUrl(`/promo/${id}`)
  }

}
