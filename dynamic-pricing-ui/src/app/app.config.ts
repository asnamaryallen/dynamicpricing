import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // This line fixes the NG0908 error by enabling Signal-based change detection
    provideZonelessChangeDetection(), 
    provideHttpClient()
  ]
};