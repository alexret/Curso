import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = 'Juan';

  apellido = 'Caracol';

  private edad = 19;

  empresa = "Google";

  habilitacionCuadro = false;

  usuRegistrado = false;

  textoDeRegistro = "No hay nadie";

  getRegistroUsuario(){

    this.usuRegistrado=true;
  }

  setUsuarioRegistrado(event: EventTarget | null){

    //alert("El usuario se acaba de registrar");
    const input = event as HTMLInputElement;
    if(input.checked){
      this.textoDeRegistro = "El usuario se ha registrado";
    }
    else {
      this.textoDeRegistro = "No hay nadie";
    }
  }

  getEdad(){

    return this.edad
  }


  Cambiar(value:String){

  }


  constructor() { }

  ngOnInit(): void {
  }

}
