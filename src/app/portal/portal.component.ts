import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WebInmuebleComponent } from '../web-inmueble/web-inmueble.component';
import { BlogCiberComponent } from '../blog-ciber/blog-ciber.component';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [RouterLink, WebInmuebleComponent, BlogCiberComponent],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent {

}
