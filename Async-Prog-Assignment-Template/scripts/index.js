document.getElementById("home").addEventListener("click",function (){
    window.location.href="index.html"
})
document.getElementById("login").addEventListener("click",function(){
    window.location.href = "login.html"
})
document.getElementById("signup").addEventListener("click",function (){
    window.location.href = "signup.html"
})

let id;
    let i = 0;
    function start() {
        let images_arr = JSON.parse(localStorage.getItem("images"))
        let img = document.createElement("img")
        id = setInterval(function (){
            console.log(images_arr[i])
            document.getElementById("slideshow").innerHTML = null;
            img.setAttribute("src",images_arr[i])
            document.getElementById("slideshow").append(img)
            i++;
            if(i == images_arr.length)
            {
                i = 0;
            }
        },2000)
    }
    function stop () {
        clearInterval(id)
    }