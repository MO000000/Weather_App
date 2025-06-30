var Box1 = document.querySelector("#Box1");
var Box2 = document.querySelector("#Box2");
var Box3 = document.querySelector("#Box3");
var searchBar = document.querySelector("#searchBar");
let searchValue = searchBar.value || "Moscow"
showData()


searchBar.addEventListener("keyup",function(){
    searchValue = searchBar.value;
    console.log(searchValue)
    showData()
})

function showData() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    var forecast = new XMLHttpRequest();
    forecast.open("get", `https://api.weatherapi.com/v1/forecast.json?key=5c3e7940ab2044ec9ce70026253006&q=${searchValue}&days=3`)
    forecast.send()
    forecast.addEventListener("readystatechange", function () {
        if (forecast.readyState == 4) {
            let temp = JSON.parse(forecast.response);
            const d = new Date();
            let nameOfDay = weekday[d.getDay()];
            let nameOfMonth = months[d.getMonth()];
            let day = d.getDate();
            let cityName = temp.location.name;
            let currentTemperature = temp.current.temp_c;   
            let icon = temp.current.condition.icon;
            let currentText = temp.current.condition.text;

                        //    day 1      //
        Box1.innerHTML = `
            <div class="head d-flex justify-content-between">
                <div class="day">${nameOfDay}</div>
                <div class="date">${day + nameOfMonth}</div>
            </div>
            <div class="Degree">
                <div class="Area">${cityName}</div>
                <div class="sup-degree">
                <div class="Temp">${currentTemperature}<sup>o</sup>C</div>
                <div class="Weather-icon">
                    <img src="${icon}" alt="Weather-icon" />
                </div>
                </div>
                <div class="status">${currentText}</div>
                <span><img src="../images/icon-umberella.png" alt="Umber" /> 20%</span>
                <span><img src="./images/icon-wind.png " alt="wind" /> 18km/h</span>
                <span><img src="./images/icon-compass.png" alt="compass" /> East</span>
            </div>`
                                 //     day 2    //
            let DayTwo = temp.forecast.forecastday[1].date;
            const dy = new Date(DayTwo);
            let dayTwo = weekday[dy.getDay()];
            let iconDayTwo = temp.forecast.forecastday[1].day.condition.icon;
            let greatTempDayTwo = temp.forecast.forecastday[1].day.maxtemp_c;
            let smallTempDayTwo = temp.forecast.forecastday[1].day.mintemp_c;
            let textDayTwo = temp.forecast.forecastday[1].day.condition.text;
        Box2.innerHTML =
        `<div class="head">
                <div class="day">${dayTwo}</div>
            </div>
            <div class="Degree">
                <div class="Weather-icon">
                <img src="${iconDayTwo}" alt="Weather-icon" />
            </div>
                <div class="sup-degree">
                    <div class="Great">${greatTempDayTwo} <sup>o</sup>C</div>
                    <div class="small">${smallTempDayTwo} <sup>o</sup>C</div>
                </div>
                <div class="status">${textDayTwo}</div>
            </div>`
             
                                     // day3
        let DayThr = temp.forecast.forecastday[2].date;
            const dx = new Date(DayThr);
            let dayThr = weekday[dx.getDay()];
            let iconDayThr = temp.forecast.forecastday[2].day.condition.icon;
            let greatTempDayThr = temp.forecast.forecastday[2].day.maxtemp_c;
            let smallTempDayThr = temp.forecast.forecastday[2].day.mintemp_c;
            let textDayThr = temp.forecast.forecastday[2].day.condition.text;
        Box3.innerHTML =
        ` <div class="head">
              <div class="day">${dayThr}</div>
            </div>
            <div class="Degree">
                <div class="Weather-icon">
                <img src="${iconDayThr}" alt="Weather-icon" />
              </div>
              <div class="sup-degree">
                <div class="Great">${greatTempDayThr} <sup>o</sup>C</div>
                <div class="small">${smallTempDayThr} <sup>o</sup>C</div>
              </div>
              <div class="status">${textDayThr}</div>
            </div>`
        }
    })
}