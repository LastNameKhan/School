const container = document.getElementById("container");

document.getElementById("getmovie").addEventListener("click", function () {
  document.getElementById("container").innerHTML = null;
  let movie_name = document.getElementById("search").value;
  fetch(`https://www.omdbapi.com/?t=${movie_name}&apikey=65674df1`)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      append(res);
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
});

function append(data) {
  console.log(data);
  let div = document.createElement("div");
  let image = document.createElement("img");
  let title = document.createElement("p");
  let rating = document.createElement("p");
  let recomend = document.createElement("p");
  if(data.Poster == undefined)
  {
    image.src = "https://m.filmfare.com/static/img/filmfare_pwa_404_page.jpg"
  }
  else
  {
    image.src = data.Poster;
  }
  if(data.title == undefined)
  {
    title.innerText = "Please Enter a valid Movie name"
  }
  else
  {
    title.innerText = data.Title;
  }
  if(data.imdbRating == undefined)
  {
    rating.innerText = "Please enter a valid movie name to get the rating"
  }
  else
  {
    rating.innerText = data.imdbRating;
  }
  if(data.imdbRating>=8.2)
  {
    recomend.innerText = "HIGHLY RECOMMENDED"
  }
  else
  {
    recomend.innerText = ""
  }
  div.append(image, title, rating, recomend);
  container.append(div);
}
