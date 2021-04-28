const key = 'KyST4qFu5geJsRNny6tUZuGNZ3p53ANA'

//get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const data = await (await fetch(base + query)).json()

    return data[0]
}

const getWeather = async (cityId) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityId}?apikey=${key}`

    const data = await (await fetch(base + query)).json()

    return data[0]
}

