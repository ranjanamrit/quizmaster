let m = localStorage.getItem("marks")
let n = localStorage.getItem("username")

document.getElementById("name").innerHTML = n;
document.getElementById("marks").innerHTML += m;