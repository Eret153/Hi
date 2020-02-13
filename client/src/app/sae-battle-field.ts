export class SaeBattleField {
    fieldSize: number ;
    field: number[][];
    constructor(s: number){
      this.fieldSize = s;
      this.field = [];
      for (let r=0; r< this.fieldSize; r++ ) {
          let enR = [];
          for ( let c=0; c< this.fieldSize; c++ ){
              enR.push(0);
          }
          this.field.push(enR);
      }
    }    
    
}
