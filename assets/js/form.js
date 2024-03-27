// selctors
const themeToggleBtn =document.querySelector(`#dark-light`)

// state
const theme = localStorage.getItem(`theme`);
 
// on mount - runs when browser loads
if(theme) {
document.body.classList.add(theme)
}

// handlers

themeToggleBtn.addEventListener(`click`, ( )=>{
    document.body.classList.toggle(`dark-mode`);
    if (document.body.classList.contains(`dark-mode`)){

    localStorage.setItem(`theme`, `dark-mode`);
    } else{
        localStorage.removeItem(`theme`);

    }
})