import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ])

  const onAddCategoty = ( newCategory ) => {
    if ( categories.includes( newCategory ) ) return;
    // console.log(newCategory)
    setCategories( [newCategory,...categories] )
  }

  return (
    <>
        {/* Tiutlo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory
          // setCategories={setCategories}
          onNewCategory={ onAddCategoty }
        />

        {/* Listado de Gifs */}
        

        { categories.map( category => (
              <GifGrid 
                key={category} 
                category={category}
              />
          ))
        }

    </>
  )
}


// Me quede en el useEffect -> Clase de react
