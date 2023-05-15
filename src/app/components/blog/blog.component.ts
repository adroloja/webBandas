import { Component, OnInit } from '@angular/core';
import { DataBandaService } from 'src/app/services/data-banda.service';
import { map } from 'rxjs';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  blogs: any = []
 
  constructor(private data: DataBandaService, 
              public datosUsuario: DatosUsuarioService){ }


  ngOnInit() {
   
    this.data.getBlog().subscribe(result => {

      this.blogs = result;
      this.blogs = this.blogs[0].blogs;

    });
  }

  eliminarBlog(id: string){
    
    this.data.eliminarBlog(id).subscribe(result => {

      console.log(result);
    });

    this.data.getBlog().subscribe(result => {

      this.blogs = result;
      this.blogs = this.blogs[0].blogs;

    });
  }


}
