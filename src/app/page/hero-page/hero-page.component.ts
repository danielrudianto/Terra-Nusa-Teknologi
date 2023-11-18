import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { getDocument } from 'ssr-window';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
  animations: [
    // animation triggers go here
    // Create animation to fade from opacity 0 to 1
    trigger('fadeIn', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state(
        'start',
        style({
          opacity: 0,
        })
      ),
      state(
        'complete',
        style({
          opacity: 1,
        })
      ),
      transition('start => complete', [animate('1s')]),
      transition('complete => start', [animate('1s')]),
    ]),
  ],
})
export class HeroPageComponent implements OnInit, AfterViewChecked {
  start: boolean = false;
  date: Date = new Date();
  @Output('onButtonClick') onButtonClick = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.start = true;
    }, 200);
  }

  ngAfterViewChecked(): void {
    var video: any = getDocument().getElementById('video');
    if (video) {
      video.play();
    }
  }

  onClick(event: string) {
    this.onButtonClick.emit(event);
  }
}
