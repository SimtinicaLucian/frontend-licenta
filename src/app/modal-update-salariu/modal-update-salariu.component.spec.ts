import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateSalariuComponent } from './modal-update-salariu.component';

describe('ModalUpdateSalariuComponent', () => {
  let component: ModalUpdateSalariuComponent;
  let fixture: ComponentFixture<ModalUpdateSalariuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateSalariuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateSalariuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
