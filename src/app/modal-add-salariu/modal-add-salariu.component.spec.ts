import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddSalariuComponent } from './modal-add-salariu.component';

describe('ModalAddSalariuComponent', () => {
  let component: ModalAddSalariuComponent;
  let fixture: ComponentFixture<ModalAddSalariuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddSalariuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddSalariuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
