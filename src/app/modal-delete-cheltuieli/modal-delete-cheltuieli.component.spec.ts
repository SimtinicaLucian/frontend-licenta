import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalDeleteCheltuieliComponent } from './modal-delete-cheltuieli.component';

describe('ModalDeleteCheltuieliComponent', () => {
  let component: ModalDeleteCheltuieliComponent;
  let fixture: ComponentFixture<ModalDeleteCheltuieliComponent>;

  beforeEach(waitForAsync(() => {
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
