import { Routes } from '@angular/router';
import { WebInmuebleComponent } from './web-inmueble/web-inmueble.component';
import { DetalleInmuebleComponent } from './detalle-inmueble/detalle-inmueble.component';
import { BlogCiberComponent } from './blog-ciber/blog-ciber.component';
import { ArticuloBlogComponent } from './articulo-blog/articulo-blog.component';
import { PortalComponent } from './portal/portal.component';

export const routes: Routes = [
    {path: "Inicio", component: WebInmuebleComponent},
    {path: "Detalle/:id", component: DetalleInmuebleComponent},
    {path: "BlogInicio", component: BlogCiberComponent},
    {path: "Articulo/:id", component: ArticuloBlogComponent},
    {path: "Portal", component: PortalComponent},
    {path: "", redirectTo:'/Portal', pathMatch: "full"},
    {path: "**", title: "No encontrado", component: Error}

    

];
