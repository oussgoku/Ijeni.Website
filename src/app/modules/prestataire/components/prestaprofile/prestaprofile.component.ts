import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider/provider.service';

@Component({
  selector: 'app-prestaprofile',
  templateUrl: './prestaprofile.component.html',
  styleUrls: ['./prestaprofile.component.scss']
})
export class PrestaprofileComponent implements OnInit {
public id:string=''
public provider
  constructor(private activatedRoute:ActivatedRoute, private providerService:ProviderService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(result)=>{
        this.id = result.get('prestaId')
        console.log('prestataire id ', this.id);
        
      },
      error:(error)=>{
        console.log(`couldn't get the presta Id`, error);
        
      }
    })
    this.providerService.getProviderById(this.id).subscribe({
      next:(result)=>{
       this.provider=result['object'];
       console.log('provider:',this.provider);
       
        
      },
      error:(error)=>{
        console.log(`couldn't get the provider `, error);
        
      }
    })
  }

}
