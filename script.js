const links = document.querySelectorAll('.link')
const sections = document.querySelectorAll('section')

let activeLink = 0

links.forEach((link, index) => {
    link.addEventListener('click', () => {
        if (activeLink != index) {
            links[activeLink].classList.remove('active')
            link.classList.add('active')
            sections[activeLink].classList.remove('active')

            setTimeout(() => {
                activeLink = index
                sections[index].classList.add('active')
            }, 1000)
        }
    })
})