

document.querySelector('.b-1').onclick = f1;

function f1() {
    console.group('function 1');
    console.log('function 1');
    console.log(this);
    console.groupEnd()
}


// document.querySelector('.b-1').click()

document.querySelector('.d-2').ondblclick = f2;

function f2() {
    console.group('function 2');
    console.log('function 2');
    console.log(this);
    console.groupEnd()
}

let dblEvent = new MouseEvent('dblclick');

// document.querySelector('.d-2').dispatchEvent(dblEvent)

// document.querySelector('.d-3').onmouseenter = f3;

function f3() {
    console.group('function 3');
    console.log('function 3');
    console.log(this);
    console.groupEnd()
}

let enterEvent = new MouseEvent('mouseenter');

// document.querySelector('.d-3').dispatchEvent(enterEvent);


document.querySelector('.i-4').onkeypress = f4;
function f4(event) {
    console.group('function 4');
    console.log('function 4');
    console.log(event.key);
    console.log(event.shiftKey);
    console.groupEnd()
}


let k1EventEvent = new KeyboardEvent('keypress' , {
    key: 'z',
    shiftKey: true
});
// document.querySelector('.i-4').dispatchEvent(k1EventEvent);


document.querySelector('.i-5').oninput = f5;
function f5(event) {
    console.group('function 5');
    console.log('function 5');

    console.log(this.value);
    console.groupEnd()
}

let inpevent = new Event('input');
document.querySelector('.i-5').value = 'zW'
document.querySelector('.i-5').dispatchEvent(inpevent)
