import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  livro = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://angular.io/guide/pipes'
  }

  livros: string[] = ['Java', 'Angular 2'];
  filtro = '';

  addCurso(valor: string): void {
    this.livros.push(valor);
    console.log(valor);
    console.log(this.livros);

    // for(let i = 0; i < this.livros.length; i++){
    //   console.log(this.livros[i]);
    // }
  }

  obterCursos() {
    if( this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
    
    return this.livros.filter(
      (v: string) => {
        if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0) {
          return true;
        } else {
          return false;
        }
      });
  }
}
