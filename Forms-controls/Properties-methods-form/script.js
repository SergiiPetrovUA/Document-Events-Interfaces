
// document.forms
// form.elements
// element.form
// input.value
// textarea.value 

// select option 
// select.options
// select.value
// select.selectedIndex

let selectedOpition = genres.options[genres.selectedIndex];
console.log(selectedOpition.value);
console.log(selectedOpition.text);

let newOption = new Option('Классика' , 'classic');
genres.append(newOption);

newOption.selected = true