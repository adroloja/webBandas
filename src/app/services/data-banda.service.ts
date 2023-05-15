import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class DataBandaService {  

  constructor(private http: HttpClient) { }

    /*=============================================================================================================================
    =============================================================================================================================

                                                        USUARIO

  =============================================================================================================================
  =============================================================================================================================*/

  insertarUsuario(usuario: string, password: string, tipo: string){
    return this.http.get(GLOBAL.urlApi + 'usuario/insertar/' + usuario + '/' + password + '/' + tipo + '/');
  }

  inicioSesion(usuario: string, password: string){
    let data = new FormData();
    data.append('usuario', usuario);
    data.append('password', password);
  
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  
    const options = { headers: headers };
    const params = new HttpParams().set('usuario', usuario).set('password', password);
    const body = params.toString();
  
    return this.http.post(GLOBAL.urlApi + "usuario/iniciosesion", body, options);
  }

  modificarUsuario(id_login: string, usuario: string, password: string, tipo: string){
    return this.http.get(GLOBAL.urlApi + "usuario/modificar/" + id_login + "/" + usuario + "/" + password + "/" + tipo + '/' );    
  }

  eliminarUsuario(id_login: string){
    return this.http.get(GLOBAL.urlApi + "usuario/eliminar/" + id_login + '/');
  }

  /*=============================================================================================================================
    =============================================================================================================================

                                                        BANDAS

  =============================================================================================================================
  =============================================================================================================================*/

  getBandaIdLogin(id: string){
    return this.http.get(GLOBAL.urlApi + 'banda/getbandaidlogin/' + id);
  }

  getBandas(provincia: string){   
    return this.http.get(GLOBAL.urlApi  + "banda/get/" + provincia);

  }

  getBandaId(id: string){
    return this.http.get(GLOBAL.urlApi + "banda/getId/" + id);
  }

  getBandasFecha(fecha: string){
    return this.http.get(GLOBAL.urlApi + 'banda/getporfecha/' + fecha);
  }

  insertarBanda(datos: any){
    const json = JSON.stringify({});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    // probar a ver...
    const params = json;
    return this.http.post(GLOBAL.urlApi + "banda/insertar", params, {headers});    
  }

  modificarBanda(datos: any){           //ver como viene los datos  id_banda, nombre, info, estilo, provincia
    const json = JSON.stringify({});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = json;
    return this.http.post(GLOBAL.urlApi + "banda/modificar", params, {headers});    
  }

  eliminarBanda(id_banda: string){                               // esta funcion en el servidor esta hecha con un delete
    const json = JSON.stringify({id_banda: id_banda});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = json;
    return this.http.post(GLOBAL.urlApi + "banda/eliminar", params, {headers});    
  }

  getBandasProvinciaFecha(provincia: string, fecha: string){

    return this.http.get(GLOBAL.urlApi + 'banda/getprovinciafecha/' + provincia + '/' + fecha);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////                      LINK DE BANDAS                      //////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  getLinks(id_login: string){
    
    return this.http.get(GLOBAL.urlApi + "banda/getlink/" + id_login + "/");    
  }

  modificarLink(id_link: string){           //ver como viene los datos  id_banda, nombre, info, estilo, provincia
    const json = JSON.stringify({id_link: id_link});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = json;
    return this.http.post(GLOBAL.urlApi + "banda/modificarlink", params, {headers});    
  }

  insertarLink(login_id: string, id_link: string, link: string){          // probar que id_link se crea solo
    const json = JSON.stringify({login_id: login_id, id_link: id_link, link: link});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    // probar a ver...
    const params = json;
    return this.http.post(GLOBAL.urlApi + "banda/insertarlink", params, {headers});    
  }

  eliminarLink(id_link: string){                               // esta funcion en el servidor esta hecha con un delete
    const json = JSON.stringify({id_link: id_link});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = json;
    return this.http.post(GLOBAL.urlApi + "banda/borrarlink", params, {headers});    
  }

  
  /*=============================================================================================================================
    =============================================================================================================================

                                                        ACTUACIONES

  =============================================================================================================================
  =============================================================================================================================*/

  getActuaciones(){                                                       // hacerla personalizada la busqueda
      return this.http.get(GLOBAL.urlApi + 'actuaciones/get');
  }

  getActuacionId(id: string){
      return this.http.get(GLOBAL.urlApi + 'actuaciones/get/' + id);
  }
  
  insertarActuaciones(banda_id: string, fecha: string, login_id: string){          
    const json = JSON.stringify({id_banda: banda_id, fecha: fecha, login_id: login_id});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = json;
    return this.http.post(GLOBAL.urlApi + "actuaciones/insertar", params, {headers});    
  }
  
  modificarActuaciones(id_actuaciones: string, fecha: string){          
    const json = JSON.stringify({id_actuaciones: id_actuaciones, fecha: fecha});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = json;
    return this.http.post(GLOBAL.urlApi + "actuaciones/modificar", params, {headers});    
  }
  
  eliminarActuaciones(id_actuaciones: string){          
    const json = JSON.stringify({id_actuaciones: id_actuaciones});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = json;
    return this.http.post(GLOBAL.urlApi + "actuaciones/borrar", params, {headers});    
  }

    /*=============================================================================================================================
    =============================================================================================================================

                                                        BLOG

  =============================================================================================================================
  =============================================================================================================================*/

  getBlog(){
    return this.http.get(GLOBAL.urlApi + 'blog/get');
  }

  insertarBlog(titulo: string, subtitulo: string, contenido: string){
    const json = JSON.stringify({titulo: titulo, subtitulo: subtitulo, contenido: contenido});
    return this.http.post(GLOBAL.urlApi + 'blog/insertar', json);
  }

  eliminarBlog(id_blog: string){

    return this.http.get(GLOBAL.urlApi + 'blog/eliminar/' + id_blog);
  }
}
