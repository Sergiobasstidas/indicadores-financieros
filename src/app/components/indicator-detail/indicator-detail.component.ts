import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-indicator-detail',
  standalone: true,
  imports: [CommonModule, MatListModule, NgApexchartsModule],
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.css'],
})
export class IndicatorDetailComponent implements OnChanges, OnInit {
  @Input() indicatorDetails: any;
  indicatorName: string = '';
  indicatorValues: any[] = [];

  @ViewChild('chart', { static: false }) chart: ChartComponent | null = null;
  public chartOptions: Partial<ChartOptions> = {
    series: [],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Análisis del Indicador',
      align: 'left',
    },
    subtitle: {
      text: 'Movimiento de Precios',
      align: 'left',
    },
    labels: [],
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  };

  ngOnInit(): void {
    this.updateChart([], []);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['indicatorDetails'] && this.indicatorDetails) {
      this.indicatorName = this.indicatorDetails.name;
      this.indicatorValues = this.indicatorDetails.values;

      const filteredValues = this.filterValues(
        this.indicatorName,
        this.indicatorValues
      );
      this.updateChart(
        filteredValues.map((value) => value.Fecha),
        filteredValues.map((value) => parseFloat(value.Valor.replace(',', '.')))
      );
    }
  }

  private filterValues(name: string, values: any[]): any[] {
    const sortedValues = values.sort(
      (a, b) => new Date(b.Fecha).getTime() - new Date(a.Fecha).getTime()
    );

    if (['Dolares', 'Euros', 'UFs'].includes(name)) {
      return sortedValues.slice(0, 10);
    } else {
      return values;
    }
  }

  private updateChart(dates: string[], values: number[]): void {
    this.chartOptions = {
      series: [
        {
          name: this.indicatorName,
          data: values,
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Análisis del Indicador',
        align: 'left',
      },
      subtitle: {
        text: 'Movimiento de Precios',
        align: 'left',
      },
      labels: dates,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
  }
}
