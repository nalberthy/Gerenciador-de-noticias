import { Component } from '@angular/core';
import { NoticiaService } from  './noticia.service' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
tela = "inicial";
autor = null;
titulo =null
conteudo= null;
status = false;
view = 0

constructor(private service: NoticiaService) {}

Telas(valor){ 
  this.tela= valor}


publicar(){this.tela = "publicar"}

estatistica(){this.tela="estatistica"}

salvar(){
  this.tela = 'publicar';
  this.service.salvarNoticia(this.autor, this.titulo, this.conteudo, this.view,this.status);
  this.autor = null;
  this.titulo =null
  this.conteudo = null;

  }
}
