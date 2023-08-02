import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { MainpageComponent } from './mainpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DebugElement } from '@angular/core';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;
  let debug: DebugElement;
  let moviedata: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxSpinnerModule],
      declarations: [MainpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    moviedata = [
      {
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
      },
      {
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
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngx spinner in the component', () => {
    const spinner = debug.nativeElement.querySelector('ngx-spinner');
    expect(spinner).toBeTruthy();
  });

  it('filter by header is present', () => {
    component.flag = true;
    fixture.detectChanges();
    let header = debug.nativeElement.querySelector('#header');
    expect(header.textContent).toBe('Filter By:');
  });

  it('filter by input box is present', () => {
    component.flag = true;
    fixture.detectChanges();
    let filterinput = debug.nativeElement.querySelector('#movies');
    expect(filterinput).toBeTruthy();
  });

  it('filter by input field is equal to the given input', () => {
    component.flag = true;
    component.optionvalue = [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 16,
        name: 'Animation',
      }
    ];
    fixture.detectChanges();
    let selectinputfield = debug.nativeElement.querySelector('#movies');
    selectinputfield.value = selectinputfield.options[1].value;
    fixture.detectChanges();
    expect(selectinputfield.value).toBe("Adventure");
  });

  it('filter by input field on change calls a function', () => {
    component.flag = true;
    component.optionvalue = [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 16,
        name: 'Animation',
      }
    ];
    fixture.detectChanges();
    let selectinputfield = debug.nativeElement.querySelector('#movies');
    spyOn(component, 'filterMovie')
    selectinputfield.value = selectinputfield.options[1].value;
    fixture.detectChanges();
    expect(component.filterMovie).toBeTruthy();
  });

  it(' previous button is present', () => {
    component.flag = true;
    fixture.detectChanges();
    let button = debug.nativeElement.querySelector('#previous');
    expect(button).toBeTruthy();
  });

  it(' next button is present', () => {
    component.flag = true;
    fixture.detectChanges();
    let button = debug.nativeElement.querySelector('#next');
    expect(button).toBeTruthy();
  });

  it(' previous button when clicked calls a function', () => {
    component.flag = true;
    fixture.detectChanges();
    spyOn(component, 'Previousdata');
    let button = debug.nativeElement.querySelector('#previous');
    button.click();
    expect(component.Previousdata).toHaveBeenCalled();
  });

  it(' next button when clicked calls a function', fakeAsync(() => {
    component.flag = true;
    fixture.detectChanges();
    spyOn(component, 'Nextdata');
    let button = debug.nativeElement.querySelector('#next');
    button.click();
    tick();
    expect(component.Nextdata).toHaveBeenCalled();
  }));

  it("movie data is displayed", fakeAsync(() =>{
    component.flag = true;
    component.allmoviedata = moviedata;
    fixture.detectChanges();
    let dataField = debug.nativeElement.querySelector('.movieData');        
    expect(dataField).toBeTruthy();
  }))

  it("watchlist button is present for each movie data", ()=>{
    component.flag = true;
    component.allmoviedata = moviedata;
    fixture.detectChanges();
    let button = debug.nativeElement.querySelector('#watchlistbtn');
    expect(button).toBeTruthy();
  });

  it("watchlist button on click should call a function", ()=>{
    component.flag = true;
    component.allmoviedata = moviedata;
    fixture.detectChanges();
    spyOn(component, 'watchlist')
    let button = debug.nativeElement.querySelector('#watchlistbtn');
    button.click();
    fixture.detectChanges();
    expect(component.watchlist).toHaveBeenCalled()
  });

});
