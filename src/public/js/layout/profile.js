$(document).ready(function () {
    // code thay đổi pass
    const me = document.querySelector('#changePass');
    const show = document.querySelector('#show')
    // me.onclick = function (e) {
    //     show.classList.toggle('none')
    // }
    me.addEventListener('click', () =>{
        show.classList.toggle('show')
    })
    // end
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const tabs = $$('.acc__menu__item');
    const panes = $$('.acc__tab__menu');
    const titles = $$('.acc__title__fist')
    const line = $('.acc__line');
    const tabActive = $('.acc__menu__item.active')

    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'

    tabs.forEach((tab, index) => {
        const pane = panes[index]
        const title = titles[index]
        tab.onclick = function (e) {
            e.preventDefault();
            $('.acc__menu__item.active').classList.remove('active');
            $('.acc__tab__menu.active').classList.remove('active');
            $('.acc__title__fist.active').classList.remove('active');
            line.style.left = this.offsetLeft + 'px'
            line.style.width = this.offsetWidth + 'px'
            this.classList.add('active')
            pane.classList.add('active')
            title.classList.add('active')

        }
    })
})
// repon menu moble
// 
// end