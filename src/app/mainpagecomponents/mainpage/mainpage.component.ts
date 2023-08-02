import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MasterserviceService } from 'src/app/service/masterservice.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit{
  optionvalue: any;
  moviedataType: any;
  allmoviedata: any;
  flag: any = false;
  constructor(private services: MasterserviceService, private spinner:NgxSpinnerService) {
    this.services.getmovieTypelist().subscribe((data) => {

      this.optionvalue = data;
      this.optionvalue = this.optionvalue['genres']
      console.log(this.optionvalue);
      
    });
    this.services.getAllMovies().subscribe((data) =>{
      this.allmoviedata = data;
      this.allmoviedata = this.allmoviedata['results']
      console.log(this.allmoviedata);
    })
  }

  ngOnInit():void{
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
      this.flag = true;
    }, 500);
  }
  Previousdata(){
    this.services.previoussection();
    this.flag=false;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.flag=true;
    }, 500);
    if(this.moviedataType == null){
      this.services.getAllMovies().subscribe((data) =>{
        this.allmoviedata = data;
        this.allmoviedata = this.allmoviedata['results']
        console.log(this.allmoviedata);
      })
    }else{
      this.services.getMoviesByType(this.moviedataType).subscribe((data) =>{
        this.allmoviedata = data;
        this.allmoviedata = this.allmoviedata['results']
        console.log(data);
      })
    }
  }
  Nextdata(){
    this.services.nextsection();
    this.flag=false;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.flag=true;
    }, 500);
    if(this.moviedataType == null){
      this.services.getAllMovies().subscribe((data) =>{
        this.allmoviedata = data;
        this.allmoviedata = this.allmoviedata['results']
        console.log(this.allmoviedata);
      })
    }else{
      this.services.getMoviesByType(this.moviedataType).subscribe((data) =>{
        this.allmoviedata = data;
        this.allmoviedata = this.allmoviedata['results']
        console.log(data);
      })
    }
  }
  filterMovie(movieType:string){
    this.services.nextsection();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.flag=true;
    }, 500);

    this.moviedataType = movieType;
    this.services.pageNumber=1;
    this.services.getMoviesByType(movieType).subscribe((data) =>{
      this.allmoviedata = data;
      this.allmoviedata = this.allmoviedata['results']
      console.log(data);
    })
  }

  watchlist(data:any){
    const newdata = this.services.watchlist;
    let newflag = true;
    for(let data1 of newdata){
      if(data1 === data){
        alert("Already in Watchlist!!!🤔")
        newflag = false;
        break;
      }
    }    
    if(newflag){
      this.services.addToWatchList(data);
      alert("Added to watchlist!!!😁");
    }
  }

  moviedetail(obj: any){
    console.log(obj);
    this.services.moviedetail = obj;
  }
}
