import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({});

  useEffect( () => {
    // Prevent the first execution
    if (city === '') return;

    const requestAPI = async () => {
      const token = 'e04e8cdb238c4678ebcb63220ecb986d';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${token}`;
      const resp = await fetch(url);
      const result = await resp.json();
      setWeather(result);
    }

    requestAPI();
  }, [city, country] )

  const dataQuery = ({ city, country }) => {
    if (city === '' || country === '') {
      setError(true);
      return;
    }

    setCity(city);
    setCountry(country);
    setError(false);
  }

  let component;
  if (error) {
    component = <Error
                  msg="Both fields are required"
                />;
  } else if (weather.cod === '404') {
    component = <Error
                  msg="The city and the country doesn't match"
                />;
  } else{
    component = <Weather
                  weather={ weather }
                />;
  }

  return (
    <div className="App">
      <Header
        title="React Weather"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form
                dataQuery={ dataQuery }
              />
            </div>
            <div className="col s12 m6">
              { component }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
