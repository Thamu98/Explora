import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { STOCKDETAILSPage } from './stock-details.page';

describe('STOCKDETAILSPage', () => {
  let component: STOCKDETAILSPage;
  let fixture: ComponentFixture<STOCKDETAILSPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ STOCKDETAILSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(STOCKDETAILSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
