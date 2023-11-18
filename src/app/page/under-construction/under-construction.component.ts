import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css'],
})
export class UnderConstructionComponent {
  @Input('title') title!: string;
}
