
const burger = document.querySelector('#drop');
const menu = document.querySelector('#menu');

burger.addEventListener('click' , () => {
    if(menu.classList.contains('disp') == true) {
        menu.classList.remove('disp');
    }else {
        menu.classList.add('disp')
    }
})

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click' , e => {
        const menu = e.currentTarget.dataset.path
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if(!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open')
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open')
                }, 0)
            }
            if(document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId)
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open')
                })
            }

            window.onclick = e => {
                if(e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                }else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                }
            }
        })
        
    })
});
