const darkMode = document.querySelector(`#dark-mode`);
const container = document.querySelector(`.toggle`);

let mode = `dark`;

darkMode.addEventListener(`click`, function(){
    if (mode === `dark`) {
        mode = `light`;
        container.setAttribute(`class`, `light`);
    }
    else {
        mode = `dark`;
        container.setAttribute(`class`, 'dark');
    }
})
console.log(mode);