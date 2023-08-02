import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { DetailpageComponent } from './detailpage.component';
import { DebugElement } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { PaymentpageComponent } from '../paymentpage/paymentpage.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailpageComponent', () => {
  let component: DetailpageComponent;
  let fixture: ComponentFixture<DetailpageComponent>;
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
      declarations: [DetailpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailpageComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    data = {
      backdrop_path: '/fEP2Sha3PXJnAcoGOjr5oybq44Q.jpg',
      first_air_date: '2023-05-08',
      genre_ids: [10765, 10759],
      id: 134224,
      name: 'Voltes V: Legacy',
      origin_country: ['PH'],
      original_language: 'tl',
      original_name: 'Voltes V: Legacy',
      overview:
        'Voltes V: Legacy follows the story of three brothers, Steve, Big Bert, and Little Jon Armstrong, and their friends Jamie Robinson and Mark Gordon, as they fight the forces of humanoid aliens known as Boazanians who plans to invade the earth and launch their beast fighters all over the world.',
      popularity: 3251.893,
      poster_path: '/jZ32tdCTFsRoU2GehW6ZzSpTyS1.jpg',
      vote_average: 5.3,
      vote_count: 4,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have anydata at starting in detaildata', () => {
    expect(component.detaildata).toBeFalsy();
  });

  it('initial value of component flag should be false', () => {
    expect(component.componentflag).toBe(false);
  });

  it('ngx spinner in the component', () => {
    const spinner = debug.nativeElement.querySelector('ngx-spinner');
    expect(spinner).toBeTruthy();
  });

  it('should have data in detaildata after on init function', () => {
    component.ngOnInit();
    component.detaildata = data;
    fixture.detectChanges();
    expect(component.detaildata).toBe(data);
  });

  it('watchlist button on click should call a function', () => {
    component.componentflag = true;
    component.detaildata = data;
    fixture.detectChanges();
    spyOn(component, 'tvshowwatchlist');
    const button = debug.nativeElement.querySelector('#watchlistbtn');
    button.click();
    fixture.detectChanges();
    expect(component.tvshowwatchlist).toHaveBeenCalled();
  });

  it('upgrade to premium button on click should redirect to paymentpage', fakeAsync(() => {
    component.componentflag = true;
    component.detaildata = data;
    fixture.detectChanges();
    const router: Router = TestBed.get(Router);
    const button = debug.nativeElement.querySelector('#premium');
    button.click();
    fixture.detectChanges();
    tick();
    expect(router.url).toBe(button.getAttribute('routerLink'));
  }));
});
