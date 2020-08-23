class Empleado{
    nombre:string;
    salario:number;
    constructor(_n_?:string,_s_?:number){
        this.nombre = "_n_";
        this.salario = _s_;
    }

    name(nombre:string){
        return nombre;
    }
    descuento(salario:number){
        var afp = salario*0.0725;
        var isss = salario*0.075;
        if(salario>=550){
            var renta = salario*.1;
            var dato = salario - renta - isss - afp;
        }else{
            var dato = salario - isss - afp;
        }
        return dato;
    }
}

var p = new Empleado;
console.log("");
console.log("Ejercicio 3")
console.log("Calculo de salarios despues de descuentos");
console.log('Nombre: '+p.name("Bryan"));
console.log('Salario con descuentos: '+p.descuento(500));
console.log('Nombre: '+p.name("Araujo"));
console.log('Salario con descuentos: '+p.descuento(600));