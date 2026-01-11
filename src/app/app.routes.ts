import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) },
  { path: 'privacy-policy', loadComponent: () => import('./pages/legal/privacy-policy').then(m => m.PrivacyPolicyComponent) },
  { path: 'terms', loadComponent: () => import('./pages/legal/terms').then(m => m.TermsComponent) },
  { path: 'disclaimer', loadComponent: () => import('./pages/legal/disclaimer').then(m => m.DisclaimerComponent) },
  { path: '**', redirectTo: '' }
];
