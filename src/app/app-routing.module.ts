import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { TvshowComponent } from './tvshowscomponent/tvshow/tvshow.component';
import { MainpageComponent } from './mainpagecomponents/mainpage/mainpage.component';
import { WatchlistComponent } from './mainpagecomponents/watchlist/watchlist.component';
import { PaymentpageComponent } from './mainpagecomponents/paymentpage/paymentpage.component';
import { DetailpageComponent } from './mainpagecomponents/detailpage/detailpage.component';
import { MoviedetailComponent } from './mainpagecomponents/moviedetail/moviedetail.component';

const routes: Routes = [
  { path: '', component: MainpageComponent},
  { path: 'movies', component: MainpageComponent},
  { path: 'tvshows', component: TvshowComponent},
  { path: 'watchlist', component: WatchlistComponent},
  { path: 'premium', component: PaymentpageComponent},
  { path:'showdetail', component: DetailpageComponent},
  { path:'moviedetail', component: MoviedetailComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
