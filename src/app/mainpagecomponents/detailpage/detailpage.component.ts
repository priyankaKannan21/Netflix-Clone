import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MasterserviceService } from 'src/app/service/masterservice.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css'],
})
export class DetailpageComponent implements OnInit {
  detaildata: any;
  componentflag: any = false;
  constructor(private service: MasterserviceService, public spinner: NgxSpinnerService) {
      this.detaildata = this.service.detaileddata;
      if(this.detaildata != null){
        if (this.detaildata.overview === '') {
          this.detaildata.overview =
            this.detaildata.original_name +
            ' TV series is set in a hospital at Princeton University.' +
            ' But I suppose they will make it in a studio in California. ';
        }
        let data: Array<string> = this.detaildata.first_air_date.split('-');
        data.reverse();
        this.detaildata.first_air_date = data.join('-');
        console.log(this.detaildata);
    }
  }

  ngOnInit() : void{
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
      this.componentflag=true;
    }, 500);
  }

  tvshowwatchlist(data: any){
    const newdata = this.service.tvshowatchlist;
    let newflag = true;
    for(let data1 of newdata){
      if(data1 === data){
        alert("Already in Watchlist!!!🤔")
        newflag = false;
        break;
      }
    }    
    if(newflag){
      this.service.tvshowaddtowatchlist(data);
      alert("Added to watchlist!!!😁");
    }

  }
}
