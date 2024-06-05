export const catalog = () => {
    const catalogBtn = document.querySelector('.catalog-btn')
    const catalog = document.querySelector('.car-catalog')

    catalogBtn.addEventListener('click', () => {
        catalogBtn.classList.add('active')
        catalog.classList.add('active')
    })
    catalog.addEventListener('mouseleave', () => {
        catalog.classList.remove('active')
        catalogBtn.classList.remove('active')

    })
}