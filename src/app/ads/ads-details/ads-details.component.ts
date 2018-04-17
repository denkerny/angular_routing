import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdsService } from '../ads.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdInst } from '../models/ad';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.css']
})
export class AdsDetailsComponent implements OnInit, OnDestroy{
  ad: AdInst
  template: string = 'Hey, good choice with choosen '
  subscription: Subscription

  constructor(private adsService: AdsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.switchMap((params: ParamMap) => {
      const id = Number(params.get('id'));
      return this.adsService.getAd(id);
    }).subscribe((ad: AdInst) => this.ad = ad)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
