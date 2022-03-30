import { Component, OnInit } from '@angular/core';
import { ExperienciaService} from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/Models/Experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experienciaData:Experiencia[] = [];
  constructor(private datosExperiencia:ExperienciaService) { }

  ngOnInit(): void {
    this.datosExperiencia.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experienciaData=data;
    });
  }
  Borrar(id:number){
    this.experienciaData = this.experienciaData.filter(x=>x.id != id);
  }

}
