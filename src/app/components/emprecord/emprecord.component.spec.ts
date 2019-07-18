import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprecordComponent } from './emprecord.component';

describe('EmprecordComponent', () => {
  let component: EmprecordComponent;
  let fixture: ComponentFixture<EmprecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
