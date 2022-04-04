import React from 'react'

function Weather({temperature, description, error, errorCode}) {

  console.log({description})


  if(error === false){
    return (
      <div>
        <h3>{temperature} °C</h3>
        <h3>{description}</h3>
      </div>
    
  )
  }else{
    return(<div>Impossible d'afficher la ville choisie</div>)
  }
  
}

export default Weather