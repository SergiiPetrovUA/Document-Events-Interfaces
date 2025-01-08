
let contents = document.querySelector('#contents');


contents.onclick = function(event) {
    if(event.target.closest('A')) {
        if(!confirm("Do you really want to leave?")) event.preventDefault()
    }

    
}


// contents.onclick = function(event) {

//     function handleLink(href) {
//       let isLeaving = confirm(`Leave for ${href}?`);
//       if (!isLeaving) return false;
//     }

//     let target = event.target.closest('a');

//     if (target && contents.contains(target)) {
//       return handleLink(target.getAttribute('href'));
//     }
// };