import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-clients-testimonials',
  imports: [NgFor],
  templateUrl: './clients-testimonials.component.html',
  styleUrl: './clients-testimonials.component.scss',
})
export class ClientsTestimonialsComponent {
  testimonials = [
    {
      image: '/images/image-emily.jpg',
      quote:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      role: 'Marketing Director',
    },
    {
      image: '/images/image-thomas.jpg',
      quote:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying experience.',
      name: 'Thomas S.',
      role: 'Chief Operating Officer',
    },
    {
      image: '/images/image-jennie.jpg',
      quote:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside.',
      name: 'Jennie F.',
      role: 'Business Owner',
    },
  ];
}
