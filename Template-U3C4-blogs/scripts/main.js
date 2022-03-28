async function apiCall(url) {
  //add api call logic here
  try {
    let res = await fetch(url);

    let articles = await res.json();
    apiCall(articles);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
}

function appendArticles(articles, main) {
  //add append logic here
  articles.forEach(function (el) {
    let div = document.createElement("div");
    let title = document.createElement("h4");
    title.innerText = el.title;
    let img = document.createElement("img");
    img.src = el.urlToImage;
    let content = document.createElement("p");
    content.innerText = el.content;
    div.append(img, title, content);
    main.append(div);
  });
}

export { apiCall, appendArticles };
