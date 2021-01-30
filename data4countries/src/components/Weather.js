import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({city}) => {
    const [icon, setIcon ] = useState('')
    const [ wind, setWind ] = useState('')
    const [ windDir, setWindDir ] = useState('')
    const [ temp, setTemp] = useState('')
    const weatherHook = () => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=${city}`)
            .then(res => {
                // setWeather(res.data)
                const data = res.data
                console.log('res data', data);
                setTemp(data.current.temperature)
                setIcon(data.current.weather_icons[0])
                setWind(data.current.wind_speed)
                setWindDir(data.current.wind_dir)
                
            })
    }
    useEffect(weatherHook, [])
    

    return(
        <div>
            <h2>weather in {city}</h2>
            {temp}
            <div>
                temperature {temp}
            </div>
            <div>
                <img src={icon}></img>
            </div>
            <div>
                wind {wind}
                <br></br>
                direction {windDir}
            </div>
        </div>
    )
}

export default Weather