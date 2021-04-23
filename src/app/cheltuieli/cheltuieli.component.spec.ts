import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheltuieliComponent } from './cheltuieli.component';

describe('CheltuieliComponent', () => {
  let component: CheltuieliComponent;
  let fixture: ComponentFixture<CheltuieliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheltuieliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheltuieliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
