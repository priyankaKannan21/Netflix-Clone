import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PaymentpageComponent } from './paymentpage.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NumberFormatStyle } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MainpageComponent } from '../mainpage/mainpage.component';

describe('PaymentpageComponent', () => {
  let component: PaymentpageComponent;
  let fixture: ComponentFixture<PaymentpageComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxSpinnerModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'movies', component: MainpageComponent},
        ])
      ],
      declarations: [PaymentpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentpageComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngx spinner in the component', () => {
    const spinner = debug.nativeElement.querySelector('ngx-spinner');
    expect(spinner).toBeTruthy();
  });

  it('payment gateway header is present', () => {
    component.flag = true;
    component.componentflag = true;
    fixture.detectChanges();
    const header = debug.nativeElement.querySelector('.headerPayment');
    expect(header.textContent).toContain('Payment Gateway')
  });

  it('payment gateway visa card image is present', () => {
    component.flag = true;
    component.componentflag = true;
    fixture.detectChanges();
    const img = debug.nativeElement.querySelector('.topHeader');
    expect(img).toBeTruthy();
  });

  it('card information header is present', () => {
    component.flag = true;
    component.componentflag = true;
    fixture.detectChanges();
    const header = debug.nativeElement.querySelector('.cardHeader');
    expect(header.textContent).toContain('Card Information')
  });

  it("cardnumber input field is present", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let cardinputfield = debug.nativeElement.querySelector('#cardnumber');
    expect(cardinputfield).toBeTruthy();
  })

  it("cardnumber input field is equal to the given input", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let cardinputfield = debug.nativeElement.querySelector('#cardnumber');
    cardinputfield.value = '1234123412341234';
    fixture.detectChanges();
    expect(cardinputfield.value).toBe('1234123412341234')
  })

  it("cvv code input field is present", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let cvvcodeinputfield = debug.nativeElement.querySelector('#cvvcode');
    expect(cvvcodeinputfield).toBeTruthy();
  })

  it("cvv code input field is equal to the given input", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let cvvcodeinput = debug.nativeElement.querySelector('#cardnumber');
    cvvcodeinput.value = '123';
    fixture.detectChanges();
    expect(cvvcodeinput.value).toBe('123')
  })

  it("month/year input field is present", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let month_yearinputfield = debug.nativeElement.querySelector('#monthyear');
    expect(month_yearinputfield).toBeTruthy();
  })

  it("month/year input field is equal to the given input", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let month_yearinputfield = debug.nativeElement.querySelector('#monthyear');
    month_yearinputfield.value = '2023-09'
    fixture.detectChanges();
    expect(month_yearinputfield.value).toBe('2023-09')
  })

  it("select plan input field is present", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let selectinputfield = debug.nativeElement.querySelector('#selectplan');
    expect(selectinputfield).toBeTruthy();
  })

  it("select plan input field is equal to the given input", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let selectinputfield = debug.nativeElement.querySelector('#selectplan');
    selectinputfield.value = selectinputfield.options[1].value
    fixture.detectChanges();
    expect(selectinputfield.value).toBe('1');
  })

  it("pay button is present", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let button = debug.nativeElement.querySelector('#payButton');
    expect(button).toBeTruthy();
  })

  it("pay button is initially disabled", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let button = debug.query(By.css('.payButton'));    
    expect(button.nativeElement.disabled).toBeTruthy();
  })

  it("pay button is disabled when input data is invalid", () =>{
    component.componentflag = true;
    component.cardInfo.setValue({
      cardnumber: "123412341234",
      cvvcode:  "123",
      monthyear: "2023-12",
      plantype: "1"
    })    
    fixture.detectChanges();
    let button = debug.query(By.css('.payButton'));    
    expect(button.nativeElement.disabled).toBeTruthy();
  })

  it("pay button is enabled when input data is valid", () =>{
    component.componentflag = true;
    component.cardInfo.setValue({
      cardnumber: "1234123412341234",
      cvvcode:  "123",
      monthyear: "2023-12",
      plantype: "1"
    })    
    fixture.detectChanges();
    let button = debug.query(By.css('.payButton'));    
    expect(button.nativeElement.disabled).toBeFalsy();
  })

  it("should click pay button to be subscribed with valid details", () =>{
    component.componentflag = true;
    component.cardInfo.setValue({
      cardnumber: "1234123412341234",
      cvvcode:  "123",
      monthyear: "2023-12",
      plantype: "1"
    })    
    fixture.detectChanges();
    spyOn(component, 'paySubscription');
    let button = debug.query(By.css('.payButton')).nativeElement;    
    button.click();
    fixture.detectChanges();
    expect(component.paySubscription).toHaveBeenCalled()
  })

  it("should have subscription header after subscription", () =>{
    component.flag = false;
    fixture.detectChanges();
    let header = debug.nativeElement.querySelector('.subscriptionHeader');    
    expect(header.textContent).toContain('Subscription Done Successfully')

  })

  it('should have happy image after subscription', () => {
    component.flag = false;
    fixture.detectChanges();
    const img = debug.nativeElement.querySelector('#happyimg');
    expect(img).toBeTruthy();
  });

  it("Back to home button is present", () =>{
    component.flag = false;
    fixture.detectChanges();
    let button = debug.nativeElement.querySelector('#backtohomebtn');
    expect(button).toBeTruthy();
  });

  it("on click of navbar movies option redirected to the router link", fakeAsync(() =>{
    component.flag = false;
    fixture.detectChanges();    
    const router: Router = TestBed.get(Router);    
    let backtohomebutton = debug.nativeElement.querySelector('#backtohomebtn');
    let navbarlinkurl = backtohomebutton.getAttribute('routerLink')
    backtohomebutton.click();
    fixture.detectChanges();
    tick();
    expect(router.url).toBe(navbarlinkurl);
  }));

});
