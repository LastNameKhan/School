// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// var dataarr = JSON.parse(localStorage.getItem("amount")) || [];
// function display(dataarr) {
//   dataarr.forEach(function (elem) {
//     document.getElementById("wallet").innerText = elem.price;
//   });
// }
// display();
var dataarr = JSON.parse(localStorage.getItem("amount"))
displayamount(dataarr)
function displayamount(dataarr){
    dataarr.map(function(elem){
        let amount = document.getElementById("wallet")
        amount.innerText = elem.price
    })
}
let id;
let movies_div = document.getElementById("movies");
async function getdata() {
  try {
    const search = document.getElementById("search").value;

    let res = await fetch(
      `http://www.omdbapi.com/?apikey=65674df1&s=${search}`
    );

    let data = await res.json();
    const movies = data.Search;
    append(movies);
    return movies;
  } catch (error) {
    console.log(error);
  }
}
function append(data) {
  console.log(data);
  movies_div.innerHTML = null;
  data.forEach(function (elem) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = elem.Poster;
    let p = document.createElement("p");
    p.innerText = elem.Title;
    let btn = document.createElement("button");
    btn.innerText = "Book Now";
    btn.setAttribute("class", "book_now");
    btn.addEventListener("click", function () {
      book(elem);
    });
    div.append(image, p, btn);
    movies_div.append(div);
  });
}
async function main() {
  let data = await getdata();
  if (data == undefined) {
    return false;
  }
  append(data);
}

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
var newbook = JSON.parse(localStorage.getItem("movie")) || [];

function book(elem) {
  newbook.push(elem);
  console.log(newbook);
  localStorage.setItem("movie", JSON.stringify(newbook));
  window.location.href="checkout.html"
}
