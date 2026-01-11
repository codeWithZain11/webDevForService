import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { emailConfig } from '../config/email-config';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceID = emailConfig.serviceID;
  private templateID = emailConfig.templateID;
  private publicKey = emailConfig.publicKey;

  constructor() {
    emailjs.init(this.publicKey);
  }

  async sendEmail(data: Record<string, unknown>): Promise<EmailJSResponseStatus> {
    // Add a timeout to prevent hanging
    const sendPromise = emailjs.send(this.serviceID, this.templateID, data);

    const timeoutPromise = new Promise<EmailJSResponseStatus>((_, reject) => {
      setTimeout(() => reject(new Error('Request timed out. Please check your internet connection.')), 15000);
    });

    return Promise.race([sendPromise, timeoutPromise]);
  }
}
