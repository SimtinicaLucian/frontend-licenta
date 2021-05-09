import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalUpdateCheltuieliComponent } from './modal-update-cheltuieli.component';

describe('ModalUpdateCheltuieliComponent', () => {
  let component: ModalUpdateCheltuieliComponent;
  let fixture: ComponentFixture<ModalUpdateCheltuieliComponent>;

  beforeEach(waitForAsync(() => {
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
