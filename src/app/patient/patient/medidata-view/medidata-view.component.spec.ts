import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidataViewComponent } from './medidata-view.component';

describe('MedidataViewComponent', () => {
  let component: MedidataViewComponent;
  let fixture: ComponentFixture<MedidataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidataViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
