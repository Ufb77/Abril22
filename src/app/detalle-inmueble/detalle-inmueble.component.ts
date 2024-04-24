import { Component, Input } from '@angular/core';
import { Inmueble } from '../_modelo/Inmueble';
import { InmuebleService } from '../_servicio/inmueble.service';

@Component({
  selector: 'app-detalle-inmueble',
  standalone: true,
  imports: [],
  templateUrl: './detalle-inmueble.component.html',
  styleUrl: './detalle-inmueble.component.css'
})
export class DetalleInmuebleComponent {


  inmueble: Inmueble| undefined;
  @Input()
  id: string="";

  constructor(private inmuebleServicio: InmuebleService){

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.inmueble = this.inmuebleServicio.obtenerUno(this.id);
  }
 



}
