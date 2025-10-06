import React  from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Footer'
import Header from './Header'
import './App.css'



class App extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
