import { TestBed } from '@angular/core/testing';
import {
  provideHttpClientTesting,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FinancialIndicatorService } from './financial-indicator.service';

describe('FinancialIndicatorService', () => {
  let service: FinancialIndicatorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), FinancialIndicatorService],
    });
    service = TestBed.inject(FinancialIndicatorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener indicadores', () => {
    const mockResponse = {
      dolar: [{ Fecha: '2024-07-05', Valor: '936.55' }],
    };

    service.getIndicators().subscribe((indicators) => {
      expect(indicators.length).toBe(1);
      expect(indicators).toEqual([
        {
          name: 'dolar',
          values: mockResponse.dolar,
          latestValue: '936.55',
          latestDate: '2024-07-05',
        },
      ]);
    });

    const req = httpMock.expectOne((req) =>
      req.url.includes('posteriores/2023/07')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
