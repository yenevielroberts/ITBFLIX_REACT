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
        series: [
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'HOla',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg'
        ],
        peliculas: [
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'series',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg'
        ],
        actores: [
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg',
          'https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg'
        ]
      }
    ]
    return (

      <div className='container'>

        <Header />
        {//Reat necesita una forma de identificar cada elemento de forma unica dentro de una lista
        imagenes.map((seccion, index) => {

          return (

            <div key={index} className='secciones'>
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
            </div>
          )

        })}

        <SeccionesCotenido
          titleSection='Más visto'
          imagenes={['https://m.media-amazon.com/images/S/pv-target-images/acbc04447a8403b46c707776047f14eff2f261c52f7f7f9e30e0d7c87bd03334.jpg']}
        />

        <Footer />
      </div>
    )
  }
}

export default App
