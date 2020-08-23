class Rombo{
    DiagonalVertical:number;
    DiagonalHorizontal:number;
    constructor(_DV_?:number,_DH_?:number){
        this.DiagonalVertical= _DV_;
        this.DiagonalHorizontal=_DH_;
    }
    
    area(DiagonalVertical:number,DiagonalHorizontal:number) {
        return DiagonalHorizontal*DiagonalVertical;
    }
}

var dv = new Rombo();
console.log();
console.log("Ejercicio 1");
console.log("Calculo de area del Rombo");
console.log("Diagonal Vertial: 5");
console.log("Diagonal Horizontal: 10");
console.log("Respuesta: "+dv.area(5,10));