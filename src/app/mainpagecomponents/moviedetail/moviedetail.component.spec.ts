import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MoviedetailComponent } from './moviedetail.component';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentpageComponent } from '../paymentpage/paymentpage.component';
import { Router } from '@angular/router';

describe('MoviedetailComponent', () => {
  let component: MoviedetailComponent;
  let fixture: ComponentFixture<MoviedetailComponent>;
  let debug: DebugElement;
  let data: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxSpinnerModule,
        RouterTestingModule.withRoutes([
          { path: 'premium', component: PaymentpageComponent },
        ]),

      ],
      declarations: [ MoviedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedetailComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    data = {
      "adult": false,
      "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 603692,
      "original_language": "en",
      "original_title": "John Wick: Chapter 4",
      "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      "popularity": 4242.15,
      "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      "release_date": "2023-03-22",
      "title": "John Wick: Chapter 4",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 2723
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngx spinner in the component', () => {
    const spinner = debug.nativeElement.querySelector('ngx-spinner');
    expect(spinner).toBeTruthy();
  });

  it('should not have anydata at starting in detaildata', () => {
    expect(component.moviedetail).toBeFalsy();
  });

  it('initial value of component flag should be false', () => {
    expect(component.flag).toBe(false);
  });

  it('should have data in detaildata after on init function', () => {
    component.ngOnInit();
    component.moviedetail = data;
    fixture.detectChanges();
    expect(component.moviedetail).toBe(data);
  });

  it('watchlist button on click should call a function', () => {
    component.flag = true;
    component.moviedetail = data;
    fixture.detectChanges();
    spyOn(component, 'moviewatchlist');
    const button = debug.nativeElement.querySelector('#watchlistbtn');
    button.click();
    fixture.detectChanges();
    expect(component.moviewatchlist).toHaveBeenCalled();
  });

  it('upgrade to premium button on click should redirect to paymentpage', fakeAsync(() => {
    component.flag = true;
    component.moviedetail = data;
    fixture.detectChanges();
    const router: Router = TestBed.get(Router);
    const button = debug.nativeElement.querySelector('#premium');
    button.click();
    fixture.detectChanges();
    tick();
    expect(router.url).toBe(button.getAttribute('routerLink'));
  }));

});
