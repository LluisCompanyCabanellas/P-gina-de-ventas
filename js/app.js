// Para declarar una variable en javascript tenemos que escribir primero
// "let" y luego el nombre de la variable, el cual puede ser cualquiera que 
// queramos, pero no puede empezar por un numero, ni puede contener espacios. El
// nombre tiene que ser escrito en minusculas y debe ser lo más descriptivo 
// posible. En este caso la variable "square" hace referencia a un elemento
// HTML que se encuentra en el archivo index.html, que tiene una id "square".
let menu = document.getElementById("cabecera-menu-mobile");
let hamburger = document.getElementById("menu-hamburger-button")
// En la siguiente linea se establece un evento que se ejecutara cada vez
// que se presione el elemento de la variable square (es decir, el elemento
// HTML que tiene una id "square").
hamburger.addEventListener("click", () => {

    // En la siguiente línea se añade una clase "active" al elemento HTML que tiene
    // una id "square". 
    menu.classList.toggle("active"); 

    // En la siguiente línea se añade una clase "active" al elemento HTML que tiene
    // una id "square" si no tiene la clase, y se la quita si la tiene.  
    // square.classList.toggle("active"); 
});
