let menu = document.getElementById("cabecera-menu-mobile");
let hamburger = document.getElementById("menu-hamburger-button")

if(hamburger){
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active"); 
        hamburger.classList.toggle("active"); 
    });
}





let minus = document.getElementById("minus");
let plusMinusInput = document.getElementById("plus-minus-input");
let plus = document.getElementById("plus");


plus.addEventListener("click", () => {

    plusMinusInput.value = (parseInt(plusMinusInput.value) + 1);
});

minus.addEventListener("click", () =>{

    if(plusMinusInput.value > 1) {
        plusMinusInput.value = (parseInt(plusMinusInput.value) - 1);
    }
});



