
for(let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend(span);
    span.append(span.nextSibling);
}


tree.onclick = e => {
    console.log(e.target.tagName)
    if(e.target.tagName != 'SPAN') return;

    let childrenContainer = e.target.parentNode.querySelector('ul');
    if(!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden; // инвертирование 

    if(childrenContainer.hidden) {
        e.target.classList.add('hide');
        e.target.classList.remove('show');
    }else  {
        e.target.classList.add('show');
        e.target.classList.remove('hide');
    }
}
