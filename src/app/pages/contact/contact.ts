import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  fileError = '';

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      description: ['', Validators.required],
      image_link: [''] // Replaced file upload with link
    });
  }

  // File handling removed due to EmailJS Free Tier 50KB limit

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      const formData = this.contactForm.value;

      // Manually construct the message to include the image link
      let fullMessage = formData.description;
      if (formData.image_link) {
        fullMessage += `\n\n[Google Drive Link]: ${formData.image_link}`;
      }

      const emailData = {
        user_name: formData.name,
        user_phone: formData.phone,
        message: fullMessage,
        // We can pass image_link separately too if the template supports it, but appending ensures safety
        image_link: formData.image_link
      };

      try {
        await this.emailService.sendEmail(emailData);
        this.submitMessage = 'Message sent successfully!';
        this.contactForm.reset();
      } catch (error: any) {
        console.error('Email send failed', error);
        // Extract meaningful error message
        const errorMessage = error?.text || error?.message || 'Unknown error occurred';
        this.submitMessage = `Failed to send message: ${errorMessage}`;
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
