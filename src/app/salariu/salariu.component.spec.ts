import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariuComponent } from './salariu.component';

describe('SalariuComponent', () => {
  let component: SalariuComponent;
  let fixture: ComponentFixture<SalariuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalariuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalariuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
