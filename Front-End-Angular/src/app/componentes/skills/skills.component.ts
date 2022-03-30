import { Component, OnInit } from '@angular/core';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { SofSkillsService } from 'src/app/servicios/sof-skills.service';
import { Idioma } from 'src/Models/Idioma';
import { SoftSkills } from 'src/Models/SoftSkills';
import { Tecnologia } from 'src/Models/Tecnologia';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skillData1:Tecnologia[]=[];
skillData2:SoftSkills[]=[];
skillData3:Idioma[]=[];
  constructor(private datosTecnologia:TecnologiaService, private datosIdioma:IdiomaService, private datosSofSkills:SofSkillsService)  {}

  ngOnInit(): void {
    this.datosTecnologia.obtenerDatos().subscribe(data1 => {
      console.log(data1); 
      this.skillData1=data1;
    });
    this.datosSofSkills.obtenerDatos().subscribe(data2 => {
      console.log(data2); 
      this.skillData2=data2;
    });
    this.datosIdioma.obtenerDatos().subscribe(data3 => {
      console.log(data3); 
      this.skillData3=data3;
    });

  }

  Borrar(id:number){
    this.skillData1 = this.skillData1.filter(x=>x.id != id);
    this.skillData2 = this.skillData2.filter(x=>x.id != id);
    this.skillData3 = this.skillData3.filter(x=>x.id != id);
  }  

}    
