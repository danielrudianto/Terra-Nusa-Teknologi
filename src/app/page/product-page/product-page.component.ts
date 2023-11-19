import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  animations: [
    // Create 2 trigger, exit and enter
    // The enter will fade in the page and go from right
    // The exit will fade out the page and go to left

    trigger('imageAnimation', [
      state(
        'enter',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'leave',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('* => enter', [animate('0.3s')]),
      transition('* => leave', [animate('0.3s')]),
    ]),
  ],
})
export class ProductPageComponent implements OnInit {
  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.updateSelectedIndex();
  }

  updateSelectedIndex() {
    // Every 3 seconds, update the selected index
    setInterval(() => {
      this.selectedIndex =
        this.selectedIndex === 2 ? 0 : this.selectedIndex + 1;
    }, 3000);
  }

  scollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
