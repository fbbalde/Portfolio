import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-boton-eliminar',
  templateUrl: './boton-eliminar.component.html',
  styleUrls: ['./boton-eliminar.component.css']
})
export class BotonEliminarComponent implements OnInit {
  @Input() texto: string= "";
  @Input() clasesAd: string="";
  @Input() clasesAdBoton: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
