//Las funciones en js son un tipo de objeto
function mul(x,y){
    return x*y;
}
mul.version="v.1.0.0";  //Pueden tener atributos
console.log(mul.version);
//Fábrica de funciones
function makeMul(num){  //Esta función retorna funciones
    var miFuncion=function(x){
        return num*x;
    }
    return miFuncion;
}
var mul3=makeMul(3);
console.log(mul3(5));
//Funciones como argumentos a otras funciones
function hacerOperacion(x,operacion){
    return operacion(x);
}
var res=hacerOperacion(5,mul3);
console.log(res);
var duplicar=makeMul(2);
console.log(hacerOperacion(100,duplicar));