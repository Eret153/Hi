import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sea-bettle',
  templateUrl: './sea-bettle.component.html',
  styleUrls: ['./sea-bettle.component.scss']
})
export class SeaBettleComponent implements OnInit {

  S=10;
  boards = {
    player: [
      [0,0,10,0,10,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,40,0,0,0,0,0,0,0,0],
      [0,40,0,0,0,0,0,0,0,0],
      [0,40,0,-100,0,0,0,0,0,0],
      [0,40,0,0,-20,0,0,0,0,0],
      [0,0,0,0,20,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
    ],
    enemy: [
      [0,0,0,0,40,0,0,0,0,0],
      [0,20,0,0,40,0,20,0,0,0],
      [0,20,0,0,40,0,20,0,0,0],
      [0,0,0,0,40,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,10,0,0,0,0,20,0,0],
      [0,0,0,0,0,0,0,20,0,0],
      [0,0,10,0,0,0,0,0,0,0],
      [0,0,0,0,30,30,30,0,0,0]
    ],
};

  constructor() { }

  myShot(r,c){
   if (this.boards.enemy[r][c]==0) {
    this.boards.enemy[r][c]=-100;
    }  
    if (this.boards.enemy[r][c]>0) {
      this.boards.enemy[r][c]=-this.boards.enemy[r][c];
      }                                                                                                                                                                                                                                                                   
  }

  enShot() {
    let r=1;
    let c=1;
    if (this.boards.enemy[r][c]>0) {
      this.boards.enemy[r][c]=-100;
    }
  }

  ngOnInit() {
  }

}
