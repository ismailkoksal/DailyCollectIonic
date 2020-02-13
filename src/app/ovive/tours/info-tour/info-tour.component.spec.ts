import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {InfoTourComponent} from './info-tour.component';

describe('InfoTourComponent', () => {
  let component: InfoTourComponent;
  let fixture: ComponentFixture<InfoTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTourComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
