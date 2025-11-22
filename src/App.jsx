import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Contacto from "./components/Contacto"
import LoginFormulario from './components/login'
import Lista from './components/Listas'
import News from './components/Noticias'
import Header from './components/Header'

class App extends React.Component{

  render(){

    return(
      <>
        <Header/>
        <Routes>
          <Route path="/login" element={<LoginFormulario />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/series" element={<Lista listas="series"/>}/>
          <Route path="/movies" element={<Lista listas="movies"/>}/>
          <Route path="/news" element={<News />}/>
        </Routes>
      </>
      
    )
  }
}

export default App