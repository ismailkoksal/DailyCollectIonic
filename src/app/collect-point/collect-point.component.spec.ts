import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollectPointComponent } from './collect-point.component';

describe('CollectPointComponent', () => {
  let component: CollectPointComponent;
  let fixture: ComponentFixture<CollectPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectPointComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollectPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
