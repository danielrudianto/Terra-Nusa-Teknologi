import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}
  isLoading: boolean = false;
  contactFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.isLoading = true;
    this.http
      .post('https://terranusa.tech/api/contact', {
        name: this.contactFormGroup.value.name,
        email: this.contactFormGroup.value.email,
        message: this.contactFormGroup.value.message,
      })
      .subscribe({
        next: (data) => {
          this.snackbar.open('Message sent successfully', 'Close', {
            duration: 3000,
          });

          this.contactFormGroup.reset();
          this.isLoading = false;
        },
        error: (error) => {
          this.snackbar.open('Error sending message', 'Close', {
            duration: 3000,
          });

          this.isLoading = false;
        },
      });
  }
}
