

let thum = slider.querySelector('.thumb');


thum.onmousedown = function(event) {

    let shiftX = event.clientX - thum.getBoundingClientRect().left;
    
    document.addEventListener('mousemove' , onMouseMove);
    document.addEventListener('mouseup' , onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left

        if(newLeft < 0) {
            newLeft = 0;
        }
        
        let rightEdge = slider.offsetWidth - thum.offsetWidth;
        if(newLeft > rightEdge) {
            newLeft = rightEdge
        }

        thum.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup' , onMouseUp);
        document.removeEventListener('mousemove' , onMouseMove);
    }
}

thum.ondragstart = function() {
    return false;
}