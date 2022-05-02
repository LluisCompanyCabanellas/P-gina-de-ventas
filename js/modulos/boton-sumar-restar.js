export let botonSumarRestar = () => {

let minus = document.getElementsByClassName(".minus");
let plusMinusInput = document.getElementsByClassName(".plus-minus-input");
let plus = document.getElementsByClassName(".plus");


plus.addEventListener("click", () => {

    plusMinusInput.value = (parseInt(plusMinusInput.value) + 1);
});

minus.addEventListener("click", () =>{

    if(plusMinusInput.value > 1) {
        plusMinusInput.value = (parseInt(plusMinusInput.value) - 1);
    }
});

}


