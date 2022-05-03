
export let botonSumarRestar = () => {

 
    let pluses = document.querySelectorAll(".plus");
    let minuses = document.querySelectorAll(".minus");

    pluses.forEach(plus => {
        plus.addEventListener("click", () => {
    
            console.log(plus.parentNode.querySelector('.'));

            let father = plus.parentNode;
            parseInt(father.querySelector()+1)
            
        });
    });
        
    

    minuses.forEach(minus=> {

        minus.addEventListener("click", () => {

            console.log(minus.parentNode.querySelector(''));

            .value = (parseInt(.value) -1)


        });
    });
}
