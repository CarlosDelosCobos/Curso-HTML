//Función constructora de la "clase" Circulo
function Circulo(radio){
    this.radio=radio;
}
//Función miembro de la "clase" Circulo
Circulo.prototype.getArea=
    function(){
        return Math.PI*Math.pow(this.radio,2);
    };
/*
Código incorrecto
var C0= Circulo(8);
No se puede llamar a esta función dado que no se utilizó "new"
console.log(C0.getArea());
*/
var C=new Circulo(5);
console.log(C.getArea());

var C2=new Circulo(20);
console.log(C2);

var C3={
    radio:10,
    getArea:function(){
        var self=this;
        console.log(this);
        var radio2=function(){
            self.radio=20;
        }
        radio2();
        console.log(this.radio);
        return Math.PI*Math.pow(this.radio,2);
    }
};
console.log(C3.getArea());