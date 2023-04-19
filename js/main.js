window.onload=()=>{   
    
    // Declaring variables to access DOM elements
    var btn = document.querySelectorAll("button");
    var output = document.getElementById("output");
    var location = document.getElementById("location");
    var temperature = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");    
    var wind = document.getElementById("wind");    
    var icon = document.getElementById("icon");    


    for(var i=0; i<btn.length; i++){
        btn[i].addEventListener("click", (e)=>{getWeather(e)});
        };  
        // the paramenter "e" here represents the "event", used for displaying data for the repective button

        function getWeather(e){
        output.style.display="block";
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+e.target.id+"&appid=eb1ca7ca219633e2d83086aac238852c&units=metric";

        // Creating API request
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4){
                if(xhr.status ===200){
                    const data = xhr.response;
                    console.log(data);

                    //manipulating DOM
                    icon.src="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
                    location.innerHTML = data.name;
                    temperature.innerHTML = data.main.temp;
                    conditions.innerHTML = data.weather[0].description;
                    wind.innerHTML = data.wind.speed;
                } else { //Validation
                    location.innerHTML = "API call was unsuccessfull";
                    console.log(xhr.status); 
                }
            }
        }
        xhr.open('GET',url);
        xhr.responseType = "json";
        xhr.send(null);
    }
}

