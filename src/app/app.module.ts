import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { AdsModule } from './ads/ads.module';
import { AdsContainerComponent } from './ads/ads-container/ads-container.component';
import { AdsListComponent } from './ads/ads-list/ads-list.component';
import { AdsDetailsComponent } from './ads/ads-details/ads-details.component';


const routes: Route[] = [
  { path: '', redirectTo: 'ads', pathMatch: 'full' },
  { path: 'ads', component: AdsContainerComponent, children:[
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AdsListComponent },
      { path: 'all/:id', component: AdsDetailsComponent }
  ] },
]


@NgModule({
  declarations: [
    AppComponent,
    AdsDetailsComponent,
    AdsContainerComponent,
    AdsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
