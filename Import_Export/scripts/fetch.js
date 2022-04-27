let getdata = async (url) => {
  let res = await fetch(url);
  let data = await res.json();
  return data;
};

let append = (data, container) => {
  data.forEach(({ title, image }) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = title;
    let picture = document.createElement("img");
    picture.src = image;
    picture.setAttribute("id", "picture");
    div.append(picture, p);
    container.append(div);
  });
};

let url = "https://fakestoreapi.com/products/category/electronics"

let container =  document.getElementById("container")

export { getdata, append };
