import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './mainpagecomponents/navbar/navbar.component';
import { MainpageComponent } from './mainpagecomponents/mainpage/mainpage.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { TvshowComponent } from './tvshowscomponent/tvshow/tvshow.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WatchlistComponent } from './mainpagecomponents/watchlist/watchlist.component';
import { PaymentpageComponent } from './mainpagecomponents/paymentpage/paymentpage.component';
import { MasterserviceService } from './service/masterservice.service';
import { DetailpageComponent } from './mainpagecomponents/detailpage/detailpage.component';
import { MoviedetailComponent } from './mainpagecomponents/moviedetail/moviedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    TvshowComponent,
    WatchlistComponent,
    PaymentpageComponent,
    DetailpageComponent,
    MoviedetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MasterserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
