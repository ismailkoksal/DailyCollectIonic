import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AddCollectComponent} from './add-collect.component';

describe('AddCollectComponent', () => {
  let component: AddCollectComponent;
  let fixture: ComponentFixture<AddCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCollectComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
