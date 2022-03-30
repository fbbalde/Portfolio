import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return new Observable( observer =>{
      this.http.get('./assets/data/data.json').subscribe((data:any)=>{
        observer.next(data.experiencia);
      });
    }
    );  
  }
  Borrar(id:number){

  }
  
  
}
