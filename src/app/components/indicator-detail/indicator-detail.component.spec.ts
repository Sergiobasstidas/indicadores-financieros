import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicatorDetailComponent } from './indicator-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IndicatorDetailComponent', () => {
  let component: IndicatorDetailComponent;
  let fixture: ComponentFixture<IndicatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicatorDetailComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
