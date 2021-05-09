import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalDeleteIncasariComponent } from './modal-delete-incasari.component';

describe('ModalDeleteIncasariComponent', () => {
  let component: ModalDeleteIncasariComponent;
  let fixture: ComponentFixture<ModalDeleteIncasariComponent>;

  beforeEach(waitForAsync(() => {
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
