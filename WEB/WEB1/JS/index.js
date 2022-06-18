(function(){
    console.log("iniciando...");
    const boton1=document.querySelector("#boton1");  //(id,.class,tag)
    boton1.addEventListener("click",function(){
        console.log("botón mostrar...");
        const msg=document.querySelector("#msg").value;
        console.log(msg);
        const content=document.querySelector("#content");
        content.innerHTML="<h1 id='texto'>"+msg+"</h1>";
    });
    console.log(boton1);
    const boton3=document.querySelector("#boton3");
    boton3.addEventListener("click",cambiarColor);
    const boton4=document.querySelector("#boton4");
    boton4.addEventListener("click",añadirTexto);
})
();
function borrar(){
    console.log("botón borrar");
    //const content=document.querySelector("#content");
    const texto=document.querySelector("#texto");
    //content.innerHTML="<h1></h1>"//"";
    texto.remove();
}
function cambiarColor(){
    console.log("cambiando color...");
    const texto=document.querySelector("#texto");
    console.log(texto);
    if(texto!=null&&texto!=undefined){
        texto.setAttribute("style","color:blue");
    }
}
function añadirTexto(){
    console.log("añadiendo texto...");
    //const msg=document.querySelector("#msg").value;
    document.querySelector("#msg").value="Hola Mundo";
}