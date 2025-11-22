import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Contacto from "./components/Contacto"
import LoginFormulario from './components/login'
import Series from './components/listaSeries'
import Movies from './components/listaMovies'
import News from './components/paginaNoticias'
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
          <Route path="/series" element={<Series />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/news" element={<News />}/>
        </Routes>
      </>
      
    )
  }
}

export default App