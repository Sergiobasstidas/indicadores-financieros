import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface IndicatorValue {
  Valor: string;
  Fecha: string;
}

interface IndicatorResponse {
  [key: string]: IndicatorValue[];
}

@Injectable({
  providedIn: 'root',
})
export class FinancialIndicatorService {
  private apiUrl = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';
  private apiKey = 'bf6b491ec46caf655a1204c927f559580679f4c4';
  private indicators: Record<string, string> = {
    Dólares: 'dolar',
    Euros: 'euro',
    IPC: 'ipc',
    UF: 'uf',
    UTM: 'utm',
  };

  constructor(private http: HttpClient) {}

  getIndicators(): Observable<any> {
    const requests = Object.values(this.indicators).map((indicator) =>
      this.http
        .get<IndicatorResponse>(
          `${this.apiUrl}/${indicator}/posteriores/2023/07?apikey=${this.apiKey}&formato=json`
        )
        .pipe(
          map((response: IndicatorResponse) => {
            const key = Object.keys(response)[0];
            const values = response[key];
            const latestValue = values[values.length - 1]?.Valor || null;
            const latestDate = values[values.length - 1]?.Fecha || null;
            return { name: key, values: values, latestValue, latestDate };
          }),
          catchError((error) => {
            console.error(`Error fetching ${indicator}:`, error);
            return of({
              name: indicator,
              values: [],
              latestValue: null,
              latestDate: null,
            });
          })
        )
    );

    return forkJoin(requests);
  }
}
