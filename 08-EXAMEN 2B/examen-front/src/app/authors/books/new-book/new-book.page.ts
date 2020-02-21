import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { JuegoHttpService } from 'src/app/services/book-http/book-http.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.page.html',
})
export class NewJuegoPage implements OnInit {

  name
  estilo
  precio
  edition
  authorId

  constructor(private readonly _activatedRoute : ActivatedRoute,
    private readonly _session : SessionService,
    private readonly _router : Router,
    private readonly _juegoHttp : JuegoHttpService) { }

  ngOnInit() {
    var param$ = this._activatedRoute.queryParams
    param$.subscribe(
      (parametros) =>{
        this.authorId = parametros.idAutor
      }
    )
  }

  async newBook(form){
    const body = {
      name : this.name,
      estilo : this.estilo,
      precio : this.precio,
      author_FK : this.authorId,
      edition : this.edition
    }
    try{
      const newAuthor$ = await this._juegoHttp
        .crear(body)
        .toPromise()
      this._session.juegos.push(newAuthor$)
      this._router.navigate(
        ['/juego'],
        {
          queryParams:{
            'idAutor': this.authorId
          }
        }
      )
    }catch(error){
      console.log(error)
    }
  }

}
