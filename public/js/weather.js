// #### Here we will be using a weather api from open weather map.
// I had to jerry rig this due to wonky site documentation.

// API_KEY for maps api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '682f216b2emsh10e8dc2a47b3b80p172b60jsna19dfd09f19a',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

let locate = document.getElementById('locate')
let btn = document.getElementById('btn')
let errorText = document.getElementById('errorText')

let display = document.getElementById('display')

let addcity = document.getElementById('addcity')

let cityName = document.getElementById('cityName')
let cityCondition = document.getElementById('cityCondition')
let cityTemp = document.getElementById('cityTemp')
let minmaxTemp = document.getElementById('minmaxTemp')

const getWeatherData = async (city) => {
  try {
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    let name = data.location.city
    let region = data.location.country
    let condition = data.current_observation.condition.text
    let temp = data.current_observation.condition.temperature
    let minTemp = data.forecasts[0].low
    let maxTemp = data.forecasts[0].high

    cityName.innerText = `${name}, ${region}`
    cityCondition.innerText = `${condition}`
    cityTemp.innerText = `${temp}  ℃`
    minmaxTemp.innerText = `Low: ${minTemp} | High: ${maxTemp}`

    errorText.innerText =``

  } catch (error) {
    console.log(error)
    errorText.innerText =`Please search a city`
  }
}

btn.onclick = () => {
  console.log(locate.value)
  getWeatherData(locate.value)
}

locate.onkeydown = (e) => {
    if (e.keyCode == 13) {
      console.log(locate.value)
    getWeatherData(locate.value)
  }
}


