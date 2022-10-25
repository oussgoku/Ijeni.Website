import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestalistComponent } from './components/prestalist/prestalist.component';
import { PrestataireRoutingModule } from './prestataire-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrestaprofileComponent } from './components/prestaprofile/prestaprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    PrestalistComponent,
    PrestaprofileComponent
  ],
  imports: [
    CommonModule,
    PrestataireRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PrestataireModule { }
