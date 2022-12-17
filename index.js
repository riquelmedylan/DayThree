const sidebar = document.querySelector(".container");
const input = document.querySelector("input");
const icon = document.querySelector(".icon-search");


sidebar.addEventListener("click", (e) =>{
    sidebar.classList.add("extend")
    input.classList.add("isActive")
    icon.classList.add("move")
    input.focus()
})