function handleSubmit (event) {
    event.preventDefault()
    const userEl = document.getElementById(`name`).value.trim()
    const titleEL = document.getElementById(`title`).value.trim()
    const contentEl = document.getElementById(`content`).value.trim()
    if(!userEl || !titleEL || !contentEl){
        const errorEl = document.getElementById("error")
        errorEl.textContent = "Plese fill all info"
        setTimeout(() => {
         errorEl.textContent = ""   
        }, 3000);
        return;
    }
    const data = {
        userName: userEl, title: titleEL, content: contentEl
    }
   handleLocalStorage(data)
   location.href = "blog.html"
}
function handleLocalStorage(data) {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || []
    blogs.push(data)
    localStorage.setItem("blogs", JSON.stringify(blogs))
}


const themeToggleBtn =document.querySelector(`#dark-light`)

console.log(`themeToggleBtn`)


// state
const theme = localStorage.getItem(`theme`);
 
// on mount - runs when browser loads
if(theme) {
document.body.classList.add(theme)
}

// handlers




// themeToggleBtn.addEventListener(`click`, (event)=>{
//     document.body.classList.toggle(`dark-mode`);
//     if (document.body.classList.contains(`dark-mode`)){

//     localStorage.setItem(`theme`, `dark-mode`);
//     } else{
//         localStorage.removeItem(`theme`);

//     }
// })

document.querySelector("#content-form").addEventListener(`submit`, handleSubmit)