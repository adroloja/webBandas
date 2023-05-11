import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  bandaBlog = [
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam! <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam!'
    }, {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam! <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam!'
    }, {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam! <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi adipisci, aliquid molestias labore quisquam eveniet sapiente at rem aliquam!'
    }
  ]
}
