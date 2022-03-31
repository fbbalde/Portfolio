import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import{Educacion } from 'src/Models/Educacion'

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
eduData: Educacion[]=[];
  constructor(private datosEducacion:EducacionService) { }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data => {
      console.log(data); 
      this.eduData=data;
    });  
  }  

  Borrar(id:number){
    this.eduData = this.eduData.filter(x=>x.id != id);
  }  

} 
