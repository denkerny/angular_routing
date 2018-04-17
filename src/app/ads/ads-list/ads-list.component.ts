import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';
import { Observable } from 'rxjs/Observable';
import { AdInst } from '../models/ad';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  ads$: Observable<AdInst[]>
  
  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.ads$ = this.adsService.getAds();
  }

}
