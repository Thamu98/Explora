import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DISCOUNTDETAILSPage } from './discount-details.page';

describe('DISCOUNTDETAILSPage', () => {
  let component: DISCOUNTDETAILSPage;
  let fixture: ComponentFixture<DISCOUNTDETAILSPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DISCOUNTDETAILSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DISCOUNTDETAILSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
