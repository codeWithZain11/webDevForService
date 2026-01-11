import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-terms',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container py-5">
      <h1 class="text-primary mb-4">Terms of Service</h1>
      <p class="text-muted">Last updated: December 28, 2025</p>
      
      <section class="mb-5">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the Tejani Electronics website, you agree to comply with and be bound by these Terms of Service.</p>
      </section>

      <section class="mb-5">
        <h2>2. Services</h2>
        <p>Tejani Electronics provides electronics repair services and manufactures keyboard cases. All service timelines and quotes are estimates and may vary based on part availability and repair complexity.</p>
      </section>

      <section class="mb-5">
        <h2>3. User Responsibilities</h2>
        <p>Users are responsible for providing accurate information when contacting us and for backing up data on devices brought in for repair.</p>
      </section>

      <section class="mb-5">
        <h2>4. Limitation of Liability</h2>
        <p>Tejani Electronics is not liable for indirect, incidental, or consequential damages resulting from the use of our services or products.</p>
      </section>
    </div>
  `,
    styles: [`
    .container { max-width: 800px; }
    h2 { font-size: 1.5rem; margin-top: 2rem; color: #333; }
  `]
})
export class TermsComponent { }
