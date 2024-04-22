import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-ciber',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-ciber.component.html',
  styleUrl: './blog-ciber.component.css'
})
export class BlogCiberComponent {

  descripcionHackingEtico: string = "Exploración de las técnicas utilizadas por los hackers éticos para fortalecer la seguridad de los sistemas informáticos y protegerlos de ataques maliciosos."
  descripcionSeguridadEuropa: string = "Resumen de las principales leyes y regulaciones europeas diseñadas para proteger la seguridad de la información y la privacidad de los datos en el continente."
  descripcionEvitarHack: string = "Consejos prácticos para aumentar la seguridad de tus cuentas en línea, incluyendo la implementación de autenticación de dos factores y el uso de contraseñas fuertes."
  descripcionPhising: string = "Definición del phishing como técnica de engaño donde los estafadores envían mensajes falsos intentando obtener información personal y financiera de las víctimas."

  articulos =[
   {id: "1", nombre: "Hacking ético", imagen: "https://www.tec-innova.mx/wp-content/uploads/2022/04/Hacking-Etico.jpg", descripcion: this.descripcionHackingEtico },
   {id: "2", nombre: "Legislación de seguridad en Europa",  imagen: "https://i.blogs.es/92f692/gdpr/1366_2000.jpg", descripcion: this.descripcionSeguridadEuropa},
   {id: "3", nombre: "¿Cómo evitar que te hackeen la cuenta?", imagen: "https://dsigrupo.com/wp-content/uploads/2021/03/Co%CC%81mo-tener-tu-cuenta-de-Instagram-ma%CC%81s-segura-y-protegida.-2.jpg", descripcion: this.descripcionEvitarHack},
  {id: "4", nombre: "¿Qué es phising?", imagen: "https://www.lisot.com/wp-content/uploads/2021/06/que-es-phising.jpg", descripcion: this.descripcionPhising}
  ]
}
