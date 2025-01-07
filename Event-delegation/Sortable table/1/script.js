
// function sortTable(columnIndex) {
//     const table = document.getElementById("myTable");
//     const tbody = table.tBodies[0];
//     const rows = Array.from(tbody.rows);
  
//     const isNumeric = (value) => !isNaN(value) && value.trim() !== "";
  
//     rows.sort((rowA, rowB) => {
//       const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
//       const cellB = rowB.cells[columnIndex].innerText.toLowerCase();
  
//       if (isNumeric(cellA) && isNumeric(cellB)) {
//         return parseFloat(cellA) - parseFloat(cellB);
//       }
  
//       return cellA.localeCompare(cellB);
//     });
  
//     // Переставляем строки в порядке сортировки
//     rows.forEach((row) => tbody.appendChild(row));
//   }


grid.onclick = function(e) {
    if(e.target.tagName != 'TH') return;

    let th = e.target
    sortGrid(th.cellIndex , th.dataset.type);
}

function sortGrid(colNum , type) {
    let tbody = grid.querySelector('tbody');
    let rowsArray = Array.from(tbody.rows);
    let compare;
    switch (type) {
        case 'number':
            compare = function(rowA , rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
            }
            break;
        case 'string':
            compare = function(rowA , rowB) {
                    return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            }
            break;
    }
    rowsArray.forEach(item => {
        console.log(item)
    })
    rowsArray.sort(compare);
    console.log(rowsArray)
    tbody.append(...rowsArray)
            
}
