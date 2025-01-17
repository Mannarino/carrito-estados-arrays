import { Component } from '@angular/core';
import { BuscadorService } from 'src/app/core/buscador.service';
import { data } from 'src/app/data/data';
@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent {
  things : any[] = [];
  constructor(private buscadorService:BuscadorService){}
  ngOnInit(){
    this.buscadorService.setArrayObjetos(data.things)

    this.things=data.things

    this.buscadorService.nuevaLista$
    .subscribe(value => this.things=value)
  }
}
