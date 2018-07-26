import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  resultados: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      this.resultados = this._heroesService.buscarHeroes(params['query']);
      // console.log(this.resultados);
      this.termino = params['query'];
    });
  }

  ngOnInit() {
  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
