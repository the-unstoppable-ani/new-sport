let toggle = document.querySelector('.toggle-btn');
let mobnav = document.querySelector('.mob-nav');
let closebtn = document.querySelector('.close');
let search = document.querySelector('.search');
let customcrt = document.getElementById('search');



toggle.addEventListener('click',()=>{
    mobnav.classList.toggle('active');
})
closebtn.addEventListener('click',()=>{
    mobnav.classList.remove('active');
})
search.addEventListener('click',()=>{
    customcrt.classList.toggle('active');
})


console.log();