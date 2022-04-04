import {useState} from 'react'

function WeatherForm( {setCurrentCity}) {

  const [newCity, setNewCity] = useState("")

  const handleSubmit = (event => {
    event.preventDefault();
    setCurrentCity(newCity)
  })

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