//Store the generated number in LocalStorage with key "number".
document.querySelector("#throw_dice").addEventListener("click",create);
var arr= []
function create()  
{
    event.preventDefault()
    var num = Math.floor(Math.random()*6)+1;
    arr.push(num)
    localStorage.setItem("number",JSON.stringify(arr))
}
