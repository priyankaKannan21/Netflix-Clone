import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MasterserviceService } from 'src/app/service/masterservice.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit{
  moviedetail: any;
  flag: any = false;
  constructor(private service: MasterserviceService, public spinner: NgxSpinnerService){
    this.moviedetail = this.service.moviedetail
    if(this.moviedetail != null){
      if (this.moviedetail.overview === '') {
        this.moviedetail.overview =
          this.moviedetail.original_title +
          ' TV series is set in a hospital at Princeton University.' +
          ' But I suppose they will make it in a studio in California. ';
      }
      let data: Array<string> = this.moviedetail.release_date.split('-');
      data.reverse();
      this.moviedetail.release_date = data.join('-');
      console.log(this.moviedetail);
  }
  }

  ngOnInit(): void{
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.flag = true;
    }, 500);
  }

  moviewatchlist(data: any){
    const newdata = this.service.watchlist;
    let newflag = true;
    for(let data1 of newdata){
      if(data1 === data){
        alert("Already in Watchlist!!!🤔")
        newflag = false;
        break;
      }
    }    
    if(newflag){
      this.service.addToWatchList(data);
      alert("Added to watchlist!!!😁");
    }
  }
}
