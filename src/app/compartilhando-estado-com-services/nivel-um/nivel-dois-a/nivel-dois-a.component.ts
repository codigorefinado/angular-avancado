import { Component, OnInit } from '@angular/core';
import { RaizService } from '../../raiz.service';

@Component({
  selector: 'nivel-dois-a',
  templateUrl: 'nivel-dois-a.component.html'
})

export class NivelDoisAComponent implements OnInit {

  conteudo: String;

  constructor(private raizService: RaizService) {
  }

  ngOnInit() {
    this.conteudo = "Conteúdo do nível dois A: " + this.raizService.conteudo;
  }

  trocar() {
    this.raizService.conteudo = "Clicado no botão do componente NIVEL DOIS A";
    this.conteudo = this.raizService.conteudo;
  }
}
