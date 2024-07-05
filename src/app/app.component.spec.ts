import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { IndicatorListComponent } from './components/indicator-list/indicator-list.component';
import { IndicatorDetailComponent } from './components/indicator-detail/indicator-detail.component';
import { FinancialIndicatorService } from './services/financial-indicator.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, IndicatorListComponent, IndicatorDetailComponent],
      providers: [provideHttpClientTesting(), FinancialIndicatorService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería manejar los detalles del indicador', () => {
    const mockDetails = {
      name: 'mock',
      values: [{ Fecha: '2024-07-05', Valor: '936.55' }],
    };
    component.handleIndicatorDetails(mockDetails);
    expect(component.indicatorDetails).toEqual(mockDetails);
  });

  it('debería renderizar el título', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'financial-indicators'
    );
  });
});
