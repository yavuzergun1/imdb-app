import React from 'react'
import { UseData } from '../Context/Context'

function Favorites() {
    const {favorites}= UseData();
  return (
    <div>
        favorites
        {favorites.map((favorite, index)=>
       <div key={index}>{favorite} </div> )}
    </div>
  )
}

export default Favorites