import React from 'react'

function Weather({temperature}: any, {description}: any, {currentCity}: any ) {
  return (
      <div>
        <h2>{currentCity}</h2>
        <h3>{temperature}</h3>
        <h3>{description}</h3>
      </div>
    
  )
}

export default Weather