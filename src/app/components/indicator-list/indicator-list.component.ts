import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FinancialIndicatorService } from '../../services/financial-indicator.service';

@Component({
  selector: 'app-indicator-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatListModule, MatButtonModule],
  templateUrl: './indicator-list.component.html',
  styleUrls: ['./indicator-list.component.css'],
})
export class IndicatorListComponent implements OnInit {
  indicators: any[] = [];
  @Output() indicatorDetails = new EventEmitter<any>();

  constructor(private financialIndicatorService: FinancialIndicatorService) {}

  ngOnInit(): void {
    this.financialIndicatorService.getIndicators().subscribe((data) => {
      this.indicators = data.map((indicator: any) => {
        const { name, values } = indicator;
        const filteredValues = this.filterValues(name, values);
        const sortedValues = this.sortValues(filteredValues);
        return { name, values: sortedValues };
      });
    });
  }

  filterValues(name: string, values: any[]): any[] {
    if (['Dolares', 'Euros', 'UFs'].includes(name)) {
      const reversedValues = values.reverse();
      return reversedValues.slice(0, 30);
    } else {
      return values;
    }
  }

  sortValues(values: any[]): any[] {
    return values.sort(
      (a, b) => new Date(b.Fecha).getTime() - new Date(a.Fecha).getTime()
    );
  }

  showDetail(indicator: any): void {
    this.indicatorDetails.emit(indicator);
  }
}
