import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Stacks } from 'src/app/models/stacks.model';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-masonry-grid',
  templateUrl: './masonry-grid.component.html',
  styleUrls: ['./masonry-grid.component.css'],
})
export class MasonryGridComponent implements OnInit {
  @Input('stacks') stacks!: Stacks[];
  shownStacks: Stacks[] = [];
  // on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 480) {
      // Show only 2 items
      this.shownStacks = this.stacks.slice(0, 2);
    } else if (event.target.innerWidth <= 768) {
      // Show 6 items
      this.shownStacks = this.stacks.slice(0, 6);
    } else if (event.target.innerWidth <= 1200) {
      // Show 8 items
      this.shownStacks = this.stacks.slice(0, 8);
    } else {
      // Show all items
      this.shownStacks = this.stacks;
    }
  }

  constructor() {
    this.shownStacks = this.stacks;
  }

  ngOnInit(): void {
    // Check inner width
    const width = getWindow().innerWidth;
    if (getWindow().innerWidth <= 480) {
      // Show only 2 items
      this.shownStacks = this.stacks.slice(0, 2);
    } else if (getWindow().innerWidth <= 768) {
      // Show 6 items
      this.shownStacks = this.stacks.slice(0, 6);
    } else if (getWindow().innerWidth <= 1200) {
      // Show 8 items
      this.shownStacks = this.stacks.slice(0, 8);
    } else {
      // Show all items
      this.shownStacks = this.stacks;
    }
  }
}
