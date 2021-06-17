import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalariuComponent } from './view-salariu.component';

describe('ViewSalariuComponent', () => {
  let component: ViewSalariuComponent;
  let fixture: ComponentFixture<ViewSalariuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSalariuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalariuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
