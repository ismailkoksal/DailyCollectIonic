import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CollectsPage} from './collects.page';

describe('CollectsPage', () => {
  let component: CollectsPage;
  let fixture: ComponentFixture<CollectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
