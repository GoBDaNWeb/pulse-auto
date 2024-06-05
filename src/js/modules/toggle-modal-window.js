export const toggleModalWindow = () => {
    const btnOpenModal = document.querySelectorAll('.modal-window__btn-open');
    const btnShortOpenModal = document.querySelectorAll('.modal-window__btn-short-open');
    const htmlWindow = document.querySelector('html');
    
    const modal = document.querySelector('.modal-window');

    const btnCloseModal = document.querySelectorAll('.modal-window__btn-close');

    const btnSuccessOrderCloseModal = document.querySelectorAll('.form__btn-action-success');

    let timeoutEvent;



    const openModalWindow = (modal, classModal) => {
        htmlWindow.classList.add('active');
        modal.classList.add('active');
        const modalWindowContent = modal.querySelector(classModal);
        modalWindowContent.classList.add('active');
    }

    const closeModalWindow = (modal) => {
        htmlWindow.classList.remove('active');
        let orderWindow = modal.querySelector('.modal-window__content-order');
        let orderShortWindow = modal.querySelector('.modal-window__content-short-order');
        modal.classList.remove('active');
        let successWindow = modal.querySelector('.modal-window__content-success');
        timeoutEvent = setTimeout(() => {
            successWindow.classList.remove('active');
            orderWindow.classList.remove('active');
            orderShortWindow.classList.remove('active');
        },1000)
    }

    const toggleModal = (btn) => {
        let classModal = btn.classList.contains('modal-window__btn-short-open')
            ? '.modal-window__content-short-order'
            : '.modal-window__content-order'
        clearTimeout(timeoutEvent);
        modal.classList.contains('active')
            ? closeModalWindow(modal)
            : openModalWindow(modal, classModal);
    }

    if (btnOpenModal) {
        btnOpenModal.forEach(item => item.addEventListener('click', () => toggleModal(item)));
    }

    if (btnShortOpenModal) {
        btnShortOpenModal.forEach(item => item.addEventListener('click', () => toggleModal(item)));
    }

    if (btnCloseModal) {
        btnCloseModal.forEach(item => item.addEventListener('click', () => toggleModal(item)));
    }

    if (btnSuccessOrderCloseModal) {
        btnSuccessOrderCloseModal.forEach(item => item.addEventListener('click', () => {
            closeModalWindow(modal);
        }));
    }

    const checkTarget = (event) => {
        let elem = event.target;
        if (elem.classList.contains('modal-window')) {
            closeModalWindow(modal);
        }
    }

    if (modal) {
        modal.addEventListener('click', () => checkTarget(event))
    }
}