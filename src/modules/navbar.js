function navbar({navbarSelector, burgerSelector, navbarItemSelector}){
    const navbar = document.querySelector(navbarSelector),
        burger = document.querySelector(burgerSelector),
        navbarItems = document.querySelectorAll(navbarItemSelector)
    burger.addEventListener('click', ()=>{
        navbar.classList.toggle('active')
    })
    navbarItems.forEach(item=>{
        item.addEventListener('click', (e)=>{
            if (e.target && !(e.target.classList.contains('dropdown_title'))) {
                document.querySelectorAll('.nav_item').forEach(item => item.classList.remove('active'))
                item.classList.add('active')
                navbar.classList.toggle('active')
            }
        })
    })
}
export default navbar