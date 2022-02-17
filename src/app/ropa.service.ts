import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombre:string ="Pantalón";
  public coleccionRopa = ['pantalones Blancos', 'Camisa roja', 'Chaqueta negra'];

  getRopa(): Array <string>{
    return this.coleccionRopa;
  }

  addRopa (nombrePrenda:string): Array<string>{
    this.coleccionRopa.push(nombrePrenda);
    return this.getRopa();

  }

  deleteRopa (index:number){
    this.coleccionRopa.splice(index,1);
  }
  prueba (){
    return this.nombre;
  }
  constructor() { }
}
