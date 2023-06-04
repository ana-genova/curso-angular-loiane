import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://loiane.training/';
  cursoAngular: boolean = true;
  urlImagem = 'https://mpolitano.com.br/wp-content/uploads/bfi_thumb/lorempixel-37v4bzut6h2i6exlug5qvvqsfhfjo8rj4sy5uvjsdm25asmog.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

}
