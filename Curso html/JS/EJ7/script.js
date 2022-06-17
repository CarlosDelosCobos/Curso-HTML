//Arreglo
var array=new Array();
array[0]="cadena1";
array[1]=2;
array[2]=3.1415;
array[3]=function(nombre){
    console.log("Hola "+nombre);
}
array[4]={curso:"HTML, CSS y JavaScript"};
console.log(array);
console.log(array[4].curso);
//Creación de un arreglo asignando valores
var nombres=["Alberto","Juan","Iván","José"];
console.log(nombres);

nombres[100]="Ciento";
for(var i=0;i<nombres.length;i++){
    console.log("Hola "+nombres[i]);
}

var miObj={
    nombre:"Carlos",
    curso:"HTML, CSS y JS",
    unidad:"Multimedia",
};
for(var prop in miObj){
    console.log(prop+":"+miObj[prop]);
}
for(var nombre in nombres){
    console.log("Hola "+nombres[nombre]);
}