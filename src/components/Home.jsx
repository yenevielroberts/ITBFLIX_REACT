import React from 'react'
import Footer from './Footer'
import SeccionesCotenido from './SeccionesContenido'
import data from '../db/data.json'


class Home extends React.Component {

  render() {

   

    return (
      <main>
        <h1 className='flex text-white text-2xl justify-center m-20'>ITB FLIX</h1>
        {/**Barra de busqueda */}
        <div className="flex  h-20 mb-28 items-center justify-center">
          <form className='formBarra'>
            <div className='relative w-full max-w-xl'>
              {/**Icono */}
              <svg className="absolute left-3 top-1/2  transform -translate-y-1/2 w-5 h-5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
              {/**input */}
              <input type="text" id="search" name="search" placeholder='Buscar película o series' className='w-full h-10 rounded-xl pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500' aria-label='Barra de busqueda'/>
            </div>
          </form>
        </div>
        <div className='secciones' >
            <SeccionesCotenido
              titleSection="Series"
              imagenes={data.Series}//Paso un array
            />
            <SeccionesCotenido
              titleSection='Películas'
              imagenes={data.Movies}
            />
            <SeccionesCotenido
              titleSection='Actores'
              imagenes={data.actores}
            />

            <SeccionesCotenido
              titleSection='Más visto'
              imagenes={data.loMasVisto}
            />
        </div>
      </main>
    )
  }
}

export default Home
