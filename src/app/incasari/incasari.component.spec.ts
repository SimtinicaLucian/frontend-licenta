import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IncasariComponent } from './incasari.component';

describe('IncasariComponent', () => {
  let component: IncasariComponent;
  let fixture: ComponentFixture<IncasariComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncasariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncasariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
