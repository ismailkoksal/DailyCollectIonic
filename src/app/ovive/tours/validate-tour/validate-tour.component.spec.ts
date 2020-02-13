import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ValidateTourComponent} from './validate-tour.component';

describe('ValidateTourComponent', () => {
  let component: ValidateTourComponent;
  let fixture: ComponentFixture<ValidateTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateTourComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
