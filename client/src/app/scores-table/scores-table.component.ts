import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores-table',
  templateUrl: './scores-table.component.html',
  styleUrls: ['./scores-table.component.scss']
})
export class ScoresTableComponent implements OnInit {

    playersData = [
    { 
      name: 'Player1',
      scores: [0,0,0,0,0],
      total: 0  
    },
    { 
      name: 'Player2',
      scores: [5,4,8,14,0],
      total: 0  
    },
    { 
      name: 'Player3',
      scores: [18,2,2,2,0],
      total: 0  
    }
  ];

  clearResults() {
    for (let p=0; p<this.playersData.length; p++ ) {
      this.playersData[p].scores = [0,0,0,0,0];
    }
    this.reCalcTotals();
  }

  reCalcTotals() {
    for (let p=0; p<this.playersData.length; p++) {
      this.playersData[p].total = 0;
      for (let s=0; s<this.playersData[p].scores.length; s++) {
        this.playersData[p].total += 
          this.playersData[p].scores[s];
      }
    }
  }
  
  constructor() { }

  ngOnInit() {
    this.reCalcTotals();
  }

}
