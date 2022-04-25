// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click", function () {
  var dataarr = JSON.parse(localStorage.getItem("amount")) || [];
  event.preventDefault()
  var dataobj = {
    price: document.getElementById("amount").value++
  };
  dataarr.push(dataobj);
  localStorage.setItem("amount", JSON.stringify(dataarr));
  display(dataarr);
});
document.getElementById("book_movies").addEventListener("click", function () {
  window.location.href = "movies.html";
});
function display(dataarr) {
let total = 0;
for(var i = 0;i<dataarr.length;i++)
{
    total = total + Number(dataarr[i].price)
}
document.getElementById("wallet").innerText = total
}
