import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdsService } from './ads.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [],
  providers: [AdsService]
})
export class AdsModule { }
