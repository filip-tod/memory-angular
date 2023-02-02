import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'memory-game';  
  img = [
    { src: 'assets/1.png' },
    { src: 'assets/2.png' },
    { src: 'assets/3.png' },
    { src: 'assets/4.png' },
    { src: 'assets/5.png' },
    { src: 'assets/6.png' },
    { src: 'assets/7.png' },
    { src: 'assets/8.png' },
  ];
  boxes = document.querySelectorAll('.box');

  shuffle() {
    const matrix = [];
    let index = 0;
    const shuffleCards = [...this.img, ...this.img];

    shuffleCards.sort(() => Math.random() - 0.5);
    shuffleCards.map((card) => ({ ...card, id: Math.random() }));
    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        row.push(shuffleCards[index]);
        index++;
      }
      matrix.push(row);
    }
    return matrix;
  }

  constructor() {
    let memo = this.shuffle();
    console.log(document); // kako napraviti da documents sadrzi stvari iz app.components.html?
  }
}
