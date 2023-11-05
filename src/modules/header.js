function header(headerSelector, navbarSelector){
    const header = document.querySelector(headerSelector),
        height = window.innerHeight,
        navbar = document.querySelector(navbarSelector)
    if (height > 800) {
        navbar.style.top = 10 + 'vh'
    }
    window.addEventListener('scroll', ()=>{

        header.classList.toggle('active', scrollY > 0)
    })
}
export default header