import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteIncasariComponent } from './modal-delete-incasari.component';

describe('ModalDeleteIncasariComponent', () => {
  let component: ModalDeleteIncasariComponent;
  let fixture: ComponentFixture<ModalDeleteIncasariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteIncasariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteIncasariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
