// Store cart items in local storage with key: "items"

fetch(` https://grocery-masai.herokuapp.com/items`)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log(res.data);
    append(res.data);
  })
  .catch(function (error) {
    console.log(error);
  });

function append(data) {
  data.map(function (elem) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = elem.image;
    image.setAttribute("id","image")
    let name = document.createElement("p");
    name.innerText = elem.name;
    let price = document.createElement("p");
    price.innerText = elem.price;
    let add = document.createElement("button");
    add.setAttribute("id", "add_to_cart");
    add.innerText = "Add to Cart";
    add.addEventListener("click", function () {
      cart(elem);
    });
    div.append(image, name, price, add);
    document.getElementById("items").append(div);
  });
}
let countvalue = 0;
var setcart = [];
function cart(elem) {
  countvalue++;
  document.getElementById("item_count").innerHTML = null;
  let count = document.getElementById("item_count");
  count.innerText = countvalue;
  setcart.push(elem)
console.log(setcart)
localStorage.setItem("items",JSON.stringify(setcart));
}

document.getElementById("go_to_cart").addEventListener("click", function () {
  window.location.href = "cart.html";
});
