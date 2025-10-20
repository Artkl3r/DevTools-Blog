function dropFunc() {
  const dropdown = document.getElementById("myDropdown");
  const arrow = document.getElementById("arrow_icon");

  dropdown.classList.toggle("show");
  arrow.classList.toggle("rotacionado");

  if (dropdown.classList.contains("show")) {
    arrow.classList.remove("fa-caret-down");
    arrow.classList.add("fa-caret-up");
  } else {
    arrow.classList.remove("fa-caret-up");
    arrow.classList.add("fa-caret-down");
  }
}

window.onclick = function (e) {
  if (!e.target.closest('#dropdown')) {
    const myDropdown = document.getElementById("myDropdown");
    const arrow = document.getElementById("arrow_icon");

    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
      arrow.classList.remove("fa-caret-up");
      arrow.classList.add("fa-caret-down");
      arrow.classList.remove("rotacionado");
    }
  }
};    