import { Component, OnInit } from '@angular/core';
import {Alumnado } from "./alumnado";
import { EmpleadoComponent } from '../empleado/empleado.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumnado-daw',
  templateUrl: './alumnado-daw.component.html',
  styleUrls: ['./alumnado-daw.component.css']
})
export class AlumnadoDAWComponent implements OnInit {

  public alumnos:Array<Alumnado>;
  public alumnadoUno:boolean;
  public alumnadoSegundo:boolean;
  public curso:string;

  constructor(private actRoute: ActivatedRoute, private _router:Router) {
    this.alumnos= [new Alumnado("Kimia","Ehsano","dd",new Date("2020-01-01"),"d",1,"1",["d","ds"]),
    new Alumnado("Juan","Ehsano","dd",new Date("2020-01-01"),"d",2,"2",["d","ds"]),
    new Alumnado("Maria","Ehsano","dd",new Date("2020-01-01"),"d",2,"2",["d","ds"]),
    new Alumnado("David","Ehsano","dd",new Date("2020-01-01"),"d",2,"1",["d","ds"])];
    this.alumnadoUno=true;
    this.alumnadoSegundo=true;

    this.curso=this.actRoute.snapshot.params["curso"];
   }

  alumnado(curso:string) {
    if(curso=='primero'){
      if(this.alumnadoUno==true){
        this.alumnadoUno=false;
       }else{
        this.alumnadoUno=true;
       }
    }else{
      if(this.alumnadoSegundo==true){
        this.alumnadoSegundo=false;
       }else{
         this.alumnadoSegundo=true;
        }
    }
    this._router.navigate(['/alumnado-daw']);
   }
   tipoCurso1(): void{
    
  }
   
  ngOnInit(): void {
  }

}