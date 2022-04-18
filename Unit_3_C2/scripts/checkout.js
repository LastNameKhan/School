var arr = []
document.getElementById("submit").addEventListener("click",function(){
    event.preventDefault()
    var obj = {
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,
        address:document.getElementById("address").value
    }
    arr.push(obj)
    console.log(arr)
    if(arr.name == ""||arr.number == ""|| arr.address == "")
    {
        alert("please enter a value")
    }
    else
    {
        setTimeout(function () {
            alert("Your order is accepted ")
        },3000)
    }
})