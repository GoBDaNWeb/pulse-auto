export const blogHandledFunc = () => {

    let blogBtns = document.querySelectorAll('.blog-handled__btn');

    const handleBlog = (btn) => {
        let content = btn.closest('.blog-handled__content');
        let blogWrapper = content.querySelector('.blog-handled__wrapper'); 
        blogWrapper.classList.contains('active')
            ? removeBlog(blogWrapper, btn)
            : addBlog(blogWrapper, btn);
    }

    const removeBlog = (blog, btn) => {
        blog.classList.remove('active');
        btn.textContent = 'Показать ещё';
    }

    const addBlog = (blog, btn) => {
        blog.classList.add('active');
        btn.textContent = 'Скрыть';
    }

    if (blogBtns) {
        blogBtns.forEach(btn => btn.addEventListener('click', () => handleBlog(btn) ))
    }

}