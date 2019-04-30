import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  autor= [{nome:'Agustina Bessa Luis', noticias:0, publicacoes:0}, {nome:'Alice Munro', noticias:0, publicacoes:0},
  {nome:'Allan Percy', noticias:0, publicacoes:0}, {nome:'Almada Negreiros', noticias:0, publicacoes:0}]
  noticias = [];
  lerNoticiaSelecionada: object = null 

  constructor() { }
 
  salvarNoticia(autor,titulo, conteudo, view,status){
   const noticia= {id: this.noticias.length,'autor': autor,'titulo':titulo,'conteudo':conteudo,'status':status,'view':view}
    this.noticias.push(noticia)
    for (let A of this.autor){
      if (A.nome == autor){
        A.noticias ++;
      }
    }
  }
  
  publicar(){
    return this.noticias.filter(n => n.status == false)
  }

  cadastra(){
    return this.noticias.filter(n => n.status == true)
  }

  mudaStatus(noticia){
    noticia.status = true;
   
      
    for (let a of this.autor){
      if (a.nome == noticia.autor){
        a.publicacoes ++;
      }
    }
  }

  lerNoticia(noticia){
    for(let item of this.noticias){
      if(noticia.id == item.id && noticia.titulo === item.titulo){
        item.view++
      }
    }
    return this.lerNoticiaSelecionada = noticia
  }

  retornaQtdNoticias(){
    this.autor.sort((a, b) => (a.noticias > b.noticias) ? -1 : 1);
     return this.autor;
    }
  
    Ranking(){
      this.noticias.sort((a, b) => (a.views > b.views) ? -1 : 1);
       return this.noticias.slice(0,5);
      }

      RankingAutores(){
        this.autor.sort((a, b) => (a.noticias > b.noticias) ? -1 : 1);
         return this.autor;
        }
  
    AutorMaisPubicou(){
      this.autor.sort((a, b) => (a.publicacoes > b.publicacoes) ? -1 : 1);
      return this.autor[0];
      
    }
  
    
  

}