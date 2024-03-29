function handleSubmit (event) {
    event.preventDefault()
    const userEl = document.getElementById(`name`).value.trim()
    const titleEL = document.getElementById(`title`).value.trim()
    const contentEl = document.getElementById(`content`).value.trim()
    if(!userEl || !titleEL || !contentEl){
        const errorEl = document.getElementById("error")
        errorEl.textContent = "Plese fill all in info"
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




document.querySelector("#content-form").addEventListener(`submit`, handleSubmit)