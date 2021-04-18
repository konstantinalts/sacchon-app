import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPatientsDataComponent } from './my-patients-data.component';

describe('MyPatientsDataComponent', () => {
  let component: MyPatientsDataComponent;
  let fixture: ComponentFixture<MyPatientsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPatientsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPatientsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
