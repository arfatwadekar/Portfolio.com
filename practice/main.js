let menu =  document.querySelector('#menu_icon');
let navbar = document.querySelector('.nav_link');


menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

