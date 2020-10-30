const hamburger = document.querySelector('.my-header-top .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.my-header-top .nav-bar .nav-list ul');
const my_header_top = document.querySelector('.my-header-top.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        my_header_top.style.backgroundColor = '#29323c';
    }
    else{
        my_header_top.style.backgroundColor = 'transparent';
    }
});