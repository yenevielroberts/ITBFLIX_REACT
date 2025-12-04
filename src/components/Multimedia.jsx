import data from '../db/multimedia.json'
import React from 'react'
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';

class Multimedia extends React.Component {

    render() {

        const  imagenes  = data.seriesWebp
        const titleSection  = "Multimedia"

        let arrayImagenes = []; {/**Array donde se guarda el contenedor individual de la imagenes*/ }
        
            arrayImagenes = imagenes.map((imagen, index) => (

                /*Contenedor indivual de las imagenes */
                <div className="mb-10 mt-5 rounded-xl hover:ring-4 ring-yellow-300" key={index} >
                    <a href=''>
                        <img src={imagen.image}
                        srcSet={`${imagen.image} 1x, ${imagen.image} 2x`} loading="lazy" className="max-w-56 max-h-56 rounded-xl" />
                    </a>
                </div>
            ));
        


        return (
            <section className="flex-col mb-36 h-fit sm:h-fit bg-blue-900" >
                <h2 className=" mb-2 ml-2 p-3 w-96 text-white font-serif text-2xl">{titleSection}</h2>
                {/**Contenedor de todas las imagenes de una sección */}
                <div className=" flex flex-row flex-wrap  justify-evenly ">
                    {arrayImagenes}{/**Muestro las imagenes */}
                </div>
                
                <AudioPlayer />
                <VideoPlayer />
            </section>
           

           
        )
    }

}


export default Multimedia
