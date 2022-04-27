import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

// let getdata = async () => {
//     try {
//         let res = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
//         let data = await res.json();
//         append(data)
//         console.log(data)
//     } catch(error) {
//         console.log(error)
//     }
// }
// getdata();

// let append = (data) => {
//     let container = document.getElementById("container")
//     data.forEach((elem) => {
//     let div = document.createElement("div")
//     let p = document.createElement("p")
//     p.innerText = elem.title
//     let image = document.createElement("img")
//     image.src = elem.image
//     image.setAttribute("id","picture")
//     div.append(image,p)
//     container.append(div)
//     })
// }

let url = "https://fakestoreapi.com/products/category/jewelery";

let container = document.getElementById("container");

import { getdata, append } from "./fetch.js";

getdata(url).then((res) => {
  append(res, container);
});
