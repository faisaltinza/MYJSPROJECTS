let temp = document.querySelector('#temp')
let icon = document.querySelector("img")






 setInterval(function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=2cde6a9d5bf17f45d8aadb754225b2d9')
    .then((response)=>{return response.json()})
    .then((data)=>{console.log(data.main.temp-273.15); let PngImg = data.weather[0].icon
        icon.src=`https://openweathermap.org/img/wn/${PngImg}@2x.png`
        
        let tempatrue = (data.main.temp-273).toFixed(2)
        temp.innerHTML=tempatrue
    }).catch((error)=>{console.log("Error :",error);    
    })
    },1000)