import './App.css'
import Navbar from './componentes/Navbar.js'
import React from 'react'
import Botao from './componentes/Botao.js'
import Fam from './componentes/Fam1.js'
import Textos from './componentes/Textos'


function App() {
  return (
    <header>
      <div className="App">
        <Navbar/>
      </div>
      <div className='FAmarelo'>
       <Fam />
      </div>
      <div className='n1'>
        <Textos/>
      </div>
      <div className='Botao'>
        <Botao/>
      </div>
    </header>
  );
}

export default App;