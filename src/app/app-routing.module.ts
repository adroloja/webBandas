import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  //! cambiar el tipo de dato "title" para cambiar el título de la pestaña
  { path: '', component: PrincipalComponent, data: { title: 'INICIO' } },
  { path: 'bandas', component: BandasComponent, data: { title: 'BANDAS' } },
  { path: 'blog', component: BlogComponent, data: { title: 'BLOG' } },
  { path: 'contacto', component: ContactoComponent, data: { title: 'CONTACTO' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
