import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.development';
import { CareerDetailPageComponent } from './career-detail-page/career-detail-page.component';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.css'],
})
export class CareerPageComponent implements OnInit {
  data: any[] = [];
  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/career`).subscribe((res) => {
      this.data = res as any[];
    });
  }

  openVacation(vacation: any) {
    this.dialog.open(CareerDetailPageComponent, {
      data: vacation,
      panelClass: 'career-detail-dialog',
    });
  }
}
