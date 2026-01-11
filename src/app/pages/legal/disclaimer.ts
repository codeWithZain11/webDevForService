import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-disclaimer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container py-5">
      <h1 class="text-primary mb-4">Disclaimer</h1>
      <p class="text-muted">Last updated: December 28, 2025</p>
      
      <section class="mb-5">
        <h2>1. General Information</h2>
        <p>The information provided by Tejani Electronics on this website is for general informational purposes only. All information is provided in good faith.</p>
      </section>

      <section class="mb-5">
        <h2>2. Professional Advice</h2>
        <p>While we are experts in electronics repair, any "tips" or "advice" provided on this site should be followed at your own risk. Always consult with a professional before attempting repairs yourself.</p>
      </section>

      <section class="mb-5">
        <h2>3. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites.</p>
      </section>
    </div>
  `,
    styles: [`
    .container { max-width: 800px; }
    h2 { font-size: 1.5rem; margin-top: 2rem; color: #333; }
  `]
})
export class DisclaimerComponent { }
