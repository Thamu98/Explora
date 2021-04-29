import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SPECIALUSERREQUESTPage } from './special-user-request.page';

describe('SPECIALUSERREQUESTPage', () => {
  let component: SPECIALUSERREQUESTPage;
  let fixture: ComponentFixture<SPECIALUSERREQUESTPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SPECIALUSERREQUESTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SPECIALUSERREQUESTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
