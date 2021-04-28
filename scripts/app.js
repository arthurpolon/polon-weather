const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = ({ cityDets, weather }) => {
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    card.classList.remove('d-none')

    // update time image day/night
    weather.IsDayTime ? timeSrc = 'img/day.svg' : timeSrc = 'img/night.svg'
    time.setAttribute('src', timeSrc)

    //update weather icon 
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)
}

const UpdateCity = async city => {

    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.Key)

    return {
        cityDets,
        weather
    }
} 

cityForm.addEventListener('submit', e => {
    e.preventDefault()

    const city = e.target.city.value.trim()
    e.target.reset()

    UpdateCity(city)
        .then(data => {updateUI(data)})
        .catch(err => console.log(err))
    }
)