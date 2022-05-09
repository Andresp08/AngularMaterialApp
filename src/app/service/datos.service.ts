import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
private END_POINT = environment.api_base+environment.datos.persona
  constructor(private httpClient: HttpClient) { }

  search():Observable<Persona[]>{
   return this.httpClient.get<Persona[]>(this.END_POINT);
  }
}
