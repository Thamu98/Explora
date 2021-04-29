import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NOTIFICATIONPage } from './notification.page';

describe('NOTIFICATIONPage', () => {
  let component: NOTIFICATIONPage;
  let fixture: ComponentFixture<NOTIFICATIONPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NOTIFICATIONPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NOTIFICATIONPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
