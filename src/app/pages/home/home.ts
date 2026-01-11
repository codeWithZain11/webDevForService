import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from '../about/about';
import { GalleryComponent } from '../gallery/gallery';
import { ServicesComponent } from '../services/services';
import { ContactComponent } from '../contact/contact';
import { MaintenanceTipsComponent } from '../../components/maintenance-tips/maintenance-tips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AboutComponent, GalleryComponent, ServicesComponent, ContactComponent, MaintenanceTipsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
