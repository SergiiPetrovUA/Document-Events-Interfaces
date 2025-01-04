

let container = document.querySelector('#container');

// container.addEventListener('click' , (event) => {
//     let remove = event.target.classList.contains('remove-button');
//     if(!remove) return;
//     document.querySelector('.pane').remove();
// } )

container.onclick = function(event) {
    if (event.target.className != 'remove-button') return;

    let pane = event.target.closest('.pane');
    pane.remove();
};
