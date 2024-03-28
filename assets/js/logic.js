const mode = document.getElementById(`dark-mode`);
const body = document.body;

const darkBtn =document.querySelector(`dark-mode`)

if (darkMode) {
    body.classList.add(`dark-mode`);
}

mode.onclick = function() {
    body.classList.toggle(`dark-mode`);

    localStorage.setItem(`darkMode`, body.classList.contains(`dark-mode`));
}