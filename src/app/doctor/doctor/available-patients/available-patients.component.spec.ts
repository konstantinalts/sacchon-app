import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePatientsComponent } from './available-patients.component';

describe('AvailablePatientsComponent', () => {
  let component: AvailablePatientsComponent;
  let fixture: ComponentFixture<AvailablePatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablePatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
