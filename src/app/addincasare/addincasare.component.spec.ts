import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddincasareComponent } from './addincasare.component';

describe('AddincasareComponent', () => {
  let component: AddincasareComponent;
  let fixture: ComponentFixture<AddincasareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddincasareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddincasareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
