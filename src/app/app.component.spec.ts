import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mainpagecomponents/navbar/navbar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';
import { MainpageComponent } from './mainpagecomponents/mainpage/mainpage.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[NgxSpinnerModule, RouterTestingModule.withRoutes([
        { path:'', component: MainpageComponent}
      ])],
      declarations: [
        AppComponent,
        NavbarComponent,
        MainpageComponent,
      ],
    }).compileComponents();  
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularproject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularproject');
  });

  it("ngx spinner in the component", ()=>{
    const spinner = debug.nativeElement.querySelector('ngx-spinner');
    expect(spinner).toBeTruthy();
  });

  it("navbar in the component", ()=>{
    const navBar = debug.nativeElement.querySelector('app-navbar');
    expect(navBar).toBeTruthy();
  });

  it("router outlet is present", ()=>{
    component.flag = true;
    fixture.detectChanges();
    const router = debug.nativeElement.querySelector('.router');    
    expect(router).toBeTruthy();
  });

  it("router outlet initilly routes to homepage", ()=>{
    component.flag = true;
    fixture.detectChanges();
    const router: Router = TestBed.get(Router);
    router.initialNavigation();    
    expect(router.url).toBe('/');
  });
});
