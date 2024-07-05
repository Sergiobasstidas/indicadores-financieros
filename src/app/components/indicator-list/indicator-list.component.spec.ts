import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicatorListComponent } from './indicator-list.component';
import { FinancialIndicatorService } from '../../services/financial-indicator.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IndicatorListComponent', () => {
  let component: IndicatorListComponent;
  let fixture: ComponentFixture<IndicatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicatorListComponent],
      providers: [provideHttpClientTesting(), FinancialIndicatorService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
