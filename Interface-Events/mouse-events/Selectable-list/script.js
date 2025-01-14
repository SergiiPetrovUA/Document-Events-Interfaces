
let ul = document.querySelector('#ul');

// ul.addEventListener('click' , (event) => {
//     if(!event.ctrlKey == true) {
//         for(let key of ul.children) {
//             if(key.classList.contains('selected')) key.classList.remove('selected')
//         }
//     }
//     event.target.classList.add('selected');
    
// })

// ul.onmousedown = function() {
//     return false;
// }



//  solution

ul.onclick = function(event) {
    if(event.target.tagName != 'LI') return;

    if(event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
    }else {
        singSelect(event.target)
    }
}

ul.onmousedown = function() {
    return false;
}

function toggleSelect(li) {
    li.classList.toggle('selected');
}

function singSelect(li) {
    let selected = ul.querySelectorAll('.selected');
    for(let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}