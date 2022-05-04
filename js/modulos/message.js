export let message = (message, type) => {

    let notification = document.querySelector(".notification");
    notification.classList.add("active");

    setTimeout(function(){
        notification.classList.remove("active");
    }, 5000)

    notification.innerHTML = message
    notification.classList.add(type);

}

