import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {DetailTourComponent} from './detail-tour.component';

describe('DetailTourComponent', () => {
  let component: DetailTourComponent;
  let fixture: ComponentFixture<DetailTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTourComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
