import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('routerAnimation', [
  // transition('1 => 2, 1 => 3, 1 => 4, 2 => 3, 2 => 4, 3 => 4', [
  transition(
    '1 => 2, 1 => 3, 1 => 4, 2 => 3, 2 => 4, 3 => 4, 4 => 1, 4 => 2, 4 => 3, 3 => 2, 3 => 1, 2 => 1',
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
        }),
      ]),
    ]
  ),
  // transition('4 => 1, 4 => 2, 4 => 3, 3 => 2, 3 => 1, 2 => 1', [
  transition(
    '1 => 2, 1 => 3, 1 => 4, 2 => 3, 2 => 4, 3 => 4, 4 => 1, 4 => 2, 4 => 3, 3 => 2, 3 => 1, 2 => 1',
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '-100%', opacity: 0 })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('0.3s ease-out', style({ left: '100%', opacity: 0 })),
        ]),
        query(':enter', [
          animate('0.3s ease-out', style({ left: '0%', opacity: 1 })),
        ]),
      ]),
      query(':enter', animateChild()),
    ]
  ),
]);

export const slideInAnimation = trigger('slideRouterAnimations', [
  transition('HomePage <=> AboutPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))],
        { optional: true }
      ),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
