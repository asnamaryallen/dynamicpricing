import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pricing-table',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './pricing-table.html',
  styleUrl: './pricing-table.css'
})
export class PricingTable implements OnInit {
  private http = inject(HttpClient);
  
  // Master state for the data
  pricing = signal<any>(null);

  // The categories we want to loop through and display
  categories = ['default', 'inserts', 'fr'];

  // Signal to track which accordion sections are open
  expandedSections = signal<Record<string, boolean>>({
    'default': true,             // Starts open
    'inserts': false,            // Starts closed
    'fr': false,                 // Starts closed
    'additional_charge': true    // Starts open
  });

  ngOnInit() {
    this.http.get('assets/pricing.json').subscribe({
      next: (res: any) => {
        this.pricing.set(res.data.embroidered_specials.rui);
      },
      error: (err) => console.error('Could not load JSON', err)
    });
  }

  // Toggles the accordion open/closed
  toggleSection(section: string) {
    this.expandedSections.update(state => ({
      ...state,
      [section]: !state[section]
    }));
  }

  // Notice we added 'category: string' to all these functions
  // so the app knows exactly which section's data to change!
  
  updatePrice(category: string, index: number, newValue: any) {
    this.pricing.update(state => {
      const newState = { ...state };
      newState[category].price[index] = newValue;
      return newState;
    });
  }

  updateTierValue(category: string, index: number, newValue: number) {
    this.pricing.update(state => {
      const newState = { ...state };
      newState[category].item_tier[index] = newValue;
      return newState;
    });
  }

  addColumn(category: string) {
    this.pricing.update(state => {
      const newState = { ...state };
      newState[category].item_tier.push(0);
      newState[category].price.push(0);
      return newState;
    });
  }

  removeColumn(category: string, index: number) {
    this.pricing.update(state => {
      const newState = { ...state };
      newState[category].item_tier.splice(index, 1);
      newState[category].price.splice(index, 1);
      return newState;
    });
  }
}