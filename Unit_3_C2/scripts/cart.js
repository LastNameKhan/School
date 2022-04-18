var getcart = JSON.parse(localStorage.getItem("items"));
display(getcart);
function display(getcart) {
  document.getElementById("cart").innerHTML = null;
  getcart.map(function (elem, index) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = elem.image;
    image.setAttribute("id", "image");
    let name = document.createElement("p");
    name.innerText = elem.name;
    let price = document.createElement("p");
    price.innerText = elem.price;
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.addEventListener("click", function () {
      rem(index, total);
    });
    div.append(image, name, price, remove);
    document.getElementById("cart").append(div);
  });
  let total = 0;
  for (let i = 0; i < getcart.length; i++) {
    total = total + getcart[i].price;
  }
  let totalvalue = document.getElementById("cart_total");
  totalvalue.innerText = total;

  function rem(index, total) {
    let newprice = document.getElementById("cart_total");
    total = total - getcart[index].price;
    newprice.innerText = total;
    getcart.splice(index,1)
    localStorage.setItem("items",JSON.stringify(getcart))
    display(getcart)
  }
}
document.getElementById("checkout").addEventListener("click",function(){
    window.location.href="checkout.html"
})