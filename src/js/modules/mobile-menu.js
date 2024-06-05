export const handleMobileMenu = () => {
    const burger = document.querySelector('.burger')
    const menuWrapper = document.querySelector('.menuWrapper')
    const menu = document.querySelector('.menu')


    burger.addEventListener('click', () => {
        menuWrapper.classList.add('active')
    })

    menuWrapper.addEventListener('click', () => {
        menuWrapper.classList.remove('active')
    })
    menu.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}