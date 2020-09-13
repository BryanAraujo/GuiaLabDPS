var Rombo = /** @class */ (function () {
    function Rombo(_DV_, _DH_) {
        this.DiagonalVertical = _DV_;
        this.DiagonalHorizontal = _DH_;
    }
    Rombo.prototype.area = function (DiagonalVertical, DiagonalHorizontal) {
        return DiagonalHorizontal * DiagonalVertical;
    };
    return Rombo;
}());
var dv = new Rombo();
console.log();
console.log("Ejercicio 1");
console.log("Calculo de area del Rombo");
console.log("Diagonal Vertial: 5");
console.log("Diagonal Horizontal: 10");
console.log("Respuesta: ");
console.log(dv.area(5, 10));
