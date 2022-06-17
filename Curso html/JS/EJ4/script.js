//Creación de objetos
var empresa=new Object();
empresa.nombre="Caralibro";
empresa.ceo=new Object();
empresa.ceo.nombre="Carlos";
empresa.ceo.apellido="DLCG";
console.log(empresa);
console.table(empresa);
console.log(empresa.ceo.nombre);
console.log(empresa["nombre"]);
var attr="No. de usuarios";
empresa[attr]=10000000000; //Se añade el campo como un diccionario
console.log(empresa[/*"No. de usuarios"||*/attr]);

var caralibro={
    nombre:"Caralibro",
    ceo:{
        nombre:"Carlos",
        apellido:"DLCG",
    },
    "No. de usuarios":1000000000000,
};
console.log(caralibro);