let tree = document.getElementById("tree");

tree.addEventListener("click", (event) => {
  
  if (!event.target.children.length > 0) return;
  let hid = event.target.closest("li");
  if(hid.classList.toggle('open')) {
    hid.firstElementChild.hidden = false
  } else {
    hid.firstElementChild.hidden = true
  }
});


