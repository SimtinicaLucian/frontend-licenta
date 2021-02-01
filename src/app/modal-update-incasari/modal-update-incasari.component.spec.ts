import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateIncasariComponent } from './modal-update-incasari.component';

describe('ModalUpdateIncasariComponent', () => {
  let component: ModalUpdateIncasariComponent;
  let fixture: ComponentFixture<ModalUpdateIncasariComponent>;

  beforeEach(async(() => {
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
