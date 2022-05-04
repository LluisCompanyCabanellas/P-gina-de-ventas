import{message} from './message.js';

export let product = () => {
    
    let pays = document.querySelector(".pay");

    pays.addEventListener("click", () =>{

        message("Has añadido el producto con exito", 'success');
    });
}









