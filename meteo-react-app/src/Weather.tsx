import React from 'react'

function Weather({temperature}: any, {description}: any) {

  console.log({description})

  return (
      <div>
        <h3>{temperature} °C</h3>
        <h3>{description}</h3>
      </div>
    
  )
}

export default Weather