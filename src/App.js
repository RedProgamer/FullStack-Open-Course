import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import Search from './component/Search';
import Content from './component/Content';

const App = () => {
  const [input, setInput] = useState('');
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const inputHandler = (event) => {
    event.preventDefault();
    setInput(event.target.value);

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()));
    setFiltered(filteredCountries);
  }

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setIsLoaded(true);
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(filtered);
  }, [filtered]);

  return (
    <Fragment>
      {!isLoaded && <h1>Loading data...</h1>}
      {isLoaded && <>
        <Search onChange={inputHandler} value={input} />
        <Content filteredList={filtered} setCountry={setFiltered}/>
      </> }
    </Fragment>
  )
}

export default App;