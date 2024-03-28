function displayBlogs(){
    const containerEl = document.querySelector(".container")
    containerEl.innerHTML = ""
    const blogs = JSON.parse(localStorage.getItem("blogs")) || []
    for(let i =0; i < blogs.length; i++){
        const cardEl = document.createElement("div")
        const titleEl = document.createElement("h3")
        const contentEl = document.createElement("p")
        const userEl = document.createElement("p")
        titleEl.textContent = blogs[i].title
        contentEl.textContent = blogs[i].content
        userEl.textContent = `posted by: ${blogs[i].userName} `
        cardEl.classList.add("card")
        cardEl.append(titleEl, contentEl, userEl)
        containerEl.append(cardEl)
    }
}
displayBlogs()
const themeToggleBtn =document.querySelector(`.dark-mode`)

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

document.getElementById("go-back").addEventListener("click", () =>{
    location.href="index.html";
})