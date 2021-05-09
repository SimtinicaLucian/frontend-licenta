import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalUpdateUserComponent } from './modal-update-user.component';

describe('ModalUpdateUserComponent', () => {
  let component: ModalUpdateUserComponent;
  let fixture: ComponentFixture<ModalUpdateUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
