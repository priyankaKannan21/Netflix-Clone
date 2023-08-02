import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { WatchlistComponent } from './watchlist.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MainpageComponent } from '../mainpage/mainpage.component';
import { TvshowComponent } from 'src/app/tvshowscomponent/tvshow/tvshow.component';


describe('WatchlistComponent', () => {
  let component: WatchlistComponent;
  let fixture: ComponentFixture<WatchlistComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,NgxSpinnerModule, RouterTestingModule.withRoutes([
        { path: 'movies', component: MainpageComponent},
        { path: 'tvshows', component: TvshowComponent},
      ])],
      declarations: [ WatchlistComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have anydata at starting in watchlistdata', () => {
    expect(component.watchlistdata.length).toBe(0);
  });

  it('should not have anydata at starting in tvshowwatchlist', () => {
    expect(component.tvshowwatchlist.length).toBe(0);
  });

  it("ngx spinner in the component", ()=>{
    const spinner = debug.nativeElement.querySelector('ngx-spinner');
    expect(spinner).toBeTruthy();
  });

  it('watchlist is empty header is present', () =>{
    component.componentflag = true;
    component.flag = true;
    fixture.detectChanges();
    let header = debug.nativeElement.querySelector('.header');
    expect(header.textContent).toContain('Watchlist is Empty');
  });

  it('movie watchlist header is present', () =>{
    component.componentflag = true;
    component.watchlistdata = [
      {
        "adult": false,
        "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        "genre_ids": [
          28,
          80,
          53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 13114.65,
        "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 1475
      }
    ]
    fixture.detectChanges();
    let header = debug.nativeElement.querySelector('#header1');
    expect(header.textContent).toContain('Movie Watchlist🤩');
  });

  it('tv show watchlist header is present', () =>{
    component.componentflag = true;
    component.tvshowwatchlist = [
      {
        "backdrop_path": "/fEP2Sha3PXJnAcoGOjr5oybq44Q.jpg",
        "first_air_date": "2023-05-08",
        "genre_ids": [
          10765,
          10759
        ],
        "id": 134224,
        "name": "Voltes V: Legacy",
        "origin_country": [
          "PH"
        ],
        "original_language": "tl",
        "original_name": "Voltes V: Legacy",
        "overview": "Voltes V: Legacy follows the story of three brothers, Steve, Big Bert, and Little Jon Armstrong, and their friends Jamie Robinson and Mark Gordon, as they fight the forces of humanoid aliens known as Boazanians who plans to invade the earth and launch their beast fighters all over the world.",
        "popularity": 3093.903,
        "poster_path": "/jZ32tdCTFsRoU2GehW6ZzSpTyS1.jpg",
        "vote_average": 5.3,
        "vote_count": 4
      }
    ];
    fixture.detectChanges();
    let header = debug.nativeElement.querySelector('#header2');
    expect(header.textContent).toContain('Tv Show Watchlist😍');
  });

  it('Add movie to watchlist button is present', () =>{
    component.componentflag = true;
    component.flag = true;
    fixture.detectChanges();
    let button = debug.nativeElement.querySelector('#addtowatchlistbtn');
    expect(button).toBeTruthy();
  });

  it('Add tv show to watchlist button is present', () =>{
    component.componentflag = true;
    component.flag = true;
    fixture.detectChanges();
    let button = debug.nativeElement.querySelector('#addtvshowtowatchlistbtn');
    expect(button).toBeTruthy();
  });

  it("on click of add movie to watchlist button it is redirected to movies page", fakeAsync(() =>{
    const router: Router = TestBed.get(Router);   
    component.componentflag = true;
    component.flag = true;
    fixture.detectChanges(); 
    let addtowatchlistbutton = debug.nativeElement.querySelector('#addtowatchlistbtn');
    let addtowatchlistbuttonlink = addtowatchlistbutton.getAttribute('routerLink')
    addtowatchlistbutton.click();    
    fixture.detectChanges();
    tick();
    expect(router.url).toBe(addtowatchlistbuttonlink);
  }))

  it("on click of add tv show to watchlist button it is redirected to tv show page", fakeAsync(() =>{
    const router: Router = TestBed.get(Router);   
    component.componentflag = true;
    component.flag = true;
    fixture.detectChanges(); 
    let addtowatchlistbutton = debug.nativeElement.querySelector('#addtvshowtowatchlistbtn');
    let addtowatchlistbuttonlink = addtowatchlistbutton.getAttribute('routerLink')
    addtowatchlistbutton.click();    
    fixture.detectChanges();
    tick();
    expect(router.url).toBe(addtowatchlistbuttonlink);
  }))

  it('watchlist movie data is present', () =>{
    component.componentflag = true;
    fixture.detectChanges();
    component.watchlistdata = [
      {
        "adult": false,
        "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        "genre_ids": [
          28,
          80,
          53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 13114.65,
        "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 1475
      }
    ]
    fixture.detectChanges();
    let dataDiv = debug.nativeElement.querySelector('.movieData');
    expect(dataDiv).toBeTruthy();
  });

  it('remove from watchlist button is present', ()=>{
    component.componentflag = true;
    fixture.detectChanges();
    component.watchlistdata = [
      {
        "adult": false,
        "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        "genre_ids": [
          28,
          80,
          53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 13114.65,
        "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 1475
      }
    ]
    fixture.detectChanges();

    const button = debug.nativeElement.querySelector('#removeFromWatchlist');
    expect(button).toBeTruthy();
  });

  it('remove from watchlist button for movie show when clicked calls a function', ()=>{
    component.componentflag = true;
    fixture.detectChanges();
    component.watchlistdata = [
      {
        "adult": false,
        "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        "genre_ids": [
          28,
          80,
          53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 13114.65,
        "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 1475
      }
    ]
    fixture.detectChanges();
    spyOn(component, 'removeFromwatchlist');
    let button = debug.nativeElement.querySelector('#removeFromWatchlist');
    button.click();
    expect(component.removeFromwatchlist).toHaveBeenCalled();

  })

  it('remove from watchlist button for tv show when clicked calls a function', ()=>{
    component.componentflag = true;
    fixture.detectChanges();
    component.tvshowwatchlist = [
      {
        "backdrop_path": "/fEP2Sha3PXJnAcoGOjr5oybq44Q.jpg",
        "first_air_date": "2023-05-08",
        "genre_ids": [
          10765,
          10759
        ],
        "id": 134224,
        "name": "Voltes V: Legacy",
        "origin_country": [
          "PH"
        ],
        "original_language": "tl",
        "original_name": "Voltes V: Legacy",
        "overview": "Voltes V: Legacy follows the story of three brothers, Steve, Big Bert, and Little Jon Armstrong, and their friends Jamie Robinson and Mark Gordon, as they fight the forces of humanoid aliens known as Boazanians who plans to invade the earth and launch their beast fighters all over the world.",
        "popularity": 3093.903,
        "poster_path": "/jZ32tdCTFsRoU2GehW6ZzSpTyS1.jpg",
        "vote_average": 5.3,
        "vote_count": 4
      }
    ]
    fixture.detectChanges();
    spyOn(component, 'removeFromTvwatchlist');
    let button = debug.nativeElement.querySelector('#removeFromtvWatchlist');
    button.click();
    expect(component.removeFromTvwatchlist).toHaveBeenCalled();

  })

});
