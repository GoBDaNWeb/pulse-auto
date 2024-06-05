export const sort = () => {
    const sortBtn = document.querySelector('.sortBtn')
if(sortBtn) {
    sortBtn.addEventListener('click', (e) => {
        const {target} = e
        const span = target.querySelector('span')

        if(span.textContent === 'По убыванию цены') {
            target.classList.add('rotate')

            span.textContent = 'По возрастанию цены'
        } else {
            target.classList.remove('rotate')

            span.textContent = 'По убыванию цены'

        }
    })
}
   
}