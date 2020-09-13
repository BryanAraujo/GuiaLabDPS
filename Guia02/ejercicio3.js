var Empleado = /** @class */ (function () {
    function Empleado(_n_, _s_) {
        this.nombre = "_n_";
        this.salario = _s_;
    }
    Empleado.prototype.name = function (nombre) {
        return nombre;
    };
    Empleado.prototype.descuento = function (salario) {
        var afp = salario * 0.0725;
        var isss = salario * 0.075;
        if (salario >= 550) {
            var renta = salario * .1;
            var dato = salario - renta - isss - afp;
        }
        else {
            var dato = salario - isss - afp;
        }
        return dato;
    };
    return Empleado;
}());
var p = new Empleado;
console.log("");
console.log("Ejercicio 3");
console.log("Calculo de salarios despues de descuentos");
console.log('Nombre: ' + p.name("Bryan"));
console.log('Salario con descuentos: ' + p.descuento(500));
console.log('Nombre: ' + p.name("Araujo"));
console.log('Salario con descuentos: ' + p.descuento(600));
