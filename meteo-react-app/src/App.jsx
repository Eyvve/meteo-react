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

  useEffect(() => {
    setError(false)
  });

  const successCallback = () => {
    console.log("requete réussie")
  }

  const failureCallback = (erreurCode) => {
    setError(true)
    console.log("raté")
    setErrorCode(String(erreurCode))
  }

  const handleUpdate = () => {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + currentCity + '&limit=1&appid=5f9a2b6e96d642eca0ad699f9dddac4e')
    .then(response => response.json())
    .then(data => {
      
      setLat(data[0].lat)
      setLon(data[0].lon)
    })
    .then(request =>
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&lang=fr&units=metric&appid=5f9a2b6e96d642eca0ad699f9dddac4e')
    )
    .then(response => response.json())
    .then(
      data => {
        setDescription( String(data.weather[0].description) )
        setTemperature(data.main.temp)
      }
    )
    .catch(failureCallback, successCallback)
    .finally(console.log("requête terminée"))
  }

  return (
    <div className="App">
      <WeatherForm setCurrentCity={setCurrentCity} handleUpdate={handleUpdate} />
      <h1>{currentCity}</h1>
      <Weather temperature={temperature} description={description} error={error} errorCode={errorCode}/>

    </div>
  );
}

export default App;
