

document.querySelector('body').onclick = function(e) {
    if(e.target.className != 'close') return
    let item = e.target.closest('.item'); // ищем родителя 
    item.remove()
}