(function(){    //Función autoejecutable
    const page1=document.querySelector("#page1");
    page1.addEventListener("click",function(){
        const content=document.querySelector("#content");
        loader(content,"HTML/page1.html");
    });
    const page2=document.querySelector("#page2");
    page2.addEventListener("click",function(){
        const content=document.querySelector("#content");
        loader(content,"HTML/page2.html");
    });
})();
const loader=(element,nombre)=>{   //En lugar de usar 'function' se usa esta estructura para definir una función anónima "FUNCIONES FLECHA"
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            element.innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET",nombre,true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}