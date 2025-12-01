import data from '../db/multimedia.json'
import React from 'react'
import SeccionesCotenido from './SeccionesContenido'

class Multimedia extends React.Component {

  render() {

    return (

      <main>
        
      
        <div className='secciones' >
            <SeccionesCotenido
              titleSection="Multimedia"
              imagenes={data.seriesWebp}//Paso un array
            />
        </div>
      </main>
    )
  }
}

export default Multimedia
