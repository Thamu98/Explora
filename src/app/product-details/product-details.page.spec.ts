import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PRODUCTDETAILSPage } from './product-details.page';

describe('PRODUCTDETAILSPage', () => {
  let component: PRODUCTDETAILSPage;
  let fixture: ComponentFixture<PRODUCTDETAILSPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PRODUCTDETAILSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PRODUCTDETAILSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
