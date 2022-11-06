const ham = document.querySelector(".hamburger")
const closeel = document.querySelector(".close-btn")
const menu = document.querySelector(".menucontainer")
const logo = document.querySelector(".hom")
const disc = document.querySelector(".discover")


ham.addEventListener("click", () =>{
    menu.classList.add('show') 
    logo.classList.add('rel')
    disc.classList.add('rel')
    console.log(disc)
})
closeel.addEventListener("click", () =>{
    menu.classList.remove('show')
    menu.classList.add('hide')
    logo.classList.remove('rel')
    disc.classList.remove('rel')
    console.log(disc)
})


