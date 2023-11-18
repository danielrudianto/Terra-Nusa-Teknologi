import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent {
  @Input('text') text!: string;
  @Input('color') color!: string;
}
