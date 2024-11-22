let menuVisible = false;
//funcion que muestra u oculta el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono la opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("oop");
        habilidades[4].classList.add("cyc");
        habilidades[5].classList.add("apirest");
        habilidades[6].classList.add("azuree");
        habilidades[7].classList.add("devops");
        habilidades[8].classList.add("rdp");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("teq");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("adap");
        habilidades[13].classList.add("dedicacion");
    }
}
//Detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}