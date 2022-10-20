import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider/provider.service';

@Component({
  selector: 'app-prestalist',
  templateUrl: './prestalist.component.html',
  styleUrls: ['./prestalist.component.scss']
})
export class PrestalistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private providerService: ProviderService) { }
  providers = []
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      let categoryId = Number(params.get("categoryId"))
      this.providerService.getProvidersByCategoryId(categoryId).subscribe({next: (providers:any) => {
        this.providers = providers["object"]["providers"]
        console.log(this.providers)
      },
      error: (error) => {
        console.log('error while fetching providers', error);

      }
    })
    });
  }

}
