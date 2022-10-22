import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private promoService:PromoService, private activatedRoute:ActivatedRoute) { }

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

}
