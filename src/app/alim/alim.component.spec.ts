import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimComponent } from './alim.component';

describe('AlimComponent', () => {
  let component: AlimComponent;
  let fixture: ComponentFixture<AlimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
