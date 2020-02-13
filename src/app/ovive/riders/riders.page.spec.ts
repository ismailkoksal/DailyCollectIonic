import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {RidersPage} from './riders.page';

describe('RidersPage', () => {
  let component: RidersPage;
  let fixture: ComponentFixture<RidersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RidersPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RidersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
