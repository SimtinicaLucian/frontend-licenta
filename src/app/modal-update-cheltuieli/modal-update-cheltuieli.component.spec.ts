import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateCheltuieliComponent } from './modal-update-cheltuieli.component';

describe('ModalUpdateCheltuieliComponent', () => {
  let component: ModalUpdateCheltuieliComponent;
  let fixture: ComponentFixture<ModalUpdateCheltuieliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateCheltuieliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateCheltuieliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
