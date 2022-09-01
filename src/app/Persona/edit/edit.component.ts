import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  modelPersona : Persona=new Persona();
  constructor( private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
Editar(){
  let id=localStorage.getItem("id");
  this.service.getPersonasId(+id).subscribe(data => {
    this.modelPersona = data;
})

}
Actualizar(persona:Persona){
  this.service.updatePersona(persona).subscribe(data => {
    this.modelPersona = data;
    alert("Se actualizo con Exito...");
    this.router.navigate(["listar"]);
})
}
}
