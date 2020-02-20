export class SaeBattleField {
    fieldSize: number ;
    field: number[][];
    fieldType: number;
    constructor(s: number = 10){
      this.fieldSize = s;
      this.fieldType = 0;
      this.field = [];
      for (let r=0; r< this.fieldSize; r++ ) {
          let enR = [];
          for ( let c=0; c< this.fieldSize; c++ ){
              enR.push(0);
          }
          this.field.push(enR);
      }
      this.rndShips();
      console.log(this.field);
    } 
    getCellClass( r:number, c:number ): string {
        let cls: string = 'lb';
        if (this.field[r][c] > 0 ){
            cls = 'g';
        }
        if (this.field[r][c] < 0 ){
            cls = 'r';
            if (this.field[r][c] == -100 ){
                cls = 'b';
            }
        }    
        //'g': ( c>0 ), 'lb': ( c==0 ), 'r': (c<0&&c!=-100), 'b': c==-100
        return cls
    }

    rndShips(){
        for ( let sh=0; sh<2; sh++ ){
            let r = Math.floor( Math.random() * this.fieldSize);
            let c = Math.floor (Math.random() * this.fieldSize);
            this.field[r][c] = 2;
        }
    }
}
