import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ORDERTRACKINGPage } from './order-tracking.page';

describe('ORDERTRACKINGPage', () => {
  let component: ORDERTRACKINGPage;
  let fixture: ComponentFixture<ORDERTRACKINGPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ORDERTRACKINGPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ORDERTRACKINGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
