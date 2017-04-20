import { Component, OnInit } from '@angular/core';
import { RaizService } from './raiz.service';

@Component({
  selector: 'raiz',
  templateUrl: 'raiz.component.html'
})

export class RaizComponent implements OnInit {
  conteudo: String;

  constructor(private raizService: RaizService) {
  }

  ngOnInit() {
    this.conteudo = "Conteúdo da Raiz: " + this.raizService.conteudo;
  }

  trocar(){
    this.raizService.conteudo = "Clicado no botao do Componente RAIZ";
    this.conteudo = this.raizService.conteudo;
  }
}
