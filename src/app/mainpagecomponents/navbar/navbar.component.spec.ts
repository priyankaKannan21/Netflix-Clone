import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MainpageComponent } from '../mainpage/mainpage.component';
import { WatchlistComponent } from '../watchlist/watchlist.component';
import { TvshowComponent } from 'src/app/tvshowscomponent/tvshow/tvshow.component';
import { PaymentpageComponent } from '../paymentpage/paymentpage.component';

describe('NavbarComponent', () => {
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: '', component: MainpageComponent},
        { path: 'movies', component: MainpageComponent},
        { path: 'tvshows', component: TvshowComponent},
        { path: 'watchlist', component: WatchlistComponent},
        { path: 'premium', component: PaymentpageComponent},
      ])],
      declarations: [
        NavbarComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('netflix logo image is present', () => {
    let img = debug.nativeElement.querySelector('.imageclass');
    expect(img).toBeTruthy();
  });

  it('nav bar Movies option is present', () => {
    let navbarlink = debug.nativeElement.querySelector('#movies');
    expect(navbarlink).toBeTruthy();
  });

  it("on click of navbar movies option redirected to the router link", fakeAsync(() =>{
    const router: Router = TestBed.get(Router);    
    let navbarlink = debug.nativeElement.querySelector('#movies');
    let navbarlinkurl = navbarlink.getAttribute('href')
    navbarlink.click();
    fixture.detectChanges();
    tick();
    expect(router.url).toBe(navbarlinkurl);
  }))

  it('nav bar Tv shows option is present', () => {
    let navbarlink = debug.nativeElement.querySelector('#tvshows');
    expect(navbarlink).toBeTruthy();
  });

  it("on click of navbar tv show option redirected to the router link", fakeAsync(() =>{
    const router: Router = TestBed.get(Router);    
    let navbarlink = debug.nativeElement.querySelector('#tvshows');
    let navbarlinkurl = navbarlink.getAttribute('href')
    navbarlink.click();
    fixture.detectChanges();
    tick();
    expect(router.url).toBe(navbarlinkurl);
  }))

  it('nav bar Watchlist option is present', () => {
    let navbarlink = debug.nativeElement.querySelector('#watchlist');
    expect(navbarlink).toBeTruthy();
  });

  it("on click of navbar watchlist option redirected to the router link", fakeAsync(() =>{
    const router: Router = TestBed.get(Router);    
    let navbarlink = debug.nativeElement.querySelector('#watchlist');
    let navbarlinkurl = navbarlink.getAttribute('href')
    navbarlink.click();
    fixture.detectChanges();
    tick();
    expect(router.url).toBe(navbarlinkurl);
  }))

  it('nav bar Premium option is present', () => {
    let navbarlink = debug.nativeElement.querySelector('#premium');
    expect(navbarlink).toBeTruthy();
  });

  it("on click of navbar premium option redirected to the router link", fakeAsync(() =>{
    const router: Router = TestBed.get(Router);    
    let navbarlink = debug.nativeElement.querySelector('#premium');
    let navbarlinkurl = navbarlink.getAttribute('href')
    navbarlink.click();
    fixture.detectChanges();
    tick();
    expect(router.url).toBe(navbarlinkurl);
  }))

});
