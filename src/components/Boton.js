import React, { useState } from 'react';

function Boton() {
  const [texto, setTexto] = useState('Hacer clic aquí');

  return <button onClick={() => setTexto('¡Gracias por hacer clic!')}>{texto}</button>;
}

export default Boton;
