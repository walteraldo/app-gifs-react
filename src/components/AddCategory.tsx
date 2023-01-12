import { useState } from 'react';

type Props = {
  onNewCategory: any
}

export const AddCategory = ( { onNewCategory }: Props) => {

  const [ inputValue, setinputValue ] = useState( '' );

  // const onInputChange = ( event: any ) => {
  //   console.log(event.target.value);
  //   setinputValue( event.target.value );
  // } 
  const onInputChange = ( { target }: any ) => {
    setinputValue( target.value );
  } 

  const onSubmit = ( event: any )=> {
    event.preventDefault(); // para evitar el refresh del navegador

    // validación si el inputvalue tiene espacios adelante o atras, o si tiene solo un caracter no se ejecuta lo demás
    if (inputValue.trim().length <= 1) return;
    
    // recibe las categorias y agrega lo que se escribe en el input y lo agrega al array
    // setCategories( (categories: any) => [ inputValue, ...categories ] );

    // para que se limpie el input
    setinputValue('');
    
    onNewCategory( inputValue.trim() );
  }

  return (
 // <form onSubmit = { event => onSubmit(event) }>
    <form onSubmit = { onSubmit }>
      <input 
        type = 'text'
        placeholder = 'Buscar Gifs'
        value = { inputValue }
        // onChange = { event => onInputChange(event) }
        onChange = { onInputChange }
      />
    </form>
  )
}
