import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetalleInmuebleComponent } from '../detalle-inmueble/detalle-inmueble.component';

@Component({
  selector: 'app-web-inmueble',
  standalone: true,
  imports: [RouterLink, DetalleInmuebleComponent],
  templateUrl: './web-inmueble.component.html',
  styleUrl: './web-inmueble.component.css'
})
export class WebInmuebleComponent {

  inmuebles = [
    {id: "1", nombre: "Inmueble 1", imagen: "https://fotografias.lasexta.com/clipping/cmsimages02/2022/10/24/43AD7DEE-6EB7-40D6-9BA7-1536294CFAAA/ventana-como-puerta-16-metros-utiles-120000-euros-madrid-ultimo-zulo-idealista_104.jpg?crop=645,645,x22,y0&width=1200&height=1200&optimize=low&format=webply", 
    descripcion: "Bonito subterráneo en madrid con una única habitación. Puedes hacer todo en uno, como ducharte y cocinar a la vez. El precio de entrada son 1200€"},
    {id: "2", nombre: "Inmueble 2", imagen: "https://fotografias.antena3.com/clipping/cmsimages02/2021/08/16/305489F7-AF83-4585-9B59-72AC12CAB756/103.jpg?crop=960,720,x161,y0&width=1200&height=900&optimize=low&format=webply",
    descripcion: "Bonito piso estilo obra. Prácticamente no necesita reforma. Incluye pintura de los primeros habitantes del inmueble allá por 1900"},
    {id: "3", nombre: "Inmueble 3", imagen: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/K4F3YJ4CJZFXRJ2GOUIRZRFACU.jpg",
    descripcion: "Amplia vivienda con vistas increíbles de madrid. Incluye muebles que sirven como pared para tener así privacidad mientras duermes" }
  ]

}
