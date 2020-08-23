class Calculadora{
    num1:number;
    num2:number;
    constructor(_n1_?:number,_n2_?:number){
        this.num1 = _n1_;
        this.num2 = _n2_;
    }

    operaciones(num1:number, num2:number){
        console.log("");
        console.log("Ejercicio 4")
        console.log("Numero 1: "+num1);
        console.log("Numero 2: "+num2);
        console.log('Suma: '+ (num1+num2));
        console.log("Resta: "+(num1-num2));
        console.log("Multiplicacion: "+(num1*num2))
        console.log("Division: "+(num1/num2));
    }
}

var t = new Calculadora;
t.operaciones(10,5);
