import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent {
  galleryItems = [
    {
      title: 'Universal Keyboard Case',
      description: 'Custom-fit protection for all major keyboard brands. Durable, lightweight, and travel-ready.',
      image: 'assets/images/universal-keyboard-case.png' /* Piano/Keyboard case context */
    },
    {
      title: 'Roland Keyboard Repair',
      description: 'Specialized repair services for Roland synthesizers, workstations, and digital pianos.',
      image: 'https://images.unsplash.com/photo-1635043702883-20db8a5b1f4d?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Yamaha Keyboard Repair',
      description: 'Expert diagnostics and repair for Yamaha PSR series, motifs, and digital pianos.',
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Casio Keyboard Repair',
      description: 'Trusted repairs for Casio keyboards, ensuring original tone and functionality.',
      image: 'https://images.unsplash.com/photo-1689650052441-889590ed84ed?q=80&w=800&auto=format&fit=crop' /* Casio Expertise context */
    }
  ];
}
