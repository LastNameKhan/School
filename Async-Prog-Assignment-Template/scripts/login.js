document.getElementById("login_submit").addEventListener("click",function(){
    event.preventDefault()
    var arr1 = JSON.parse(localStorage.getItem("details"))
    var login_email = document.getElementById("login_email").value
    var login_password = document.getElementById("login_password").value
    arr1.map(function(elem,index){
        var useremail = elem.email
        var userpassword = elem.password
        if(login_email==useremail && login_password==userpassword)
        {
            window.location.href = "index.html"
        }
        else
        {
            alert("Invalid credentials")
        }
    })
})

// document.querySelector("#submit").addEventListener("click",submitFunction)

// var rUser=JSON.parse(localStorage.getItem("registerUser"))
// function submitFunction(event){
//     event.preventDefault();
//     var email=document.querySelector("#email").value
//     var password=document.querySelector("#password").value
//     console.log(email)
//     rUser.map(function(elem,index){
//         var useremail=elem.useremail
//         var userpassword=elem.userpassword
//         if(email==useremail && password==userpassword)
//         {
            
//             window.location.href="file:///C:/Users/dell/signin/register.html";
           
           
//         }
        
        
        


//     })
//     }