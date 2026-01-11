import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container py-5">
      <h1 class="text-primary mb-4">Privacy Policy</h1>
      <p class="text-muted">Last updated: December 28, 2025</p>
      
      <section class="mb-5">
        <h2>1. Introduction</h2>
        <p>Tejani Electronics ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.</p>
      </section>

      <section class="mb-5">
        <h2>2. Information We Collect</h2>
        <p>We may collect personal information that you provide directly to us through our contact form, including your name, email address, and phone number.</p>
      </section>

      <section class="mb-5">
        <h2>3. Google AdSense</h2>
        <p>We use Google AdSense to serve ads on our website. Google uses cookies to serve ads based on your previous visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet.</p>
        <p>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank">Ads Settings</a>.</p>
      </section>

      <section class="mb-5">
        <h2>4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Tejani Electronics<br>Vasai Road, Maharashtra, India<br>Email: tejani.electronics@gmail.com</p>
      </section>
    </div>
  `,
    styles: [`
    .container { max-width: 800px; }
    h2 { font-size: 1.5rem; margin-top: 2rem; color: #333; }
  `]
})
export class PrivacyPolicyComponent { }
