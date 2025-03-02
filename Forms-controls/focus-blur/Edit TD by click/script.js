


// let area = document.createElement('textarea');

// table.onclick = function(event) {
//     let target = event.target;
//     if(!target.closest('TD')) return;
//     if(checkFocus()) {
//         area.focus()
//     }else {
//         editStar(target.closest('TD'))
//     }
// }

// function editStar(targ) {
//     let coords = targ.getBoundingClientRect();
//     area.className = 'edit';
//     area.value = targ.innerHTML;
//     let textOrigin = area.value
//     targ.replaceWith(area);

//     createButton(coords);
//     let buttonOk = document.getElementById('ok');
//     let buttonCancel = document.getElementById('cancel');
//     buttonOk.onclick = function() {
//         area.classList.remove('edit');
//         targ.innerHTML = area.value
//         area.replaceWith(targ);
//         removeButton(buttonOk , buttonCancel);
//     }
//     buttonCancel.onclick = function() {
//         area.classList.remove('edit');
//         area.replaceWith(targ);
//         removeButton(buttonOk , buttonCancel);
//     }
    
// }


// function checkFocus() {
//     if(area.classList.contains('edit')) return true
// }

// function createButton(coords) {
//     let buttonOk = document.createElement('button');
//     let buttonCancel = document.createElement('button');

//     buttonOk.setAttribute('id' , 'ok')
//     buttonOk.className = 'button';
//     buttonOk.innerHTML = 'ok';
//     document.body.append(buttonOk);
//     let left = coords.left;
//     buttonOk.style.left = left + 'px';
//     let top = coords.top + coords.height + 5 ;
//     buttonOk.style.top = top + 'px'

//     buttonCancel.setAttribute('id' , 'cancel');
//     buttonCancel.className = 'button';
//     buttonCancel.innerHTML = 'Cancel';
//     document.body.append(buttonCancel)
//     buttonCancel.style.left = left + buttonOk.offsetWidth + 'px';
//     buttonCancel.style.top = top + 'px'

// }

// function removeButton(buttonOk , buttonCancel) {
//     buttonOk.remove();
//     buttonOk = null;
//     buttonCancel.remove();
//     buttonCancel = null;
// }

//  optimal solution

let table = document.getElementById('bagua-table');

let editingTd;

table.onclick = function(event) {

  // 3 возможных цели
  let target = event.target.closest('.edit-cancel,.edit-ok,td');

  if (!table.contains(target)) return;

  if (target.className == 'edit-cancel') {
    finishTdEdit(editingTd.elem, false);
  } else if (target.className == 'edit-ok') {
    finishTdEdit(editingTd.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editingTd) return; // уже редактируется

    makeTdEditable(target);
  }

};

function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td'); // td в состоянии редактирования, CSS применятся к textarea внутри ячейки

  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.className = 'edit-area';

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove('edit-td');
  editingTd = null;
}