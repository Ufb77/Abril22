import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetalleInmuebleComponent } from '../detalle-inmueble/detalle-inmueble.component';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/Inmueble';

@Component({
  selector: 'app-web-inmueble',
  standalone: true,
  imports: [RouterLink, DetalleInmuebleComponent],
  templateUrl: './web-inmueble.component.html',
  styleUrl: './web-inmueble.component.css'
})
export class WebInmuebleComponent implements OnInit{

  inmuebles: Inmueble[] = [];
  constructor(private inmuebleServicio: InmuebleService){
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.inmuebles = this.inmuebleServicio.obtenerTodos();
  }

  

}
