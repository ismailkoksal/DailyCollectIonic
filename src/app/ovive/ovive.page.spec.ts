import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {OvivePage} from './ovive.page';

describe('OvivePage', () => {
  let component: OvivePage;
  let fixture: ComponentFixture<OvivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OvivePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
