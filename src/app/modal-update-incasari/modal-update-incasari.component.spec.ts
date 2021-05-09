import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalUpdateIncasariComponent } from './modal-update-incasari.component';

describe('ModalUpdateIncasariComponent', () => {
  let component: ModalUpdateIncasariComponent;
  let fixture: ComponentFixture<ModalUpdateIncasariComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateIncasariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateIncasariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
