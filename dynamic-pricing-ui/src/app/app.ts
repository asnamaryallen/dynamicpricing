import { Component, signal } from '@angular/core';
import { PricingTable } from './components/pricing-table/pricing-table'; // 

@Component({
  selector: 'app-root',
  imports: [ PricingTable], // ✅ FIXED
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dynamic-pricing-ui');
}