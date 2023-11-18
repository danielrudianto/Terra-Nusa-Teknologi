import { Component } from '@angular/core';
import { Stacks } from 'src/app/models/stacks.model';

@Component({
  selector: 'app-stacks-page',
  templateUrl: './stacks-page.component.html',
  styleUrls: ['./stacks-page.component.css'],
})
export class StacksPageComponent {
  stacks: Stacks[] = [
    {
      name: 'Linux',
      description:
        'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.',
      image: 'assets/stacks/linux.webp',
    },
    {
      name: 'Windows',
      description:
        'Microsoft Windows, commonly referred to as Windows, is a group of several proprietary graphical operating system families, all of which are developed and marketed by Microsoft.',
      image: 'assets/stacks/windows.webp',
    },
    {
      name: 'Bash',
      description:
        'Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell.',
      image: 'assets/stacks/bash.webp',
    },
    {
      name: 'GoLang',
      description:
        'Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson.',
      image: 'assets/stacks/golang.webp',
    },
    {
      name: 'Python',
      description:
        'Python is an interpreted high-level general-purpose programming language.',
      image: 'assets/stacks/python.webp',
    },
    {
      name: 'PHP',
      description:
        'PHP is a general-purpose scripting language especially suited to web development.',
      image: 'assets/stacks/php.webp',
    },
    {
      name: 'React',
      description:
        'React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
      image: 'assets/stacks/react.webp',
    },
    {
      name: 'Angular',
      description:
        'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
      image: 'assets/stacks/angular.webp',
    },
    {
      name: 'Flutter',
      description:
        'Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.',
      image: 'assets/stacks/flutter.webp',
    },
    {
      name: 'TensorFlow',
      description:
        'TensorFlow is a free and open-source software library for machine learning. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks.',
      image: 'assets/stacks/tensorflow.webp',
    },
    {
      name: 'Docker',
      description:
        'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
      image: 'assets/stacks/docker.webp',
    },
    {
      name: 'Redis',
      description:
        'Redis is an in-memory data structure project implementing a distributed, in-memory key-value database with optional durability.',
      image: 'assets/stacks/redis.webp',
    },
    {
      name: 'MongoDB',
      description:
        'MongoDB is a source-available cross-platform document-oriented database program.',
      image: 'assets/stacks/mongodb.webp',
    },
  ];

  // Select 7 random stacks
  selectedStacks: Stacks[] = this.stacks
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);
}
