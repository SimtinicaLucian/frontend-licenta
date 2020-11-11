import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncasariComponent } from './incasari.component';

describe('IncasariComponent', () => {
  let component: IncasariComponent;
  let fixture: ComponentFixture<IncasariComponent>;

  beforeEach(async(() => {
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
