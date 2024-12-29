


const pane = document.querySelectorAll('.pane');

pane.forEach(item => {
    item.insertAdjacentHTML('afterbegin' , '<button class="remove-button">[x]</button>')
    item.onclick = () => item.remove()
})