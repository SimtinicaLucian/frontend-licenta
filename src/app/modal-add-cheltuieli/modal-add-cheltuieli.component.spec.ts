import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalAddCheltuieliComponent } from './modal-add-cheltuieli.component';

describe('ModalAddCheltuieliComponent', () => {
  let component: ModalAddCheltuieliComponent;
  let fixture: ComponentFixture<ModalAddCheltuieliComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddCheltuieliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddCheltuieliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});