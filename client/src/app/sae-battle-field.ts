import { classes } from './sea-battle-classes';

export class SaeBattleField {
    fieldSize: number ;
    field: number[][];
    fieldType: number;
    constructor(s: number = 10){
      this.fieldSize = s;
      this.setType();
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

    setType( t: number = 0 ){
        this.fieldType = t;
    }

    getCellClass( r:number, c:number ): string {
        const classes: string[][] = [
            [ 'lb', 'w' ],
            [ 'g', 'w' ],
            [ 'r', 'r' ],
            [ 'b', 'b']
        ];
        let ft = this.fieldType;
        let cls: string = classes[0][ft];
        if (this.field[r][c] > 0 ){
            cls = classes[1][ft];
        }
        if (this.field[r][c] < 0 ){
            cls = classes[2][ft];;
            if (this.field[r][c] == -100 ){
                cls = classes[3][ft];
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
