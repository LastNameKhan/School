

document.getElementById("search_btn").addEventListener("click",function(){
    document.getElementById("search").innerHTML = null;
    let search = document.getElementById("search").value
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=aa1d6807323622637e3e2e91459350ca`
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          console.log(res);
          append(res)
        })
        .catch(function (error) {
          console.log(error);
        });
})

function append(data){
    let div1 = document.createElement('div')
    let icon1 = document.createElement("span")
    icon1.className = "fa-solid fa-sun";
    let date1 = document.createElement('p')
    date1.innerText = data.list[0].dt_txt;
    let temp1 = document.createElement("p")
    temp1.innerText = (data.list[0].main.temp_max) - 273;
    let mintemp1 = document.createElement("p")
    mintemp1.innerText = (data.list[0].main.temp_min) - 273;
    let div2 = document.createElement('div')
    let icon2 = document.createElement("span")
    icon2.className = "fa-solid fa-sun";
    let date2 = document.createElement('p')
    date2.innerText = data.list[1].dt_txt;
    let temp2 = document.createElement("p")
    temp2.innerText = (data.list[1].main.temp_max) - 273;
    let mintemp2 = document.createElement("p")
    mintemp2.innerText = (data.list[1].main.temp_min) - 273;
    let div3 = document.createElement('div')
    let icon3 = document.createElement("span")
    icon3.className = "fa-solid fa-sun";
    let date3 = document.createElement('p')
    date3.innerText = data.list[2].dt_txt;
    let temp3 = document.createElement("p")
    temp3.innerText = (data.list[2].main.temp_max) - 273;
    let mintemp3 = document.createElement("p")
    mintemp3.innerText = (data.list[2].main.temp_min) - 273;
    let div4 = document.createElement('div')
    let icon4 = document.createElement("span")
    icon4.className = "fa-solid fa-sun";
    let date4 = document.createElement('p')
    date4.innerText = data.list[3].dt_txt;
    let temp4 = document.createElement("p")
    temp4.innerText = (data.list[3].main.temp_max) - 273;
    let mintemp4 = document.createElement("p")
    mintemp4.innerText = (data.list[3].main.temp_min) - 273;
    let div5 = document.createElement('div')
    let icon5 = document.createElement("span")
    icon5.className = "fa-solid fa-sun";
    let date5 = document.createElement('p')
    date5.innerText = data.list[4].dt_txt;
    let temp5 = document.createElement("p")
    temp5.innerText = (data.list[4].main.temp_max) - 273;
    let mintemp5 = document.createElement("p")
    mintemp5.innerText = (data.list[4].main.temp_min) - 273;
    let div6 = document.createElement('div')
    let icon6 = document.createElement("span")
    icon6.className = "fa-solid fa-sun";
    let date6 = document.createElement('p')
    date6.innerText = data.list[5].dt_txt;
    let temp6 = document.createElement("p")
    temp6.innerText = (data.list[5].main.temp_max) - 273;
    let mintemp6 = document.createElement("p")
    mintemp6.innerText = (data.list[5].main.temp_min) - 273;
    div1.append(date1,icon1,temp1,mintemp1)
    div2.append(date2,icon2,temp2,mintemp2)
    div3.append(date3,icon3,temp3,mintemp3)
    div4.append(date4,icon4,temp4,mintemp4)
    div5.append(date5,icon5,temp5,mintemp5)
    div6.append(date6,icon6,temp6,mintemp6)
    document.getElementById("container").append(div1,div2,div3,div4,div5,div6)
    console.log(name)
}