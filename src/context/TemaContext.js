import React, { createContext, useContext, useState } from 'react';

const TemaContext = createContext();

export function useTema() {
  return useContext(TemaContext);
}

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
}
