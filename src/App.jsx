import React from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from "./components/Home"
import Contacto from "./components/Contacto"
import Login from './components/login'
import Series from './components/listaSeries'
import Movies from './components/listaMovies'
import News from './components/paginaNoticias'

class App extends React.Component{

  render(){

    return(
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/series" element={<Series />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/news" element={<News />}/>
        </Routes>
      </>
      
    )
  }
}

export default App