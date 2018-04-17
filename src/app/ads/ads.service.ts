import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AdInst } from './models/ad';
import { of } from 'rxjs/observable/of';
import { AdsArray } from './ads-mock';



@Injectable()
export class AdsService {

  constructor() { }

  getAds():Observable<AdInst[]>{
    return of(AdsArray);
  }

  getAd(id: number):Observable<AdInst>{
    const ad = AdsArray.find( ad => ad.id === id);
    return of(ad)
  }

}


