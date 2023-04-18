function toggleTheme() {
     let body = document.querySelector('body')
     body.classList.toggle("dark-mode")
}


let buttonVariable = document.getElementById("toggleButton")
buttonVariable.onclick = toggleTheme;