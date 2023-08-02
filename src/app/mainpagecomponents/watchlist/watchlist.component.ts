import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MasterserviceService } from 'src/app/service/masterservice.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit{
  watchlistdata: any = [];
  tvshowwatchlist: any = [];
  componentflag: any = false;
  flag: any;
  constructor(private services:MasterserviceService, public spinner: NgxSpinnerService){
    this.watchlistdata =this.services.watchlist
    this.tvshowwatchlist = this.services.tvshowatchlist
    if(this.watchlistdata.length == 0 && this.tvshowwatchlist.length == 0){
      this.flag = true;
    }else{
      this.flag = false;
    }
  }

  ngOnInit(): void{
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
      this.componentflag=true;
    }, 500);
  }

  removeFromwatchlist(obj: any){
    if(confirm("Do you really want to remove from watch list") == true){
      this.services.removeFromwatchlist(obj);
      if(this.services.watchlist.length == 0 && this.services.tvshowatchlist.length == 0){
        this.flag = true;
      }  
    }
  }

  removeFromTvwatchlist(obj: any){
    if(confirm("Do you really want to remove from watch list") == true){
      this.services.removeFromTVwatchlist(obj);
      if(this.services.tvshowatchlist.length == 0 && this.services.watchlist.length == 0){
        this.flag = true;
      }  
    }
  }

}
