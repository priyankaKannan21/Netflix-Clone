import { Component,OnInit } from '@angular/core';
import { MasterserviceService } from './service/masterservice.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularproject';
  flag: any;
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(){
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.flag=true;
    }, 500);

  }
}
