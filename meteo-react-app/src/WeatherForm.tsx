import {useState} from 'react'

function WeatherForm( {setCurrentCity}: any) {

  const [newCity, setNewCity] = useState<string>("second")

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setCurrentCity(newCity)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Ville : </label>
        <input type="text" id='city' onChange={(e) => (setNewCity(e.target.value))} />
        <button type='submit'>Cherchez</button>
      </form>
    </div>
  )
}

export default WeatherForm