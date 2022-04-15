document.getElementById("form").addEventListener("submit", getdata);
var arr = [];
function getdata(event) {
  event.preventDefault();
  var obj = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  arr.push(obj);
  console.log(arr);
  localStorage.setItem("details", JSON.stringify(arr));
    if (arr[arr.length-1].name == ""||arr[arr.length-1].number == ""||arr[arr.length-1].email == ""||arr[arr.length-1].password == "") {
      alert("please enter the value");
    }
    else
    {
        document.getElementById("sub").addEventListener("click",function(){
            window.location.href = "login.html"
        });
    }
}
