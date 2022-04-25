// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var getbook = JSON.parse(localStorage.getItem("movie"));
var movie_div = document.getElementById("movie");

display(getbook);
function display(getbook) {
    document.getElementById("movie").innerHTML = null;
  getbook.map(function (elem) {
    document.getElementById("movie").innerHTML = null;
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = elem.Poster;
    let p = document.createElement("h2");
    p.innerText = elem.Title;
    div.append(p,image);
    movie_div.append(div);
    localStorage.setItem("movie",JSON.stringify(getbook))
  });
}

var dataarr = JSON.parse(localStorage.getItem("amount"))
displayamount(dataarr)
function displayamount(dataarr){
    dataarr.map(function(elem){
        let amount = document.getElementById("wallet")
        amount.innerText = elem.price
    })
}

document.getElementById("confirm").addEventListener("click",function(){
    if(dataarr.price<100)
    {
        alert("Confirm Booking")
    }
    else
    {
        alert("Insufficient Balance")
    }
})