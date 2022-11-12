import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromoService } from 'src/app/services/promo/promo.service';

@Component({
  selector: 'app-promodetails',
  templateUrl: './promodetails.component.html',
  styleUrls: ['./promodetails.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromodetailsComponent implements OnInit {
  public id: string
  promo
  images
  preload = true;
  done = false
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      "assets/js/jquery-3.6.0.min.js",
      'assets/js/bootstrap.js',
      "assets/js/main.js",
      "assets/js/plugin.js",
      //"assets/css/bootstrap.css",
      "assets/js/popper.min.js",
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('body')[0].appendChild(node);
    }
    this.done = true
  }
  constructor(private promoService: PromoService, private activatedRoute: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.loadScripts()
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('promoId')
    })
    this.promoService.getPromoDetailed(this.id).subscribe({
      next: (result) => {
        this.promo = result['object']
        console.log('promo', this.promo);
        this.images = this.promo['pictures']
        this.preload = false;
      },
      error: (err) => {
        console.log('error while fetching promo', err)
      }
    })
  }
  ChangeRoute(id) {
    this.router.navigateByUrl(`/promo/${id}`)
  }

}
