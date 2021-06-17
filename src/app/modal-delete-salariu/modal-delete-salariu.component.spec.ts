import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteSalariuComponent } from './modal-delete-salariu.component';

describe('ModalDeleteSalariuComponent', () => {
  let component: ModalDeleteSalariuComponent;
  let fixture: ComponentFixture<ModalDeleteSalariuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteSalariuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteSalariuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
