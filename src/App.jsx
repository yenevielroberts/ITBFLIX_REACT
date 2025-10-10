import React  from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Footer'
import Header from './Header'
import SeccionesCotenido from './SeccionesContenido'
import './css/App.css'



class App extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <SeccionesCotenido 
        titleSection='Series'
        img1='https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg'
        />
        <SeccionesCotenido 
        titleSection='Películas'
        />
        <SeccionesCotenido 
        titleSection='Actores'
        />
        <SeccionesCotenido 
        titleSection='Más visto'
        />
        <Footer />
      </div>
    )
  }
}

export default App
