let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
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
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


document.getElementById("descargarPDF").addEventListener("click", function() {
    // Reemplaza 'ruta/al/archivo.pdf' con la URL de tu archivo PDF
    var pdfUrl = 'https://drive.google.com/file/d/1IZoFITHf8ssJwzgKeIQdRj6LkAIvhtXI/view?usp=drive_link';

    // Crea un elemento <a> invisible
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'Download CV'; // Puedes cambiar el nombre del archivo si lo deseas

    // Agrega el elemento <a> al DOM
    document.body.appendChild(link);

    // Simula un clic en el enlace para iniciar la descarga
    link.click();

    // Elimina el elemento <a> del DOM
    document.body.removeChild(link);
});
