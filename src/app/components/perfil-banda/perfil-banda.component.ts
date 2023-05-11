import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-banda',
  templateUrl: './perfil-banda.component.html',
  styleUrls: ['./perfil-banda.component.css']
})
export class PerfilBandaComponent {
  bandaProfile = [
    {
      img: './assets/img/banner1.jpg',
      name: 'Test!',
      province: 'Ademas',
      componentesNum: '60',
      video1: './assets/img/banner1.jpg',
      video2: './assets/img/banner1.jpg',
      video3: './assets/img/banner1.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta distinctio fugit ipsam culpa, dolorum ab animi explicabo iusto repellendus voluptatem similique eveniet omnis voluptas aperiam? Ab deleniti perspiciatis et temporibus commodi unde nisi quam ipsum quaerat fugiat, ut velit nihil assumenda excepturi illo ipsa numquam similique maxime soluta. Quod aspernatur, consectetur odio aperiam nobis harum dolor, nulla exercitationem quo fuga maiores eaque, distinctio corporis? Iste aut consequatur maxime quis voluptatem, nihil dolorem, sint aliquam praesentium provident error, natus reiciendis culpa odit porro repellat. Illo aspernatur unde nihil eum soluta, quos necessitatibus illum saepe praesentium iusto vel doloribus dolore sunt?',
    }
  ]
}
