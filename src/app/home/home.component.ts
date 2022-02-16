import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public curso:String;
  constructor(private actRoute: ActivatedRoute, private _router:Router) { 
    this.curso=this.actRoute.snapshot.params["curso"];
  }

  onBack(): void{
    this._router.navigate(['alumnado-daw']);
  }

  ngOnInit(): void {
  }

}
