var Calculadora = /** @class */ (function () {
    function Calculadora(_n1_, _n2_) {
        this.num1 = _n1_;
        this.num2 = _n2_;
    }
    Calculadora.prototype.operaciones = function (num1, num2) {
        console.log("");
        console.log("Ejercicio 4");
        console.log("Numero 1: " + num1);
        console.log("Numero 2: " + num2);
        console.log('Suma: ' + (num1 + num2));
        console.log("Resta: " + (num1 - num2));
        console.log("Multiplicacion: " + (num1 * num2));
        console.log("Division: " + (num1 / num2));
    };
    return Calculadora;
}());
var t = new Calculadora;
t.operaciones(10, 5);
