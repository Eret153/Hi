import { Component, OnInit } from '@angular/core';
import { SaeBattleField } from '../sae-battle-field';

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
      [0,40,0,0,0,20,20,0,10,0],
      [0,40,0,0,0,0,0,0,0,0],
      [0,40,0,0,0,0,0,0,0,0],
      [0,40,0,0,20,0,20,0,0,0],
      [0,0,0,0,20,0,20,0,0,30],
      [0,0,0,0,0,0,0,0,0,30],
      [0,0,30,30,30,0,0,0,0,30],
      [0,0,0,0,0,0,0,10,0,0]
    ],
    enemy: [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
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

  getZeros( arr ){
    let Z = [];
    for ( let r=0; r < this.S; r++ ) {
      for ( let c = 0; c < this.S; c++ ) {
        if ( arr[r][c]>=0 ) {
          Z.push( [r,c] );
        }
      }
    }
    return Z;
  }

  getZerosH( arr, l) {
    let Z = [];
    for ( let r=0; r < this.S; r++ ) {
      for ( let c = 0; c < this.S - l + 1; c++ ) {
        let f = 0; 
        for ( let cc = c; cc < c+l; cc++ ) {
          if ( arr[r][cc]>=0 ) {
            f++;
          }
        }
        if (f==l) {
          Z.push( [r,c] );
        }  
     }
   }
    
    return Z;
  }
  getZerosV(arr , l) {
    let Z = [];
    for ( let r=0; r < this.S - l + 1; r++ ) {
      for ( let c = 0; c < this.S; c++ ) {
        let f = 0; 
        for ( let rr = r; rr < r+l; rr++ ) {
          if ( arr[rr][c]>=0 ) {
            f++;
          }
        }
        if (f==l) {
          Z.push( [r,c] );
        }  
     }
   }
    return Z;
  }

  enShot() {
    let r=0;
    let c=0;
    let Z=[];
    Z = this.getZeros( this.boards.player ); 
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

  putDeck( arr, r, c, d = -10 ) {
    arr[r][c] = d;
    let Sm = this.S - 1;
    if ( r > 0 && c > 0 && arr[r-1][c-1] == 0 ) { arr[r-1][c-1] = -100; }
    if ( r > 0 && arr[r-1][c] == 0 ) { arr[r-1][c] = -100; }
    if ( r > 0 && c < Sm && arr[r-1][c+1] == 0 ) { arr[r-1][c+1] = -100; }
    if ( c < Sm && arr[r][c+1] == 0 ) { arr[r][c+1] = -100; }
    if ( r < Sm && c < Sm && arr[r+1][c+1] == 0 ) { arr[r+1][c+1] = -100; }
    if ( r < Sm && arr[r+1][c] == 0 ) { arr[r+1][c] = -100; }
    if ( r < Sm && c > 0 && arr[r+1][c-1] == 0 ) { arr[r+1][c-1] = -100; }
    if ( c > 0 && arr[r][c-1] == 0 ) { arr[r][c-1] = -100; }
    return arr;
  }

  putShip(arr, l) {
    let Z = [];
    let N =0;
    if ( Math.random() > 0.5 ) {
      Z = this.getZerosH(arr, l);
    } else {
      Z = this.getZerosV(arr, l);
      N = 1;
    }
    let i = Math.floor((Z.length-1) * Math.random());
    let r = Z[i][0];
    let c = Z[i][1];
    for ( let y=0; y < l; y++ ) {
      console.log(r, y, N)
      arr = this.putDeck( arr, (r+y*N), c+y*(1-N) );
    }
    return arr;
  }

  genEnemy() {
    let enB = [];
    for (let r=0; r < this.S; r++) {
      let enR = [];      
      for (let c=0; c < this.S; c++) {
        enR.push( 0 );
      }
      enB.push( enR );
    }
    enB = this.putShip( enB, 4  );     
    enB = this.putShip( enB, 3 );
    enB = this.putShip( enB, 3 );
    enB = this.putShip( enB, 2 );
    enB = this.putShip( enB, 2 );
    enB = this.putShip( enB, 2 );
    enB = this.putShip( enB, 1 );
    enB = this.putShip( enB, 1 );
    enB = this.putShip( enB, 1 );
    enB = this.putShip( enB, 1 );
    for ( let r=0; r < this.S; r++ ) {
      for ( let c=0; c < this.S; c++ ) {
        if ( enB[r][c] == -100 ) {
          enB[r][c] = 0;  
        }
        if ( enB[r][c] < 0 ) {
          enB[r][c] = -enB[r][c];  
        }
      }
    }
  this.boards.enemy = enB;
  }

  genEnemyAll() {
    let enB = [];
    //
    this.boards.enemy = enB;
  }

  ngOnInit() {
    this.genEnemy();
  }

}
