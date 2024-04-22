import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebInmuebleComponent } from './web-inmueble/web-inmueble.component';
import { BlogCiberComponent } from './blog-ciber/blog-ciber.component';
import { PortalComponent } from './portal/portal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebInmuebleComponent, BlogCiberComponent, PortalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril22';
}
