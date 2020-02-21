import { Component, OnInit } from '@angular/core';
import { AuthorHttpService } from 'src/app/services/author-http/author-http.service';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.page.html',
  styleUrls: ['./new-author.page.scss'],
})
export class NewAuthorPage implements OnInit {

  names;
  numberJuegos;

  constructor(private readonly _authorHttp : AuthorHttpService,
    private readonly _session : SessionService,
    private readonly _router : Router) { }

  ngOnInit() {

  }

  async newAuthor(form){
    const body = {
      names : this.names,
      lastNames : null,
      birthDate : null,
      numberJuegos : this.numberJuegos,
      ecuatorian : null
    };

    try{
      let newAuthor$ = await this._authorHttp
        .crear(body)
        .toPromise()
      this._session.authors.push(newAuthor$)
      this._router.navigate(['/authors'])
    }catch(error){
      console.log(error)
    }
  }

}

