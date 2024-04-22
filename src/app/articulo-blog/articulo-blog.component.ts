import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articulo-blog',
  standalone: true,
  imports: [],
  templateUrl: './articulo-blog.component.html',
  styleUrl: './articulo-blog.component.css'
})
export class ArticuloBlogComponent {

  @Input()
  id: string = "";

  relleno: string = "Lorem ipsum dolor sit amet consectetur adipiscing elit mauris massa, quam lacus ante urna quis dictumst nam feugiat, leo lacinia aenean ligula vel pretium ultricies lectus. Feugiat ante himenaeos commodo ultrices turpis semper parturient urna enim eget sollicitudin, cras montes faucibus nunc proin rutrum pellentesque integer eros cum. Elementum curabitur sapien enim laoreet dictum ullamcorper fames, bibendum egestas ad eros leo maecenas curae, facilisi id rhoncus nullam nascetur turpis, imperdiet pharetra tempor ultricies placerat euismod.";


  articulos =[
   {id: "1", nombre: "Hacking ético", imagen: "https://www.tec-innova.mx/wp-content/uploads/2022/04/Hacking-Etico.jpg", descripcion: this.relleno },
   {id: "2", nombre: "Legislación de seguridad en Europa",  imagen: "https://i.blogs.es/92f692/gdpr/1366_2000.jpg", descripcion: this.relleno},
   {id: "3", nombre: "¿Cómo evitar que te hackeen la cuenta?", imagen: "https://dsigrupo.com/wp-content/uploads/2021/03/Co%CC%81mo-tener-tu-cuenta-de-Instagram-ma%CC%81s-segura-y-protegida.-2.jpg", descripcion: this.relleno},
  {id: "4", nombre: "¿Qué es phising?", imagen: "https://www.lisot.com/wp-content/uploads/2021/06/que-es-phising.jpg", descripcion: this.relleno}
  ]
}
