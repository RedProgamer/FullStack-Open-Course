import axios from "axios";
import { useState, useEffect } from "react";

function Specific(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState({});

    const languages = props.languages;
    const langs = Object.values(languages);
    
    //weather api
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.capital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(response => {
            setIsLoaded(true);
            console.log(response);
            
            const weather = {
                icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                temp: response.data.main.temp,
                wind: response.data.wind.speed,
            };
            setWeatherInfo(weather);
        });
    }, [props.capital]);

    return (
        <div>
            <h1>{props.name.common}</h1>
            <p>
                <p>region : {props.continents}</p>
                <p>capital: {props.capital}</p>
                <p>population: {props.population}</p>
            </p>
            <h2>Languages : </h2>
            <ul>
                {langs.map(language => {
                    return <li key={language}>{language}</li>
                })}
            </ul>
            <img src={props.flags.svg} alt="country's flag" style={{ width: '300px', height: '300px'}}/>
            
            {!isLoaded && <h2>Loading weather...</h2>}
            {isLoaded && <>
                {console.log(weatherInfo)}
                <h2>Weather in {props.capital}</h2>
                <p><b>Temperature : </b> {weatherInfo.temp} degree celsius</p>
                <img src={weatherInfo.icon} alt="weather icon" />
                <p><b>Wind : </b> {weatherInfo.wind}</p>
            </>}
        </div>
    );
}

export default Specific;