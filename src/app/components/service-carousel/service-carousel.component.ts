import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-service-carousel',
  templateUrl: './service-carousel.component.html',
  styleUrls: ['./service-carousel.component.css'],
})
export class ServiceCarouselComponent implements AfterViewInit {
  @Input('services') services!: Service[];
  @ViewChild('slickModal') slickModal: any;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  afterChange(event: any) {}

  ngAfterViewInit() {}
}
