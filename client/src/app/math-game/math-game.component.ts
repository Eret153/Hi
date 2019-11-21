import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.scss']
})
export class MathGameComponent implements OnInit {

  msg=''
  SxS = 4;
  board = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ];

  constructor() { }

  mover( a ) {
    for (let r=0; r < this.SxS-1; r++) {
      //step 1 
      if (a[r]==0) {
        let find_rNo_ne_0 = -1;
        for(let ri=r+1; ri < this.SxS; ri++) {
          if (a[ri]>0) {
            find_rNo_ne_0 = ri;
            break;
          }
        }
        if (find_rNo_ne_0>0) {
          a[r] = a[find_rNo_ne_0];
          a[find_rNo_ne_0]=0;
        }
      }
      //step 2
      let find_rNo_eq_0 = -1;
      for(let rj=r+1; rj < this.SxS; rj++) {
        if ( a[rj]==a[r] ) {
          find_rNo_eq_0 = rj;
        }
        if (a[rj]>0) {
          break;
        }
      }
      if (find_rNo_eq_0>0) {
        a[r]+=a[find_rNo_eq_0];
        a[find_rNo_eq_0] = 0;
      }
    }
    return a;
  }

  getCol( cNo ) {
    let a = [];
    for ( let r=0; r < this.SxS; r++ ){
      a.push(this.board[r][cNo]);
    }
    return a;
  }

  setCol( cNo, a ) {
    for ( let r=0; r < this.SxS; r++ ){
      this.board[r][cNo]=a[r];
    }
  }

  getRow(rNo) {
    return this.board[rNo];
  }
  setRow(rNo, a) {
    this.board[rNo]=a;
  }

  rnd() {
    return (Math.random() < 0.1 ? 4 : 2 );
  }

  getZeros() {
    let Z = [];
    for ( let r=0; r < this.SxS; r++ ) {
      for ( let c=0; c < this.SxS; c++ ) {
        if ( this.board[r][c] == 0 ) {
          Z.push( [r,c] );
        }
      }
    }
    return Z;
  }

  nextNumber() {
    let Z = this.getZeros();
    if ( Z.length > 0 ) {
      let i = Math.floor( Z.length * Math.random() );
      this.board[ Z[i][0] ][ Z[i][1] ] = this.rnd();
    }  
  }
   
  ngOnInit() {
    this.nextNumber();
    this.nextNumber();
  }
  @HostListener('window:keydown.arrowup')
  onUp() {
    for ( let c=0; c < this.SxS; c++ ) {
      this.setCol(c, this.mover(this.getCol(c)));
    }
    this.nextNumber();
  }
  @HostListener('window:keydown.arrowdown')
  onDown() {
    for ( let c=0; c < this.SxS; c++ ) {
      this.setCol(c, this.mover(this.getCol(c).reverse() ).reverse() );
    }
    this.nextNumber();
  }
  @HostListener('window:keydown.arrowleft')
  onLeft() {                          
    for ( let r=0; r < this.SxS; r++ ) {
      this.setRow(r, this.mover(this.getRow(r)));
    }
    this.nextNumber();
  }
  @HostListener('window:keydown.arrowright')
  onRight() {
    for ( let r=0; r < this.SxS; r++ ) {
      this.setRow(r, 
        this.mover(this.getRow(r).reverse() ).reverse() );
    }
    this.nextNumber();
  }
}

               