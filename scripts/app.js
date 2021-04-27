const cityForm = document.querySelector('form')

const renderCityWeather = async city => {

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

    renderCityWeather(city)
        .then(data => {console.log(data)})
        .catch(err => console.log(err))
    }
)
