//here retrieve the generated number from Localstorage.

let col = JSON.parse(localStorage.getItem("number"));
  
if (col == "1")
{
  document.querySelector("#show_number").append(col)
  document.querySelector("#show_number").style.color= "yellow";
}
else if (col == "6")
{
  document.querySelector("#show_number").append(col)
  document.querySelector("#show_number").style.color = "green";
}
else
{
  document.querySelector("#show_number").append(col)
  document.querySelector("#show_number").style.color = "red";
}
