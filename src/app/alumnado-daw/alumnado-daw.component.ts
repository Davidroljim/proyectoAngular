import { Component, OnInit } from '@angular/core';
import { Alumnado } from './alumnado';
@Component({
  selector: 'app-alumnado-daw',
  templateUrl: './alumnado-daw.component.html',
  styleUrls: ['./alumnado-daw.component.css']
})
export class AlumnadoDAWComponent implements OnInit {

  public titulo:string = "LISTADO DAW";
  public arrayAlumnadoDAW:Array<Alumnado>;
  


  constructor() { 
    this.arrayAlumnadoDAW = [
                              new Alumnado("David","Roldán jiménez","123445678Y",new Date(2001-12-29),"Sevilla",1234356,"Segundo",["DWC","DWS","DAW"]),
                            ];


  }

  ngOnInit(): void {
  }

}
