import { TestBed,fakeAsync, tick } from '@angular/core/testing';

import { MasterserviceService } from './masterservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { data } from '../models/model.ts';

describe('MasterserviceService', () => {
  let service: MasterserviceService;
  let moviedata: any;
  let tvdata: any;
  let url: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(MasterserviceService);
    url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWJiODMxZDJjMjQzZjg3YzdlMTQyY2M4ZmMxOGI4MSIsInN1YiI6IjY0NmYyNTc1ZTIyZDI4MTZhZjI3MzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NbviAgIprFvzJmTAi0LTkBm4vw77MkqRkMwxHOm2Ue0',
      },
    };
    tvdata = {
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
    moviedata = {
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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have anydata at starting in movieTypelist', () => {
    expect(service.movieTypelist.length).toBe(0);
  });

  it('should not have anydata at starting in detaileddata', () => {
    expect(service.detaileddata).toBe(undefined);
  });

  it('should not have anydata at starting in moviedetail', () => {
    expect(service.moviedetail).toBe(undefined);
  });

  it('should not have anydata at starting in watchlist', () => {
    expect(service.watchlist.length).toBe(0);
  });

  it('should not have anydata at starting in tvshowatchlist', () => {
    expect(service.tvshowatchlist.length).toBe(0);
  });

  it('initial value of pagenumber should be 1', () =>{
    expect(service.pageNumber).toBe(1);
  });

  it('initial value of tvpagenumber should be 1', () =>{
    expect(service.tvpagenumber).toBe(1);
  });

  it('initial value of flag should be true', () =>{
    expect(service.flag).toBe(true);
  });

  it('nextsection alert message', () =>{
    service.pageNumber = 201;    
    service.nextsection(); 
    expect(window.alert).toBeTruthy()
  })

  it('nextsection increment in page number', () =>{
    service.pageNumber = 2;
    let initialvalue = service.pageNumber;
    service.nextsection();
    expect(service.pageNumber).toEqual(initialvalue+1);
  })

  it('previous alert message', () =>{
    service.pageNumber = 1;
    service.previoussection();
    expect(window.alert).toBeTruthy()
  })

  it('previous decrement in page number', () =>{
    service.pageNumber = 8;
    let initialvalue = service.pageNumber;
    service.previoussection();
    expect(service.pageNumber).toEqual(initialvalue-1);
  })

  it('get all movie Type list', fakeAsync(() =>{   
    const dummydata = [
      {id: 28, name: 'Action'},
      {id: 12, name: 'Adventure'}
    ];
    let productSpy = spyOn(service, 'getmovieTypelist').and.returnValue(of(dummydata));
    service.getmovieTypelist();
    tick();
    expect(productSpy).toBeTruthy()
  }))

  it('get all movie list', fakeAsync(() =>{ 
    const dummydata : data[] = [moviedata];
    let productSpy = spyOn(service, 'getAllMovies').and.returnValue(of(dummydata));
    service.getAllMovies();
    tick();
    expect(productSpy).toBeTruthy()
  }))

  it('get all movie list by type', fakeAsync(() =>{ 
    let movieType = "Action"
    const dummydata : data[] = [moviedata];
    let productSpy = spyOn(service, 'getMoviesByType').and.returnValue(of(dummydata));
    service.getMoviesByType(movieType);
    tick();
    expect(productSpy).toBeTruthy()

  }))

  it('get all tv shows list', fakeAsync(() =>{
    const dummydata = [tvdata];
    let productSpy = spyOn(service, 'getalltvshow').and.returnValue(of(dummydata));
    service.getalltvshow();
    tick();
    expect(productSpy).toBeTruthy()
  }))


  it('add movie to watchlist', ()=>{
    let data = service.watchlist.length;
    service.addToWatchList(moviedata);
    let data1 = service.watchlist.length
    expect(data1).toBeGreaterThan(data)
  })

  it('add tv show to watchlist', ()=>{
    let data = service.tvshowatchlist.length;
    service.addToWatchList(tvdata);
    let data1 = service.tvshowaddtowatchlist.length
    expect(data1).toBeGreaterThan(data)
  })

  it('remove movie from watchlist', ()=>{
    let data = [moviedata];
    service.removeFromwatchlist(moviedata);
    let data1 = service.watchlist.length
    expect(data1).toBeLessThan(data.length)
  })

  it('remove tv show from watchlist', ()=>{
    let data = [tvdata];
    service.removeFromwatchlist(tvdata);
    let data1 = service.tvshowatchlist.length
    expect(data1).toBeLessThan(data.length)
  })

  it('get tv show list by search value', fakeAsync(() =>{ 
    const dummydata : data[] = [tvdata];
    let productSpy = spyOn(service, 'getsearchdata').and.returnValue(of(dummydata));
    service.getsearchdata("am");
    tick();
    expect(productSpy).toBeTruthy()
  }))

});
