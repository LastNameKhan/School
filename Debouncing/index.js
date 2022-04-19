let id;

let movies_div = document.getElementById("movies");

async function searchMovies() {
  try {
    const query = document.getElementById("query").value;

    let res = await fetch(
      `https://www.omdbapi.com/?apikey=65674df1&s=${query}`
    );

    let data = await res.json();
    const movies = data.Search;
    return movies;
    // append(movies)
  } catch (error) {
    console.log(error);
  }
}

function append(data) {
  //Optimization#1
  movies_div.innerHTML = null;
  data.forEach(function (elem) {
    let p = document.createElement("p");
    p.innerText = elem.Title;
    movies_div.append(p);
  });
}

async function main() {
  let data = await searchMovies();
  if (data == undefined) {
    return false;
  }
  append(data);
}

//Debouncing
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
