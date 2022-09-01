import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor( private http:HttpClient) { }

  UrlListar='http://localhost:8082/personas/listar';

  UrlListarId='http://localhost:8082/personas/listarId';

  UrlAgregar='http://localhost:8082/personas/save';

  UrlEditar='http://localhost:8082/personas/Editar';

  UrlEliminar='http://localhost:8082/personas/Eliminar';
  

  getPersonas() {
    return this.http.get<Persona[]>(this.UrlListar);
  }

  createPersona(persona:Persona) {
    return this.http.post<Persona>(this.UrlAgregar, persona);
    }
    getPersonasId(id:number){
     return this.http.get<Persona>(this.UrlListarId+"/"+id);
    }
    updatePersona(persona:Persona){
      return this.http.put<Persona>(this.UrlEditar+"/"+persona.id, persona);
    }
    deletePersona(persona:Persona){
      return this.http.delete<Persona>(this.UrlEliminar+"/"+persona.id);
    }
}
