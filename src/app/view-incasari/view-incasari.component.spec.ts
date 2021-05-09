import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewIncasariComponent } from './view-incasari.component';

describe('ViewIncasariComponent', () => {
  let component: ViewIncasariComponent;
  let fixture: ComponentFixture<ViewIncasariComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIncasariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIncasariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
