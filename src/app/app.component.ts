import { Component } from '@angular/core';
import { IndicatorListComponent } from './components/indicator-list/indicator-list.component';
import { IndicatorDetailComponent } from './components/indicator-detail/indicator-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, IndicatorListComponent, IndicatorDetailComponent],
})
export class AppComponent {
  title = 'financial-indicators';
  indicatorDetails: any;

  handleIndicatorDetails(details: any): void {
    this.indicatorDetails = details;
  }
}
