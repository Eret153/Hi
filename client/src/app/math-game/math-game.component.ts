import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.scss']
})
export class MathGameComponent implements OnInit {

  msg=''
  board = [
    [0,2,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [2,0,0,0]
  ];

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:keydown.arrowup')
  onUp() {
    console.log( 'up' );
  }
  @HostListener('window:keydown.arrowdown')
  onDown() {
    console.log( 'down' );
  }
  @HostListener('window:keydown.arrowleft')
  onLeft() {
    console.log( 'left' );
  }
  @HostListener('window:keydown.arrowrignt')
  onRight() {
    console.log( 'right' );
  }
}

