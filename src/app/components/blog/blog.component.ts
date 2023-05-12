import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  bandaBlog = [
    {
      title: 'Hola',
      band: 'Hola chicos',
      content: 'Lamet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam! <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam!'
    }, {
      title: 'Adios', band: 'Adios chicas',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam! <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam!'
    }, {
      title: 'EL TITL', band: 'Serge',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam! <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam!'
    }
  ]
}
