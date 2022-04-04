import './App.css';
import { useEffect, useState } from 'react';

import WeatherForm from './WeatherForm';
import Weather from './Weather';
import { stringify } from 'querystring';

function App() {

  // Salut JF, désolé d'avoir baclé le travail mais je suis dans une galère infernale avec mon entreprise (situation assez grave) qui m'a obligé a m'arrêter au minimum sur cet exercice , il est possible que les derniers pushs soient un peu en retard

  const [currentCity, setCurrentCity] = useState<string>('Montreuil')
  const [error, setError] = useState<boolean>(false)
  const [lat, setLat] = useState<number>()
  const [lon, setLon] = useState<number>()
  const [description, setDescription] = useState<string>('')
  const [temperature, setTemperature] = useState<number>()

  // const successCallback = () => {
  //   console.log("requete réussie")
  // }

  const failureCallback = () => {
    setError(true)
    console.log("raté")
  }

  useEffect(() => {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + currentCity + '&limit=1&appid=5f9a2b6e96d642eca0ad699f9dddac4e')
    .then(response => response.json())
    .then(data => {
      setError(false)
      setLat(data[0].lat)
      setLon(data[0].lon)
    })
    .then(request =>
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&lang=fr&units=metric&appid=5f9a2b6e96d642eca0ad699f9dddac4e')
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
    .catch(failureCallback)
  })

  return (
    <div className="App">
      <WeatherForm setCurrentCity={setCurrentCity} />
      <h1>{currentCity}</h1>
      <Weather temperature={temperature} description={description} error={error}/>

    </div>
  );
}

export default App;
