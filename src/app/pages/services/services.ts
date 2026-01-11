import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  services = [
    { title: 'Universal Keyboard Cases', description: 'Premium custom-manufactured cases for Yamaha, Casio, Roland keyboards. Durable protection for transport.', icon: 'bi bi-briefcase' },
    { title: 'LCD/LED TV Repair', description: 'Expert TV screen repair, backlight replacement, motherboard fixing. All brands: Samsung, LG, Sony, Panasonic.', icon: 'bi bi-display' },
    { title: 'Microwave Oven Repair', description: 'Microwave circuit board repair, magnetron replacement, door switch fixing. Same-day service available.', icon: 'bi bi-tools' },
    { title: 'Music System Repair', description: 'Audio system servicing, amplifier repair, speaker replacement. Restore crystal-clear sound quality.', icon: 'bi bi-speaker' },
    { title: 'Musical Keyboard Repair', description: 'Keyboard key replacement, circuit repair, power supply fixing for Yamaha, Casio, Roland, Korg keyboards.', icon: 'bi bi-music-note-beamed' }
  ];
}
