import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MasterserviceService } from 'src/app/service/masterservice.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  alltvshowdata: any = [];
  componentflag: any = false;
  constructor(private service:MasterserviceService, public spinner: NgxSpinnerService){
    this.openfunction();
  }

  openfunction(){
    this.service.getalltvshow().subscribe((data) =>{
      this.alltvshowdata = data;
      this.alltvshowdata = this.alltvshowdata['results'];
      console.log(this.alltvshowdata);
    })
  }
  
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
      this.componentflag=true;
    }, 500);
  }

  Previousdata(){
    if(this.service.tvpagenumber==1){
      alert("Click next to see tv shows");
    }else{
      this.componentflag=false;
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
        this.componentflag=true;
      }, 500);
      this.service.tvpagenumber -=1
      this.service.getalltvshow().subscribe((data) =>{
        this.alltvshowdata = data;
        this.alltvshowdata = this.alltvshowdata['results'];
        console.log(this.alltvshowdata);
        
      })
    }
  }
  Nextdata(){
    if(this.service.tvpagenumber>200){
      alert("Click previos to see tv shows");
    }else{
      this.componentflag=false;
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
        this.componentflag=true;
      }, 500);
      this.service.tvpagenumber +=1
      this.service.getalltvshow().subscribe((data) =>{
        this.alltvshowdata = data;
        this.alltvshowdata = this.alltvshowdata['results'];
        console.log(this.alltvshowdata);
      })
    }
  }

  detaileddata(obj: any){
    this.service.detaileddata = obj;
  }

  sendsearchdata(datastr: string){
    if(datastr != ''){
      this.service.getsearchdata(datastr).subscribe((data) =>{
        this.alltvshowdata = data; 
        this.alltvshowdata = this.alltvshowdata['results'];       
      });
    }else{
      this.openfunction();
    }
  }
}
