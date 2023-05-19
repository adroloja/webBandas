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
   /*========================================================================================================================== 
    ==========================================================================================================================

                                                      VARIABLES

   ==========================================================================================================================
   ==========================================================================================================================*/

  blogs: any = [];
  insertar: boolean = false;
  titulo: string = "";
  subtitulo: string = "";
  contenido: string = "";
 
  constructor(private data: DataBandaService, 
              public datosUsuario: DatosUsuarioService){ }


  ngOnInit() {
    // Trae todos los blog de la base de datos y los muestra en orden opuesto para que el ultimo sea el primero que se muestre
    this.data.getBlog().subscribe(result => {

      this.blogs = result;
      this.blogs = this.blogs[0].blogs.reverse();

    });
  }
   /*========================================================================================================================== 
    ==========================================================================================================================

                      Funcion que elimina la publicación del blog elegida que solo peude eliminarlo el administrador

   ==========================================================================================================================
   ==========================================================================================================================*/

  eliminarBlog(id: string){
    
    this.data.eliminarBlog(id).subscribe(result => {

      console.log(result);
    });
    // Luego despues de eliminarlo actualiza la lista para que se muestre sin el eliminado
    this.data.getBlog().subscribe(result => {

      this.blogs = result;
      this.blogs = this.blogs[0].blogs.reverse();

    });
  }
   /*========================================================================================================================== 
    ==========================================================================================================================

                                      Inserta una nueva publicación el blog

   ==========================================================================================================================
   ==========================================================================================================================*/

  insertarBlog(){
    this.data.insertarBlog(this.titulo, this.subtitulo, this.contenido).subscribe(result => {
   
      this.insertar = false;      
    });

    // Y actualiza para que se muestre
    this.data.getBlog().subscribe(result => {

      this.blogs = result;
      this.blogs = this.blogs[0].blogs.reverse();

    });
  }

  // Activador que hace que se muestre las opciones de administrador
  activarInsertar(){
    this.insertar = true;
  }


}
