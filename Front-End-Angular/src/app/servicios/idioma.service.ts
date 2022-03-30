import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor(private http: HttpClient) { }
  obtenerDatos(): Observable<any> {
    return new Observable( observer =>{
      this.http.get('./assets/data/data.json').subscribe((data3:any)=>{
        observer.next(data3.idioma);
      });
    }
    );  
  }  
}
 