import './App.css';
import { useEffect, useState } from 'react';

import WeatherForm from './WeatherForm';
import Weather from './Weather';

function App() {


  const [currentCity, setCurrentCity] = useState('Montreuil')
  const [error, setError] = useState(false)
  const [errorCode, setErrorCode] = useState()
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [description, setDescription] = useState('')
  const [temperature, setTemperature] = useState()

  const successCallback = () => {
    console.log("requete réussie")
  }

  const failureCallback = (erreurCode) => {
    setError(true)
    console.log("raté")
    setErrorCode(String(erreurCode))
  }

  useEffect(() => {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + currentCity + '&limit=1&appid=bae3756c2dc0ea543a559f9826cc5a54')
    .then(response => response.json())
    .then(data => {
      setError(false)
      console.log(data)
      setLat(data[0].lat)
      setLon(data[0].lon)
    })
    .then(request =>
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&lang=fr&units=metric&appid=bae3756c2dc0ea543a559f9826cc5a54')
    )
    .then(response => response.json())
    .then(
      data => {
        setError(false)
        console.log(data)
        setDescription( String(data.weather[0].description) )
        setTemperature(data.main.temp)
        console.log(description)
      }
    )
    .catch(failureCallback, successCallback)
  })

  return (
    <div className="App">
      <WeatherForm setCurrentCity={setCurrentCity} />
      <h1>{currentCity}</h1>
      <Weather temperature={temperature} description={description} error={error} errorCode={errorCode} />

    </div>
  );
}

export default App;
