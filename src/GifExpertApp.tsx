import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Sponge Bob' ]);
  
  const onAddCategory = ( newCategory: any ) => {

    if ( categories.includes( newCategory ) ) return;

    setCategories( [ newCategory, ...categories ] ); // agrega la nueva categoria
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* // lo unico que hace es emitir el nuevo valor a insertar */}
      <AddCategory 
        // setCategories = { setCategories }
        onNewCategory = { onAddCategory }
      />

      { 
        categories.map( category => ( 
          <GifGrid key = { category } category = { category } />
        ))
      }
    </>
  )
}
