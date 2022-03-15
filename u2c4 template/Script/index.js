document.querySelector("#form").addEventListener("submit",subfun)
var objarr = JSON.parse(localStorage.getItem("StudentDataBase")) || []
function subfun (event) {
    event.preventDefault()
    var obj = {
        name:document.querySelector("#name").value,
        age:document.querySelector("#age").value,
        gender:document.querySelector("#gender").value,
        email:document.querySelector("#gender").value,
        number:document.querySelector("#phone").value
    }
    objarr.push(obj)
    localStorage.setItem("StudentDataBase",JSON.stringify(objarr))
}