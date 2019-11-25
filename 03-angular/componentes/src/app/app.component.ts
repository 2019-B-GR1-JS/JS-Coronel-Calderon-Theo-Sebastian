import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentes';

  arregloObjetos = [
    {
      id:1,               //number
      "nombre":"Theo",    //string
      "apellido":'Coronel',    //string
      "sueldo":'100.00',    //number
      "casado":false,    //boolean
      comida: 'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg',
      carro:null,
      ojos:undefined,
    },
    {
      id:2,               //number
      "nombre":"Juan",    //string
      "apellido":'Perez',    //string
      "sueldo":'500.00',    //number
      "casado":false,    //boolean
      comida: 'https://www.educationquizzes.com/library/KS1-Science/Food-from-plants-main.jpg',
      carro:null,
      ojos:undefined,
    },
    {
      id:3,               //number
      "nombre":"Conny",    //string
      "apellido":'Benitez',    //string
      "sueldo":'1000.00',    //number
      "casado":false,    //boolean
      comida: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      carro:null,
      ojos:undefined,
    },

  ];

  imprimirSueldo(sueldo:string){
    console.log(sueldo);
  }
}
