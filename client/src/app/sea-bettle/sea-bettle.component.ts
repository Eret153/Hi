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
    ]
  };

  constructor() { }

  myShot( r, c ) {
    if (this.boards.enemy[r][c]==0) {
      this.boards.enemy[r][c]=-100;
    }  
    if (this.boards.enemy[r][c]>0) {
      this.boards.enemy[r][c]=-this.boards.enemy[r][c];
    }  
    this.enShot();                                                                                                                                                                                                                                                                   
  }

  getZeros(){
    let Z = [];
    for ( let r=0; r < this.S; r++ ) {
      for ( let c = 0; c < this.S; c++ ) {
        if ( this.boards.player[r][c]>=0 ) {
          Z.push( [r,c] );
        }
      }
    }
    console.log(Z);
    return Z;
  }

  enShot() {
    let r=0;
    let c=0;
    let Z=[];
    Z = this.getZeros(); 
    if ( Z.length > 0 ) {
      let i = Math.floor(Z.length * Math.random());
      r = Z[i][0]
      c = Z[i][1];
    }
    if ( this.boards.player[r][c] == 0 ) {
      this.boards.player[r][c]=-100;
    }
    if ( this.boards.player[r][c] > 0 ) {
      this.boards.player[r][c]= - this.boards.player[r][c];  
    }    
  }

  ngOnInit() {
  }

}
