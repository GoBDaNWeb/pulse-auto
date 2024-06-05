export const testDrive = () => {
    const checkboxes = document.querySelectorAll('.test-drive-checkbox')
    if(checkboxes) {
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', e => {
                if(e.target.checked) {
                    e.target.parentNode.classList.add('active')
                } else {
                    e.target.parentNode.classList.remove('active')

                }
            })
        })
    }
   
}