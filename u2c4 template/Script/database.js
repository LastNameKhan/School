var studentarr = JSON.parse(localStorage.getItem("StudentDataBase"));
var acceptarr = []
var rejectarr = []
studentarr.map(function(elem,index,array){
    var row = document.createElement("tr")
    var col1 = document.createElement("td")
    col1.innerText= elem.name
    var col2 = document.createElement("td")
    col2.innerText=elem.age
    var col3 = document.createElement("td")
    col3.innerText=elem.gender
    var col4 = document.createElement("td")
    col4.innerText=elem.email
    var col5 = document.createElement("td")
    col5.innerText=elem.number
    var col6 = document.createElement("td")
    col6.innerText="Accept"
    col6.addEventListener("click",function (){
        console.log(elem)
        acceptarr.push(elem)
        localStorage.setItem("admitted",JSON.stringify(acceptarr))
    })
    var col7 = document.createElement("td")
    col7.innerText="Reject";
    col7.addEventListener("click",function (){
        localStorage.setItem("rejected",JSON.stringify(rejectarr))
        rejectarr.push(elem)
    })

    row.append(col1,col2,col3,col4,col5,col6,col7);
    document.querySelector("#body").append(row)
});
