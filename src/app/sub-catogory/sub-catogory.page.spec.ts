import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SUBCATOGORYPage } from './sub-catogory.page';

describe('SUBCATOGORYPage', () => {
  let component: SUBCATOGORYPage;
  let fixture: ComponentFixture<SUBCATOGORYPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SUBCATOGORYPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SUBCATOGORYPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
