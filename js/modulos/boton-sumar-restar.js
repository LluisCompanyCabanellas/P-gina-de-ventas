export let botonSumarRestar = () => {

    let minuses = document.getElementsByClassName("minus");
    let plusMinusInput = document.getElementsByClassName("plus-minus-input");
    let pluses = document.getElementsByClassName("plus");

    pluses.forEach(plus => {

        plus.addEventListener("click", () => {
    
            plusMinusInput.value = (parseInt(plusMinusInput.value) + 1);
        });
    });
        
    minuses.forEach(minus => {

        minus.addEventListener("click", () =>{
        
            if(plusMinusInput.value > 1) {
                plusMinusInput.value = (parseInt(plusMinusInput.value) - 1);
            }
        });
        
    
    });
}




