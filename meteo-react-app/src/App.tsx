import './App.css';
import { useEffect, useState } from 'react';

import WeatherForm from './WeatherForm';
import Weather from './Weather';

function App() {

  const [currentCity, setCurrentCity] = useState<string>('Paris')
  const [lat, setLat] = useState<number>()
  const [lon, setLon] = useState<number>()
  const [description, setDescription] = useState<string>('')
  const [temperature, setTemperature] = useState<number>()


  useEffect( () => {
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
        console.log(data)
        setDescription(data.weather[0].description)
        setTemperature(data.main.temp)
        console.log(typeof(currentCity))
      }
    )
  })

  return (
    <div className="App">
      <WeatherForm />
      <h1>{currentCity}</h1>
      <Weather temperature={temperature} description={description} currentCity={currentCity}  />

    </div>
  );
}

export default App;
