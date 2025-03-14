

function work(eve) {
    console.log('work' + eve);
}


if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded' , work);
}else {
    console.log('log')
    work('log');
}



