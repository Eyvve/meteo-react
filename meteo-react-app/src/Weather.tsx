import React from 'react'

// soucis de typage, description apparait comme "undefined", quoi que je fasse, même en forcant le string, ça ne fonctionne pas
function Weather({temperature}: any, {description}: any) {

  console.log({description})


  // if(error == false){
    return (
      <div>
        <h3>{temperature} °C</h3>
        <h3>{description}</h3>
      </div>
    
  )
  // }else{
  //   return(<div>Impossible d'afficher la ville choisie</div>)
  // }
  
}

export default Weather