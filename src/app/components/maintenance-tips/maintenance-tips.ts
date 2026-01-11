import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-maintenance-tips',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="maintenance-section py-5 bg-white">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="text-primary fw-bold">Electronics Care & Maintenance Tips</h2>
          <p class="text-muted">Pro tips from Tejani Electronics to extend the life of your devices.</p>
        </div>
        <div class="row g-4">
          <div class="col-md-6" *ngFor="let tip of tips">
            <div class="card h-100 border-0 shadow-sm p-3">
              <div class="card-body">
                <h5 class="card-title text-primary"><i [class]="tip.icon + ' me-2'"></i>{{ tip.title }}</h5>
                <p class="card-text text-muted">{{ tip.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    .maintenance-section { border-top: 1px solid #eee; }
    .card { transition: transform 0.3s ease; }
    .card:hover { transform: translateY(-5px); }
  `]
})
export class MaintenanceTipsComponent {
    tips = [
        {
            title: 'LCD/LED TV Life Extension',
            content: 'Avoid keeping the brightness at 100% and ensure proper ventilation. Humidity is the biggest enemy of screen panels.',
            icon: 'bi bi-lightning-charge'
        },
        {
            title: 'Keyboard Dust Protection',
            content: 'Always use a dust cover when not in use. Dust particles can get under the keys and damage the sensor pads of your Yamaha or Roland keyboards.',
            icon: 'bi bi-shield-check'
        },
        {
            title: 'Microwave Oven Safety',
            content: 'Never run the microwave empty and keep the interiors clean. Food splatters can carbonize and cause sparking on the mica sheet.',
            icon: 'bi bi-safe'
        },
        {
            title: 'Music System Audio Quality',
            content: 'Keep speakers away from damp walls and ensure stable voltage. Using a stabilizer can prevent amplifier circuit blowouts.',
            icon: 'bi bi-volume-up'
        }
    ];
}
