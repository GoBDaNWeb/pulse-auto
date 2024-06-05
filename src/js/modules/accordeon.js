export const accordeonFunc = () => {

    let itemsTop = document.querySelectorAll('.accordion');

    itemsTop.forEach(item => {
        const itemParent = item.parentElement
        const itemContent = itemParent.querySelector('.accordion-content')
        item.addEventListener('click', () => {
            if(item.className.includes('active')) {
                item.classList.remove('active')
                itemContent.classList.remove('active')
            } else {
                item.classList.add('active')
                itemContent.classList.add('active')

            }
        })
    })
}