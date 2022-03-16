const search_results_div = document.getElementById("search_results");
const searchvideos = async () => {
  try {
    let inp = document.getElementById("search-bar").value;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyCQFxSv50MXS2Bx90IqeJ4f32gvRSzoXcM&maxResults=20`
    );
    let data = await res.json();
    let videos = data.items;
    appendvideo(videos);
    console.log(videos);
  } catch (error) {
    console.log(error);
  }
};
const appendvideo = (data) => {
search_results_div.innerHTML = null
try{
    data.forEach((el) => {
    let div = document.createElement('div')
    let title = document.createElement("p")
    title.innerText = el.snippet.title
    title.setAttribute("id","title")
    let img = document.createElement("img")
    img.src = el.snippet.thumbnails.default.url
    let iframe = document.createElement("iframe")
    iframe.src = `https://www.youtube.com/embed/${el.id.videoId}`
    div.append(iframe,title)
    search_results_div.append(div)
})
} catch (error) {
    console.log(error)
}
}
