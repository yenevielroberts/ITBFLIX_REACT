import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Footer'
import Header from './Header'
import SeccionesCotenido from './SeccionesContenido'
import '../css/App.css'


class App extends React.Component {

  render() {

    const imagenes = [
      {
        series: ['/img/series/community.jpg', '/img/series/houseposter.jpg', '/img/series/shadowandbone.jpg', '/img/series/thelastkingdom.jpg', '/img/series/TheOutpost.jpg', '/img/series/theresident.jpg', '/img/series/travelers.jpg', '/img/series/blacklightning.png'],
        peliculas: [
          '/img/peliculas/catchmeifyoucan.jpg', '/img/peliculas/littlewomen.jpg', '/img/peliculas/elpadrino.jpg', '/img/peliculas/nowyouseeme.jpg', '/img/peliculas/Oppenheimer.jpg', '/img/peliculas/the king.png', '/img/peliculas/shadowhunters.jpg', '/img/peliculas/Mortalengines.jpg'

        ],
        actores: [
          '/img/actores/alexanderDreymon.png',
          '/img/actores/emilyblunt.webp',
          '/img/actores/chinaann.png',
          '/img/actores/saoirseronan.png',
          '/img/actores/nafessawilliams.png'
        ],
        masvisto: [
          '/img/peliculas/nowyouseeme.jpg', '/img/series/TheOutpost.jpg',
          '/img/series/houseposter.jpg','/img/series/blacklightning.png','/img/series/travelers.jpg','/img/peliculas/littlewomen.jpg','/img/peliculas/elpadrino.jpg'
        ]
      }
    ]
    return (

      <div className='container'>

        <Header />
        {//Reat necesita una forma de identificar cada elemento de forma unica dentro de una lista
          imagenes.map((seccion, index) => {

            return (

              <div key={index} className='secciones' >
                <SeccionesCotenido
                  titleSection="Series"
                  imagenes={seccion.series}
                />
                <SeccionesCotenido
                  titleSection='Películas'
                  imagenes={seccion.peliculas}
                />
                <SeccionesCotenido
                  titleSection='Actores'
                  imagenes={seccion.actores}
                />

                <SeccionesCotenido
                  titleSection='Más visto'
                  imagenes={seccion.masvisto}
                />
              </div>
            )

          })}



        <Footer />
      </div>
    )
  }
}

export default App
