document.getElementById("submit-link").addEventListener("click", () => {
    let name = document.getElementById("name").value 
    localStorage.setItem("username", name)
})

 