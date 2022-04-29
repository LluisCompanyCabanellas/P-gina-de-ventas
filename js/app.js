


//First work JavaScript//
let menu = document.getElementById("cabecera-menu-mobile");
let hamburger = document.getElementById("menu-hamburger-button")

if(hamburger){
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active"); 
        hamburger.classList.toggle("active"); 
    });
}



//Second work JavaScript//

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



//Third work JavaScript//

let tabs = document.querySelectorAll(".tab");

if(tabs) {
    tabs.forEach(tab =>{

        tab.addEventListener("click", () => {

            tabs.forEach(tab =>{
                tab.classList.remove("active");
            });

            tab.classList.add("active");
        });
    });
}





var tabButton = document.getElementsByClassName('tab'),
    tabContent = document.getElementsByClassName('tab-content');

tabButton[0].classList.add('active');
tabContent[0].style.display = 'block';

function  {
     
        tabContent[i].style.display = 'none';
        tabButton[i].classList.remove('active');
    }
    document.getElementById(x).style.display = 'block';
    currentTarget.classList.add('active');
}

























var tabButton = document.getElementsByClassName('tab'),
    tabContent = document.getElementsByClassName('tab-content');

tabButton[0].classList.add('active');
tabContent[0].style.display = 'block';

function city(e, x) {
    var i;
    for (i = 0; i < tabButton.length; i++) {
        tabContent[i].style.display = 'none';
        tabButton[i].classList.remove('active');
    }
    document.getElementById(x).style.display = 'block';
    e.currentTarget.classList.add('active');
}



