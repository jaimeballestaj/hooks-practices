import React, { useState } from 'react'

export const SecondComponent = () => {

  const [ name, setName ] = useState("JAIME BALLESTA J");
  const [ isNameChanged, setIsNameChanged ] = useState(false);

  const changeName = (e) => {
    if (isNameChanged) {
      setName("JAIME BALLESTA");
    } else {
      setName("Pedro Oliveros");
    }
    setIsNameChanged(!isNameChanged);
  }

  return (
    <div>
      <h3>Componente: SecondComponent</h3>
      <p>{ name }</p>
      <div>
        <button className='button-large' onClick={ changeName }>Cambiar nombre</button>
      </div>
    </div>
  )
}
