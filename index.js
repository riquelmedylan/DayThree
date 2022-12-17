const container = document.querySelector(".container");
const input = document.querySelector("input");
const icon = document.querySelector(".icon-search");


icon.addEventListener("click", (e) =>{
    if(container.classList.contains("extend")){
        input.classList.remove("isActive")
        icon.classList.remove("move")    
        container.classList.remove("extend")
        return
    }
    container.classList.add("extend")
    input.classList.add("isActive")
    icon.classList.add("move")
    input.focus()
})

