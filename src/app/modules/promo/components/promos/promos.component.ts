import { Component, Input, OnInit } from '@angular/core';
import { PromoService } from 'src/app/services/promo/promo.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss'],
})
export class PromosComponent implements OnInit {
  promos = [];
  constructor(private promoService: PromoService) { }

  ngOnInit(): void {

    this.promoService.getLastPromos().subscribe({
      next: (result) => {
        this.promos = result['object']
  
      },
      error: (error) => {
        console.log('error while getting promos', error)
      }
    })

  }


}