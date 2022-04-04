import {useState} from 'react'

function WeatherForm( {setCurrentCity, handleUpdate}) {

  const [newCity, setNewCity] = useState("")


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleSubmit = (event => {
    event.preventDefault();
    setCurrentCity(capitalizeFirstLetter(newCity))
    {handleUpdate()}
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