import { Component, OnInit, HostListener } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.scss']
})
export class MathGameComponent implements OnInit {

  msg=''
  SxS = 4;
  board = [
    [2,2,2,0],
    [2,0,0,0],
    [0,0,2,0],
    [4,2,0,0]
  ];

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:keydown.arrowup')
  onUp() {
    //sum numbers
    //shift numbers
    for (let c=0; c<this.SxS; c++) {
      for (let r=0; r<this.SxS-1; r++) {
        //step 1 
        if ( this.board[r][c] ==0){
          let find_rNo_ne_0 = -1;
          for(let ri=r+1; ri<this.SxS; ri++) {
            if (this.board[ri][c]>0) {
              find_rNo_ne_0 = ri;
              break;
            }
          }
          if (find_rNo_ne_0>0) {
            this.board[r][c] = this.board[find_rNo_ne_0][c];
            this.board[find_rNo_ne_0][c]=0;
          }
        }
        //step 2
        let find_rNo_eq_0 = -1;
        for(let rj=r+1; rj<this.SxS; rj++) {
          if ( this.board[rj][c]==this.board[r][c] ) {
            find_rNo_eq_0 = rj;
          }
          if (this.board[rj][c]>0) {
            break;
          }
        }
        if (find_rNo_eq_0>0) {
          this.board[r][c]+=this.board[find_rNo_eq_0][c];
          this.board[find_rNo_eq_0][c] = 0;
        }
      }
    }
  }
  @HostListener('window:keydown.arrowdown')
  onDown() {
    //sum numbers
    //shift numbers
    for (let c=0; c<this.SxS; c++) {
      for (let r=this.SxS-1; r>=0; r--) {
        //step 1 
        if ( this.board[r][c] ==0){
          let find_rNo_ne_0 = -1;
          for(let ri=r-1; ri>=0; ri++) {
            if (this.board[ri][c]>0) {
              find_rNo_ne_0 = ri;
              break;
            }
          }
          if (find_rNo_ne_0>0) {
            this.board[r][c] = this.board[find_rNo_ne_0][c];
            this.board[find_rNo_ne_0][c]=0;
          }
        }
        //step 2
        let find_rNo_eq_0 = -1;
        for(let rj=r-1; rj>=0; rj--) {
          if ( this.board[rj][c]==this.board[r][c] ) {
            find_rNo_eq_0 = rj;
          }
          if (this.board[rj][c]>0) {
            break;
          }
        }
        if (find_rNo_eq_0>0) {
          this.board[r][c]+=this.board[find_rNo_eq_0][c];
          this.board[find_rNo_eq_0][c] = 0;
        }
      }
    }
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

