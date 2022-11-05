import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider/provider.service';

@Component({
  selector: 'app-prestaprofile',
  templateUrl: './prestaprofile.component.html',
  styleUrls: ['./prestaprofile.component.scss']
})
export class PrestaprofileComponent implements OnInit {
  public id: string = ''
  public provider
  profilepicture
  gallerypictures: any[any] = []
  otherExperts: any[] = []
  constructor(private activatedRoute: ActivatedRoute, private providerService: ProviderService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (result) => {
        this.id = result.get('prestaId')
        console.log('prestataire id ', this.id);

        this.providerService.getProviderById(this.id).subscribe({
          next: (result) => {
            this.provider = result['object'];
            console.log('provider:', this.provider);
            this.provider.pictures.forEach((picture) => {
              if (picture.type == "ProfilePicture") {

                this.profilepicture = picture.uri
                console.log(this.profilepicture)
              } else if (picture.type == "Gallery") {
                this.gallerypictures.push(picture.uri)

              }
            })
            this.providerService.getProvidersByCategoryId(this.provider.otherServices[0].id).subscribe({
              next: (providers: any) => {
                this.otherExperts = providers["object"]["providers"].filter(provider => provider.id != this.provider.id).splice(0, 5)
                console.log(this.otherExperts)
              }
            })

          },
          error: (error) => {
            console.log(`couldn't get the provider `, error);

          }
        })
      },
      error: (error) => {
        console.log(`couldn't get the presta Id`, error);

      }
    })



  }

}
