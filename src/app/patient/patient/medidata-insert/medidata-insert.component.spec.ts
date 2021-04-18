import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidataInsertComponent } from './medidata-insert.component';

describe('MedidataInsertComponent', () => {
  let component: MedidataInsertComponent;
  let fixture: ComponentFixture<MedidataInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidataInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidataInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
