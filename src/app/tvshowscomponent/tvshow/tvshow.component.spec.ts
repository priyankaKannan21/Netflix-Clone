import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TvshowComponent } from './tvshow.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MasterserviceService } from 'src/app/service/masterservice.service';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailpageComponent } from 'src/app/mainpagecomponents/detailpage/detailpage.component';

describe('TvshowComponent', () => {
  let component: TvshowComponent;
  let fixture: ComponentFixture<TvshowComponent>;
  let debug: DebugElement;
  let alltvshowdata: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,NgxSpinnerModule, RouterTestingModule.withRoutes([
        { path: 'showdetail', component: DetailpageComponent},
      ])],
      providers:[MasterserviceService],
      declarations: [ TvshowComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshowComponent);
    debug = fixture.debugElement;
    fixture.detectChanges();
    alltvshowdata = [
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
      },
      {
        "backdrop_path": "/azWBrlovNOOdy0eQYEe9BoiROoN.jpg",
        "first_air_date": "2023-03-20",
        "genre_ids": [
          18,
          10766
        ],
        "id": 209085,
        "name": "Amor Perfeito",
        "origin_country": [
          "BR"
        ],
        "original_language": "pt",
        "original_name": "Amor Perfeito",
        "overview": "",
        "popularity": 3058.063,
        "poster_path": "/aOPhyvHDauWFuc3rthpHArCNyrm.jpg",
        "vote_average": 4.2,
        "vote_count": 11
      }
    ];
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("ngx spinner in the component", ()=>{
    const spinner = debug.nativeElement.querySelector('ngx-spinner');
    expect(spinner).toBeTruthy();
  });

  it('should not have anydata at starting in alltvshowdata', () => {
    expect(component.alltvshowdata.length).toBe(0);
  });

  it('initial value of flag should be true', () =>{
    expect(component.componentflag).toBe(false);
  });

  it(" previous button is present", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let button = debug.nativeElement.querySelector('#previous');
    expect(button).toBeTruthy();
  })

  it(" next button is present", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    let button = debug.nativeElement.querySelector('#next');
    expect(button).toBeTruthy();
  })

  it(" previous button when clicked calls a function", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    spyOn(component, 'Previousdata');
    let button = debug.nativeElement.querySelector('#previous');
    button.click();
    expect(component.Previousdata).toHaveBeenCalled();
  });

  it(" next button when clicked calls a function", fakeAsync(() =>{
    component.componentflag = true;
    fixture.detectChanges();
    spyOn(component, 'Nextdata');
    let button = debug.nativeElement.querySelector('#next');
    button.click();
    expect(component.Nextdata).toHaveBeenCalled();
  }));

  it("search input field is present", fakeAsync(() =>{
    component.componentflag = true;
    fixture.detectChanges();
    let inputfield = debug.nativeElement.querySelector('#searchitem');
    expect(inputfield).toBeTruthy();
  }));

  it("on change in the search input box then function is called", () =>{
    component.componentflag = true;
    fixture.detectChanges();
    spyOn(component, 'sendsearchdata');
    let searchitem = debug.nativeElement.querySelector('#searchitem'); 
    searchitem.dispatchEvent(new KeyboardEvent('keyup', {}));
    fixture.detectChanges();
    expect(component.sendsearchdata).toHaveBeenCalled();
  })

  it("search input field is value is correct as given", fakeAsync(() =>{
    component.componentflag = true;
    fixture.detectChanges();
    let inputfield = debug.nativeElement.querySelector('#searchitem');
    inputfield.value = 'John Wick';
    fixture.detectChanges();
    expect(inputfield.value).toBe('John Wick');
  }));

  it("tvshow data is displayed", fakeAsync(() =>{
    component.componentflag = true;
    fixture.detectChanges();
    component.alltvshowdata = alltvshowdata
    fixture.detectChanges();
    let dataField = debug.nativeElement.querySelector('#tvShowData');        
    expect(dataField).toBeTruthy();
  }));

  it("when tvshow image clicked calls a function and routed to detail page", fakeAsync(() =>{
    const router: Router = TestBed.get(Router)
    component.componentflag = true;
    fixture.detectChanges();
    component.alltvshowdata = alltvshowdata
    fixture.detectChanges();
    spyOn(component, 'detaileddata');
    let imageField = debug.nativeElement.querySelector('#picture');    
    imageField.click();
    fixture.detectChanges();    
    tick();
    expect(component.detaileddata).toHaveBeenCalled();
    expect(router.url).toBe('/showdetail')
  }));

});
