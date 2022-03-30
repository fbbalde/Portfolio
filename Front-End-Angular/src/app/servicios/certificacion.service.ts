import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CertificacionService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return new Observable( observer =>{
      this.http.get('./assets/data/data.json').subscribe((data:any)=>{
        observer.next(data.certificaciones);
      });
    }
    );  
  }
 
  
}
