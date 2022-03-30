import { Component, OnInit } from '@angular/core';
import { CertificacionService } from 'src/app/servicios/certificacion.service';
import{Certificacion} from 'src/Models/Certificacion'

@Component({
  selector: 'app-certificacion',
  templateUrl: './certificacion.component.html',
  styleUrls: ['./certificacion.component.css']
})
export class CertificacionComponent implements OnInit {
certifData:Certificacion[]=[];
  constructor(private datosCertificacion:CertificacionService) { }

  ngOnInit(): void {
    this.datosCertificacion.obtenerDatos().subscribe(data => {
      console.log(data); 
      this.certifData=data;
    });
  }
  Borrar(id:number){
    this.certifData = this.certifData.filter(x=>x.id != id);
  }  
}
