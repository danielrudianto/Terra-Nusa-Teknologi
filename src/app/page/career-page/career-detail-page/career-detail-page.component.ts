import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-career-detail-page',
  templateUrl: './career-detail-page.component.html',
  styleUrl: './career-detail-page.component.css',
})
export class CareerDetailPageComponent {
  id: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.id = data.id.toString().padStart(4, '0');
  }
}
