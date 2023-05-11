import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    const json = JSON.stringify({usuario: usuario, password: password});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    // probar a ver...
    const params = json;
    return this.http.post(GLOBAL.urlApi + "usuario/iniciosesion", params, {headers});    
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


  getBandas(){   
    return this.http.get(GLOBAL.urlApi  + "banda/getbandas");

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

  
  insertarActuaciones(login_id: string, id_actuaciones: string, fecha: string){          
    const json = JSON.stringify({login_id: login_id, id_actuaciones: id_actuaciones, fecha: fecha});
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
}
