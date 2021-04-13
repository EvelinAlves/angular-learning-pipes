import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrls: ['./pipe-async.component.css']
})
export class PipeAsyncComponent implements OnInit {

  constructor() { }

  valorAsyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono com Promise'), 2000)
  });

  valorAsyncObservable = interval(2000)
    .pipe(
      map(valor => 'Valor assíncrono com Observable')
    );

  ngOnInit(): void {
  }

}
