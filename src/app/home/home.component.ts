import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RopaService } from '../ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public ropa:Array<string>;
  public prenda:string;
  constructor(private _ropaService: RopaService) { 
    this.ropa=[];
    this.prenda="";
  }

  ngOnInit(): void {
    this.obtenerRopa();
    
  }

  obtenerRopa(): void{
    this.ropa = this._ropaService.getRopa();

  }

  añadirRopa(prenda:string): void{
   this._ropaService.addRopa(prenda);
  }

}
