import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteCheltuieliComponent } from './modal-delete-cheltuieli.component';

describe('ModalDeleteCheltuieliComponent', () => {
  let component: ModalDeleteCheltuieliComponent;
  let fixture: ComponentFixture<ModalDeleteCheltuieliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteCheltuieliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteCheltuieliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
