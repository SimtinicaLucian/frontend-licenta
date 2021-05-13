import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCheltuieliComponent } from './view-cheltuieli.component';

describe('ViewCheltuieliComponent', () => {
  let component: ViewCheltuieliComponent;
  let fixture: ComponentFixture<ViewCheltuieliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCheltuieliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCheltuieliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
