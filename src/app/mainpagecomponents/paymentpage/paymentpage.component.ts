import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { MasterserviceService } from 'src/app/service/masterservice.service';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit{
  flag: any= true;
  componentflag: any= false;
  constructor( private service: MasterserviceService, public spinner:NgxSpinnerService){
    this.flag = this.service.flag
  }
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
      this.componentflag=true;
    }, 500);
  }
  
  cardInfo = new FormGroup({
    cardnumber: new FormControl('', Validators.compose([Validators.required,Validators.minLength(16), Validators.pattern('[0-9]*')])),
    monthyear: new FormControl('', Validators.required),
    cvvcode: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(3)])),
    plantype: new FormControl('', Validators.required),
  })

  paySubscription(){
    console.log(this.cardInfo.value)
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
      this.componentflag=true;
    }, 500);
    this.service.flag = false;
    this.flag = this.service.flag;
  }

  get cardnumber(){
    return this.cardInfo.get('cardnumber')
  }

  get monthyear(){
    return this.cardInfo.get('monthyear')
  }

  get cvvcode(){
    return this.cardInfo.get('cvvcode')
  }

  get plantype(){
    return this.cardInfo.get('plantype')
  }

}
