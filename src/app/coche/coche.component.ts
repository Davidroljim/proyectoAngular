import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  
  Coches = [
    {
      id:"ASDF123",
      name:"Cactus",
      description: "Lorem impsum"
    },
    {
      id:"POIU123",
      name:"A4",
      description: "Audi 5 puertas"
    },
    {
      id:"bcd123",
      name:"Clio",
      description: "Coche pequeño"
    }
  ]
  public id:string;
  constructor(private actRoute: ActivatedRoute, private _router:Router) { 
    this.id=this.actRoute.snapshot.params["id"];
  }

  onBack(): void{
    this._router.navigate(['/coche']);
  }

  ngOnInit(): void {
  }

}
