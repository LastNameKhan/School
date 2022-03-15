//store the products array in localstorage as "products"
document.querySelector("#form").addEventListener("submit",storedata)
var arr = [];
function storedata () {
    event.preventDefault()
    var dataobj = {
        name:document.querySelector("#name").value,
        price:document.querySelector("#price").value,
        brand:document.querySelector("#brand").value,
        type:document.querySelector("#select").value,
        link:document.querySelector("#link").value,
    }
    function construct (a,b,c,d,e) {
        this.name = a;
        this.number = b;
        this.brand = c;
        this.type = d;
        this.image = e;
    }
    let data = new construct(name,price,brand,select,link)
    arr.push(dataobj)
    localStorage.setItem("products",JSON.stringify(arr))
}
document.querySelector("h2").addEventListener("click",function (){
    <a href="inventory.html"></a>
})